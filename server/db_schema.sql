BEGIN;

-- =========================
-- 1) ENUM TYPES (PostgreSQL)
-- =========================
DO $$ BEGIN
  CREATE TYPE user_role AS ENUM ('admin', 'teacher', 'student');
EXCEPTION WHEN duplicate_object THEN NULL;
END $$;

DO $$ BEGIN
  CREATE TYPE user_status AS ENUM ('active', 'blocked', 'deleted');
EXCEPTION WHEN duplicate_object THEN NULL;
END $$;

DO $$ BEGIN
  CREATE TYPE test_target_role AS ENUM ('teacher', 'student');
EXCEPTION WHEN duplicate_object THEN NULL;
END $$;

DO $$ BEGIN
  CREATE TYPE test_status AS ENUM ('draft', 'published', 'archived');
EXCEPTION WHEN duplicate_object THEN NULL;
END $$;

DO $$ BEGIN
  CREATE TYPE attempt_status AS ENUM ('in_progress', 'completed', 'expired', 'canceled');
EXCEPTION WHEN duplicate_object THEN NULL;
END $$;

DO $$ BEGIN
  CREATE TYPE question_type AS ENUM ('single_choice', 'multiple_choice', 'text');
EXCEPTION WHEN duplicate_object THEN NULL;
END $$;


-- =========================
-- 2) CORE TABLES
-- =========================
CREATE TABLE IF NOT EXISTS users (
  id uuid PRIMARY KEY,

  role user_role NOT NULL,

  username varchar NOT NULL UNIQUE,
  password_hash varchar NOT NULL,

  first_name varchar NOT NULL,
  last_name  varchar NOT NULL,

  email varchar UNIQUE, -- NULL allowed; unique when not null
  phone varchar,        -- NOT unique

  status user_status NOT NULL DEFAULT 'active',
  created_at timestamp NOT NULL DEFAULT now(),
  updated_at timestamp NOT NULL DEFAULT now(),

  CONSTRAINT users_email_or_phone_chk CHECK (email IS NOT NULL OR phone IS NOT NULL)
);

CREATE INDEX IF NOT EXISTS idx_users_role  ON users(role);
CREATE INDEX IF NOT EXISTS idx_users_phone ON users(phone);


CREATE TABLE IF NOT EXISTS subjects (
  id uuid PRIMARY KEY,
  name varchar NOT NULL
);

CREATE TABLE IF NOT EXISTS classes (
  id uuid PRIMARY KEY,
  grade varchar NOT NULL,
  section varchar NOT NULL,
  created_at timestamp NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_classes_grade_section ON classes(grade, section);


-- =========================
-- 3) PROFILES & RELATIONS
-- =========================
CREATE TABLE IF NOT EXISTS homeroom_assignments (
  id uuid PRIMARY KEY,
  teacher_id uuid NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  class_id uuid NOT NULL REFERENCES classes(id) ON DELETE CASCADE,
  start_at timestamp NOT NULL DEFAULT now(),
  end_at timestamp,

  CONSTRAINT ha_unique_active UNIQUE (class_id, end_at) DEFERRABLE INITIALLY DEFERRED
);

CREATE INDEX IF NOT EXISTS idx_ha_teacher ON homeroom_assignments(teacher_id);
CREATE INDEX IF NOT EXISTS idx_ha_class ON homeroom_assignments(class_id);
CREATE INDEX IF NOT EXISTS idx_ha_end_at ON homeroom_assignments(end_at);

CREATE TABLE IF NOT EXISTS teacher_teaching_assignments (
  teacher_id uuid NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  class_id   uuid NOT NULL REFERENCES classes(id) ON DELETE CASCADE,
  subject_id uuid NOT NULL REFERENCES subjects(id) ON DELETE CASCADE,

  is_active boolean NOT NULL DEFAULT true,
  created_at timestamp NOT NULL DEFAULT now(),

  CONSTRAINT tta_unique UNIQUE (teacher_id, class_id, subject_id)
);

CREATE INDEX IF NOT EXISTS idx_tta_teacher ON teacher_teaching_assignments(teacher_id);
CREATE INDEX IF NOT EXISTS idx_tta_class   ON teacher_teaching_assignments(class_id);
CREATE INDEX IF NOT EXISTS idx_tta_subject ON teacher_teaching_assignments(subject_id);


CREATE TABLE IF NOT EXISTS class_students (
  class_id   uuid NOT NULL REFERENCES classes(id) ON DELETE CASCADE,
  student_id uuid NOT NULL REFERENCES users(id) ON DELETE CASCADE,

  enrolled_at timestamp NOT NULL DEFAULT now(),
  left_at timestamp,

  CONSTRAINT class_students_unique UNIQUE (class_id, student_id),
  CONSTRAINT class_students_dates_chk CHECK (left_at IS NULL OR left_at >= enrolled_at)
);

CREATE INDEX IF NOT EXISTS idx_class_students_class   ON class_students(class_id);
CREATE INDEX IF NOT EXISTS idx_class_students_student ON class_students(student_id);


