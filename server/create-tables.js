import pool from './src/db.js';

async function createTables() {
    try {
        console.log('🏗️ Создание таблиц в базе данных...');

        // Проверяем текущую схему и права
        const schemaCheck = await pool.query('SELECT current_schema(), current_user');
        console.log('📍 Текущая схема:', schemaCheck.rows[0].current_schema);
        console.log('👤 Текущий пользователь:', schemaCheck.rows[0].current_user);

        // Проверяем права на создание в схеме public
        try {
            await pool.query('CREATE TABLE IF NOT EXISTS test_permissions (id SERIAL PRIMARY KEY)');
            await pool.query('DROP TABLE test_permissions');
            console.log('✅ Права на создание таблиц есть');
        } catch (error) {
            console.log('❌ Нет прав на создание таблиц:', error.message);
            console.log('🔧 Попробуйте дать права пользователю:');
            console.log('   GRANT ALL PRIVILEGES ON SCHEMA public TO your_user;');
            console.log('   GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO your_user;');
            return;
        }

        // Создаем таблицы в правильной последовательности (сначала без внешних ключей, потом с ключами)

        // 1. Users
        await pool.query(`
            CREATE TABLE IF NOT EXISTS users (
                id UUID PRIMARY KEY,
                username VARCHAR(64) UNIQUE NOT NULL,
                password VARCHAR(255) NOT NULL,
                role VARCHAR(32) NOT NULL,
                first_name VARCHAR(64),
                last_name VARCHAR(64),
                class_id UUID,
                grade VARCHAR(8),
                grade_section VARCHAR(8),
                is_temporary_password BOOLEAN DEFAULT FALSE,
                require_password_change BOOLEAN DEFAULT FALSE,
                created_at TIMESTAMP DEFAULT NOW(),
                updated_at TIMESTAMP DEFAULT NOW()
            )
        `);
        console.log('✅ Таблица users создана');

        // 3. Subjects
        await pool.query(`
            CREATE TABLE IF NOT EXISTS subjects (
                id UUID PRIMARY KEY,
                name_ru VARCHAR(128) NOT NULL,
                name_uz VARCHAR(128) NOT NULL,
                questions_count INT DEFAULT 0
            )
        `);
        console.log('✅ Таблица subjects создана');

        // 4. Modules
        await pool.query(`
            CREATE TABLE IF NOT EXISTS modules (
                id UUID PRIMARY KEY,
                subject_id UUID REFERENCES subjects(id),
                name_ru VARCHAR(128),
                name_uz VARCHAR(128),
                description_ru TEXT,
                description_uz TEXT,
                created_by UUID REFERENCES users(id),
                created_at TIMESTAMP DEFAULT NOW()
            )
        `);
        console.log('✅ Таблица modules создана');

        // 5. Tests
        await pool.query(`
            CREATE TABLE IF NOT EXISTS tests (
                id UUID PRIMARY KEY,
                module_id UUID REFERENCES modules(id),
                name_ru VARCHAR(128),
                name_uz VARCHAR(128),
                duration INT,
                time_limit INT,
                max_score INT,
                status VARCHAR(32),
                assigned_grades VARCHAR(32)[],
                questions JSONB,
                created_by UUID REFERENCES users(id),
                created_at TIMESTAMP DEFAULT NOW(),
                updated_at TIMESTAMP DEFAULT NOW()
            )
        `);
        console.log('✅ Таблица tests создана');

        // 6. Test Results
        await pool.query(`
            CREATE TABLE IF NOT EXISTS test_results (
                id UUID PRIMARY KEY,
                user_id UUID REFERENCES users(id),
                test_id UUID REFERENCES tests(id),
                score INT,
                correct_count INT,
                total_count INT,
                time_taken INT,
                question_results JSONB,
                completed_at TIMESTAMP DEFAULT NOW()
            )
        `);
        console.log('✅ Таблица test_results создана');

        // 7. Classes
        await pool.query(`
            CREATE TABLE IF NOT EXISTS classes (
                id UUID PRIMARY KEY,
                grade VARCHAR(8),
                name VARCHAR(32),
                teacher_id UUID REFERENCES users(id),
                student_count INT DEFAULT 0,
                created_at TIMESTAMP DEFAULT NOW()
            )
        `);
        console.log('✅ Таблица classes создана');

        // 8. Teacher Tests
        await pool.query(`
            CREATE TABLE IF NOT EXISTS teacher_tests (
                id UUID PRIMARY KEY,
                title VARCHAR(255) NOT NULL,
                description TEXT,
                duration INT,
                passing_score INT,
                questions JSONB,
                assigned_to UUID[] DEFAULT '{}',
                created_at TIMESTAMP DEFAULT NOW()
            )
        `);
        console.log('✅ Таблица teacher_tests создана');

        // 9. Teacher Test Results
        await pool.query(`
            CREATE TABLE IF NOT EXISTS teacher_test_results (
                id UUID PRIMARY KEY,
                test_id UUID REFERENCES teacher_tests(id),
                teacher_id UUID REFERENCES users(id),
                answers JSONB,
                score INT,
                passed BOOLEAN,
                completed_at TIMESTAMP DEFAULT NOW()
            )
        `);
        console.log('✅ Таблица teacher_test_results создана');

        // Добавляем внешний ключ для users.class_id
        try {
            await pool.query(`
                ALTER TABLE users
                ADD CONSTRAINT fk_users_class_id
                FOREIGN KEY (class_id) REFERENCES classes(id)
            `);
            console.log('✅ Внешний ключ users.class_id добавлен');
        } catch (error) {
            console.log('ℹ️ Внешний ключ users.class_id уже существует или не может быть добавлен');
        }

        console.log('🎉 Все таблицы созданы успешно!');

    } catch (error) {
        console.error('❌ Ошибка при создании таблиц:', error.message);
        console.error('Детали:', error);
    } finally {
        await pool.end();
        process.exit(0);
    }
}

createTables();