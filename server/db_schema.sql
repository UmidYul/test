-- USERS
CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(64) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    role VARCHAR(32) NOT NULL,
    first_name VARCHAR(64),
    last_name VARCHAR(64),
    school VARCHAR(128),
    grade VARCHAR(8),
    grade_section VARCHAR(8),
    is_temporary_password BOOLEAN DEFAULT FALSE,
    require_password_change BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);

-- SUBJECTS
CREATE TABLE IF NOT EXISTS subjects (
    id SERIAL PRIMARY KEY,
    name_ru VARCHAR(128) NOT NULL,
    name_uz VARCHAR(128) NOT NULL,
    questions_count INT DEFAULT 0
);

-- MODULES
CREATE TABLE IF NOT EXISTS modules (
    id SERIAL PRIMARY KEY,
    subject_id INT REFERENCES subjects(id),
    name_ru VARCHAR(128),
    name_uz VARCHAR(128),
    description_ru TEXT,
    description_uz TEXT,
    created_by INT REFERENCES users(id),
    created_at TIMESTAMP DEFAULT NOW()
);

-- TESTS
CREATE TABLE IF NOT EXISTS tests (
    id SERIAL PRIMARY KEY,
    module_id INT REFERENCES modules(id),
    name_ru VARCHAR(128),
    name_uz VARCHAR(128),
    duration INT,
    time_limit INT,
    max_score INT,
    status VARCHAR(32),
    assigned_grades VARCHAR(32)[],
    questions JSONB,
    created_by INT REFERENCES users(id),
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);

-- TEST RESULTS
CREATE TABLE IF NOT EXISTS test_results (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id),
    test_id INT REFERENCES tests(id),
    score INT,
    correct_count INT,
    total_count INT,
    time_taken INT,
    question_results JSONB,
    completed_at TIMESTAMP DEFAULT NOW()
);

-- CLASSES
CREATE TABLE IF NOT EXISTS classes (
    id SERIAL PRIMARY KEY,
    grade VARCHAR(8),
    name VARCHAR(32),
    teacher_id INT REFERENCES users(id),
    student_count INT DEFAULT 0,
    created_at TIMESTAMP DEFAULT NOW()
);

-- TEACHER TESTS
CREATE TABLE IF NOT EXISTS teacher_tests (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    duration INT,
    passing_score INT,
    questions JSONB,
    assigned_to INT[] DEFAULT '{}',
    created_at TIMESTAMP DEFAULT NOW()
);

-- TEACHER TEST RESULTS
CREATE TABLE IF NOT EXISTS teacher_test_results (
    id SERIAL PRIMARY KEY,
    test_id INT REFERENCES teacher_tests(id),
    teacher_id INT REFERENCES users(id),
    answers JSONB,
    score INT,
    passed BOOLEAN,
    completed_at TIMESTAMP DEFAULT NOW()
);