-- =========================
-- 4) TESTS
-- =========================
CREATE TABLE IF NOT EXISTS tests (
  id uuid PRIMARY KEY,

  title varchar NOT NULL,
  duration_minutes int NOT NULL,
  pass_percent int NOT NULL,

  created_at timestamp NOT NULL DEFAULT now(),
  updated_at timestamp NOT NULL DEFAULT now(),

  created_by uuid NOT NULL REFERENCES users(id) ON DELETE RESTRICT,
  target_role test_target_role NOT NULL,

  status test_status NOT NULL DEFAULT 'draft',
  attempt_limit int,

  CONSTRAINT tests_pass_percent_chk CHECK (pass_percent BETWEEN 0 AND 100),
  CONSTRAINT tests_duration_chk CHECK (duration_minutes > 0),
  CONSTRAINT tests_attempt_limit_chk CHECK (attempt_limit IS NULL OR attempt_limit > 0)
);

CREATE INDEX IF NOT EXISTS idx_tests_created_by ON tests(created_by);
CREATE INDEX IF NOT EXISTS idx_tests_target_role ON tests(target_role);
CREATE INDEX IF NOT EXISTS idx_tests_status ON tests(status);
CREATE INDEX IF NOT EXISTS idx_tests_created_at ON tests(created_at);


CREATE TABLE IF NOT EXISTS test_questions (
  id uuid PRIMARY KEY,
  test_id uuid NOT NULL REFERENCES tests(id) ON DELETE CASCADE,

  question_type question_type NOT NULL,
  text varchar NOT NULL,

  points int NOT NULL DEFAULT 1,
  order_no int NOT NULL,

  CONSTRAINT test_questions_order_unique UNIQUE (test_id, order_no),
  CONSTRAINT test_questions_points_chk CHECK (points > 0),
  CONSTRAINT test_questions_order_chk CHECK (order_no > 0)
);

CREATE INDEX IF NOT EXISTS idx_test_questions_test_id ON test_questions(test_id);


CREATE TABLE IF NOT EXISTS question_options (
  id uuid PRIMARY KEY,
  question_id uuid NOT NULL REFERENCES test_questions(id) ON DELETE CASCADE,

  text varchar NOT NULL,
  is_correct boolean NOT NULL DEFAULT false,
  order_no int NOT NULL,

  CONSTRAINT question_options_order_unique UNIQUE (question_id, order_no),
  CONSTRAINT question_options_order_chk CHECK (order_no > 0)
);

CREATE INDEX IF NOT EXISTS idx_question_options_question_id ON question_options(question_id);


-- =========================
-- 5) ATTEMPTS & ANSWERS
-- =========================
CREATE TABLE IF NOT EXISTS test_attempts (
  id uuid PRIMARY KEY,

  test_id uuid NOT NULL REFERENCES tests(id) ON DELETE CASCADE,
  user_id uuid NOT NULL REFERENCES users(id) ON DELETE CASCADE,

  attempt_no int NOT NULL DEFAULT 1,

  started_at timestamp,
  completed_at timestamp,

  status attempt_status NOT NULL DEFAULT 'in_progress',

  score numeric,
  percent int,
  passed boolean,
  time_spent_seconds int,

  CONSTRAINT test_attempts_attempt_unique UNIQUE (test_id, user_id, attempt_no),
  CONSTRAINT test_attempts_percent_chk CHECK (percent IS NULL OR (percent BETWEEN 0 AND 100)),
  CONSTRAINT test_attempts_attempt_no_chk CHECK (attempt_no > 0),
  CONSTRAINT test_attempts_time_spent_chk CHECK (time_spent_seconds IS NULL OR time_spent_seconds >= 0),
  CONSTRAINT test_attempts_completed_chk CHECK (completed_at IS NULL OR started_at IS NULL OR completed_at >= started_at)
);

CREATE INDEX IF NOT EXISTS idx_test_attempts_user_completed ON test_attempts(user_id, completed_at);
CREATE INDEX IF NOT EXISTS idx_test_attempts_test_completed ON test_attempts(test_id, completed_at);
CREATE INDEX IF NOT EXISTS idx_test_attempts_test_user_completed ON test_attempts(test_id, user_id, completed_at);


CREATE TABLE IF NOT EXISTS attempt_answers (
  id uuid PRIMARY KEY,

  attempt_id uuid NOT NULL REFERENCES test_attempts(id) ON DELETE CASCADE,
  question_id uuid NOT NULL REFERENCES test_questions(id) ON DELETE CASCADE,

  free_text varchar,

  is_correct boolean,
  points_awarded int,

  created_at timestamp NOT NULL DEFAULT now(),
  updated_at timestamp NOT NULL DEFAULT now(),

  CONSTRAINT attempt_answers_unique UNIQUE (attempt_id, question_id),
  CONSTRAINT attempt_answers_points_awarded_chk CHECK (points_awarded IS NULL OR points_awarded >= 0)
);

CREATE INDEX IF NOT EXISTS idx_attempt_answers_attempt ON attempt_answers(attempt_id);
CREATE INDEX IF NOT EXISTS idx_attempt_answers_question ON attempt_answers(question_id);


CREATE TABLE IF NOT EXISTS attempt_answer_options (
  attempt_answer_id uuid NOT NULL REFERENCES attempt_answers(id) ON DELETE CASCADE,
  option_id uuid NOT NULL REFERENCES question_options(id) ON DELETE CASCADE,

  CONSTRAINT attempt_answer_options_unique UNIQUE (attempt_answer_id, option_id)
);

CREATE INDEX IF NOT EXISTS idx_attempt_answer_options_answer ON attempt_answer_options(attempt_answer_id);
CREATE INDEX IF NOT EXISTS idx_attempt_answer_options_option ON attempt_answer_options(option_id);

COMMIT;
