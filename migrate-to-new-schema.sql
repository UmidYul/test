-- Миграция базы данных ZEDLY: переход на новую схему
-- Файл: migrate-to-new-schema.sql
-- Запускать после бэкапа данных!

-- ШАГ 1: Создание новых таблиц

-- Users (обновленная)
CREATE TABLE IF NOT EXISTS new_users (
    id UUID PRIMARY KEY,
    role user_role_enum NOT NULL,
    username VARCHAR(255) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE,
    phone VARCHAR(50),
    status user_status_enum NOT NULL DEFAULT 'active',
    created_at TIMESTAMP NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMP NOT NULL DEFAULT NOW()
);

-- Teacher profiles
CREATE TABLE IF NOT EXISTS teacher_profiles (
    user_id UUID PRIMARY KEY REFERENCES new_users(id) ON DELETE CASCADE,
    homeroom_class_id UUID REFERENCES new_classes(id)
);

-- Subjects (упрощенная)
CREATE TABLE IF NOT EXISTS new_subjects (
    id UUID PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

-- Classes
CREATE TABLE IF NOT EXISTS new_classes (
    id UUID PRIMARY KEY,
    grade VARCHAR(10) NOT NULL,
    section VARCHAR(10) NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT NOW()
);

-- Teacher teaching assignments
CREATE TABLE IF NOT EXISTS teacher_teaching_assignments (
    teacher_id UUID NOT NULL REFERENCES new_users(id) ON DELETE CASCADE,
    class_id UUID NOT NULL REFERENCES new_classes(id) ON DELETE CASCADE,
    subject_id UUID NOT NULL REFERENCES new_subjects(id) ON DELETE CASCADE,
    is_active BOOLEAN NOT NULL DEFAULT TRUE,
    created_at TIMESTAMP NOT NULL DEFAULT NOW(),
    PRIMARY KEY (teacher_id, class_id, subject_id)
);

-- Class students
CREATE TABLE IF NOT EXISTS class_students (
    class_id UUID NOT NULL REFERENCES new_classes(id) ON DELETE CASCADE,
    student_id UUID NOT NULL REFERENCES new_users(id) ON DELETE CASCADE,
    enrolled_at TIMESTAMP NOT NULL DEFAULT NOW(),
    left_at TIMESTAMP,
    PRIMARY KEY (class_id, student_id)
);

-- Tests (объединенная)
CREATE TABLE IF NOT EXISTS new_tests (
    id UUID PRIMARY KEY,
    title VARCHAR(500) NOT NULL,
    duration_minutes INTEGER NOT NULL,
    pass_percent INTEGER NOT NULL CHECK (pass_percent BETWEEN 0 AND 100),
    created_at TIMESTAMP NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMP NOT NULL DEFAULT NOW(),
    created_by UUID NOT NULL REFERENCES new_users(id),
    target_role test_target_role_enum NOT NULL,
    status test_status_enum NOT NULL DEFAULT 'draft',
    attempt_limit INTEGER
);

-- Test questions
CREATE TABLE IF NOT EXISTS test_questions (
    id UUID PRIMARY KEY,
    test_id UUID NOT NULL REFERENCES new_tests(id) ON DELETE CASCADE,
    question_type question_type_enum NOT NULL,
    text TEXT NOT NULL,
    points INTEGER NOT NULL DEFAULT 1,
    order_no INTEGER NOT NULL
);

-- Question options
CREATE TABLE IF NOT EXISTS question_options (
    id UUID PRIMARY KEY,
    question_id UUID NOT NULL REFERENCES test_questions(id) ON DELETE CASCADE,
    text TEXT NOT NULL,
    is_correct BOOLEAN NOT NULL DEFAULT FALSE,
    order_no INTEGER NOT NULL
);

-- Test attempts
CREATE TABLE IF NOT EXISTS test_attempts (
    id UUID PRIMARY KEY,
    test_id UUID NOT NULL REFERENCES new_tests(id) ON DELETE CASCADE,
    user_id UUID NOT NULL REFERENCES new_users(id) ON DELETE CASCADE,
    attempt_no INTEGER NOT NULL DEFAULT 1,
    started_at TIMESTAMP,
    completed_at TIMESTAMP,
    status attempt_status_enum NOT NULL DEFAULT 'in_progress',
    score NUMERIC,
    percent INTEGER,
    passed BOOLEAN,
    time_spent_seconds INTEGER
);

-- Attempt answers
CREATE TABLE IF NOT EXISTS attempt_answers (
    id UUID PRIMARY KEY,
    attempt_id UUID NOT NULL REFERENCES test_attempts(id) ON DELETE CASCADE,
    question_id UUID NOT NULL REFERENCES test_questions(id) ON DELETE CASCADE,
    free_text TEXT,
    is_correct BOOLEAN,
    points_awarded INTEGER,
    created_at TIMESTAMP NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMP NOT NULL DEFAULT NOW()
);

-- Attempt answer options
CREATE TABLE IF NOT EXISTS attempt_answer_options (
    attempt_answer_id UUID NOT NULL REFERENCES attempt_answers(id) ON DELETE CASCADE,
    option_id UUID NOT NULL REFERENCES question_options(id) ON DELETE CASCADE,
    PRIMARY KEY (attempt_answer_id, option_id)
);

-- ШАГ 2: Перенос данных

-- 2.1 Перенос subjects (используем name_ru как name)
INSERT INTO new_subjects (id, name)
SELECT id, name_ru FROM subjects;

-- 2.2 Перенос users
INSERT INTO new_users (id, role, username, password_hash, first_name, last_name, email, phone, status, created_at, updated_at)
SELECT id, role::user_role_enum, username, password, first_name, last_name, NULL, NULL, 'active', created_at, updated_at
FROM users;

-- 2.3 Перенос classes
INSERT INTO new_classes (id, grade, section, created_at)
SELECT id, grade, name, created_at FROM classes;

-- 2.4 Создание teacher_profiles для teachers с homeroom_class_id
INSERT INTO teacher_profiles (user_id, homeroom_class_id)
SELECT u.id, c.id
FROM users u
LEFT JOIN classes c ON u.id = c.teacher_id
WHERE u.role = 'teacher';

-- 2.5 Class students из users с role=student и grade/section
INSERT INTO class_students (class_id, student_id, enrolled_at)
SELECT c.id, u.id, u.created_at
FROM users u
JOIN classes c ON u.grade = c.grade AND u.grade_section = c.name
WHERE u.role = 'student';

-- 2.6 Объединение tests, teacher_tests в new_tests
-- Student tests
INSERT INTO new_tests (id, title, duration_minutes, pass_percent, created_at, updated_at, created_by, target_role, status, attempt_limit)
SELECT t.id, t.name_ru, COALESCE(t.duration, 60), COALESCE(t.max_score, 100), t.created_at, t.updated_at, t.created_by, 'student', 
       CASE WHEN t.status = 'published' THEN 'published' ELSE 'draft' END, NULL
FROM tests t;

-- Teacher tests
INSERT INTO new_tests (id, title, duration_minutes, pass_percent, created_at, updated_at, created_by, target_role, status, attempt_limit)
SELECT tt.id, tt.title, COALESCE(tt.duration, 60), COALESCE(tt.passing_score, 70), tt.created_at, tt.created_at, NULL, 'teacher', 'published', NULL
FROM teacher_tests tt;

-- 2.7 Перенос вопросов из JSON
-- Для tests.questions
DO $$
DECLARE
    test_rec RECORD;
    question_rec RECORD;
    q_id UUID;
    opt_id UUID;
BEGIN
    FOR test_rec IN SELECT id, questions FROM tests WHERE questions IS NOT NULL LOOP
        -- Для каждого вопроса в JSON
        FOR question_rec IN SELECT * FROM jsonb_array_elements(test_rec.questions) WITH ORDINALITY AS q(question, order_no) LOOP
            q_id := gen_random_uuid();
            INSERT INTO test_questions (id, test_id, question_type, text, points, order_no)
            VALUES (q_id, test_rec.id, 
                   CASE WHEN question_rec.question->>'type' = 'single' THEN 'single_choice'
                        WHEN question_rec.question->>'type' = 'multiple' THEN 'multiple_choice'
                        ELSE 'text' END,
                   question_rec.question->>'text', 
                   COALESCE((question_rec.question->>'points')::int, 1),
                   question_rec.order_no);

            -- Опции
            IF question_rec.question ? 'options' THEN
                FOR opt_rec IN SELECT * FROM jsonb_array_elements(question_rec.question->'options') WITH ORDINALITY AS o(option, ord) LOOP
                    opt_id := gen_random_uuid();
                    INSERT INTO question_options (id, question_id, text, is_correct, order_no)
                    VALUES (opt_id, q_id, opt_rec.option->>'text', 
                           COALESCE((opt_rec.option->>'correct')::boolean, false), opt_rec.ord);
                END LOOP;
            END IF;
        END LOOP;
    END LOOP;
END $$;

-- Аналогично для teacher_tests.questions

-- 2.8 Перенос результатов
-- test_results -> test_attempts
INSERT INTO test_attempts (id, test_id, user_id, attempt_no, started_at, completed_at, status, score, percent, passed, time_spent_seconds)
SELECT tr.id, tr.test_id, tr.user_id, 1, NULL, tr.completed_at, 'completed', tr.score, 
       CASE WHEN t.max_score > 0 THEN ROUND((tr.score::float / t.max_score) * 100) ELSE 0 END,
       CASE WHEN t.max_score > 0 THEN (tr.score::float / t.max_score) >= 0.7 ELSE false END, -- assuming 70% pass
       tr.time_taken * 60
FROM test_results tr
JOIN tests t ON tr.test_id = t.id;

-- teacher_test_results -> test_attempts
INSERT INTO test_attempts (id, test_id, user_id, attempt_no, started_at, completed_at, status, score, percent, passed, time_spent_seconds)
SELECT ttr.id, ttr.test_id, ttr.teacher_id, 1, NULL, ttr.completed_at, 'completed', ttr.score, 
       CASE WHEN tt.passing_score > 0 THEN ROUND((ttr.score::float / tt.passing_score) * 100) ELSE 0 END,
       ttr.passed, NULL
FROM teacher_test_results ttr
JOIN teacher_tests tt ON ttr.test_id = tt.id;

-- ШАГ 3: Замена таблиц
-- Переименовать старые таблицы и новые
ALTER TABLE users RENAME TO old_users;
ALTER TABLE subjects RENAME TO old_subjects;
ALTER TABLE classes RENAME TO old_classes;
ALTER TABLE tests RENAME TO old_tests;
ALTER TABLE test_results RENAME TO old_test_results;
ALTER TABLE teacher_tests RENAME TO old_teacher_tests;
ALTER TABLE teacher_test_results RENAME TO old_teacher_test_results;

ALTER TABLE new_users RENAME TO users;
ALTER TABLE new_subjects RENAME TO subjects;
ALTER TABLE new_classes RENAME TO classes;
ALTER TABLE new_tests RENAME TO tests;

-- ШАГ 4: Индексы
CREATE INDEX idx_users_role ON users(role);
CREATE INDEX idx_users_phone ON users(phone);
CREATE INDEX idx_classes_grade_section ON classes(grade, section);
CREATE INDEX idx_teacher_teaching_assignments_teacher ON teacher_teaching_assignments(teacher_id);
CREATE INDEX idx_teacher_teaching_assignments_class ON teacher_teaching_assignments(class_id);
CREATE INDEX idx_teacher_teaching_assignments_subject ON teacher_teaching_assignments(subject_id);
CREATE INDEX idx_class_students_class ON class_students(class_id);
CREATE INDEX idx_class_students_student ON class_students(student_id);
CREATE INDEX idx_tests_created_by ON tests(created_by);
CREATE INDEX idx_tests_target_role ON tests(target_role);
CREATE INDEX idx_tests_status ON tests(status);
CREATE INDEX idx_tests_created_at ON tests(created_at);
CREATE INDEX idx_test_questions_test_order ON test_questions(test_id, order_no);
CREATE INDEX idx_question_options_question_order ON question_options(question_id, order_no);
CREATE INDEX idx_test_attempts_user_completed ON test_attempts(user_id, completed_at);
CREATE INDEX idx_test_attempts_test_completed ON test_attempts(test_id, completed_at);
CREATE INDEX idx_test_attempts_test_user_attempt ON test_attempts(test_id, user_id, attempt_no);
CREATE INDEX idx_test_attempts_test_user_completed ON test_attempts(test_id, user_id, completed_at);
CREATE INDEX idx_attempt_answers_attempt_question ON attempt_answers(attempt_id, question_id);

-- ШАГ 5: Constraints
ALTER TABLE users ADD CONSTRAINT chk_users_contact CHECK (email IS NOT NULL OR phone IS NOT NULL);

-- ШАГ 6: Очистка (после тестирования)
-- DROP TABLE old_users CASCADE;
-- DROP TABLE old_subjects CASCADE;
-- ... и т.д.

COMMIT;