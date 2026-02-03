import pool from './src/db.js';

async function testHomeroomAssignments() {
    try {
        console.log('🧪 Тестирование homeroom_assignments...');

        // Тест 1: Создание класса без homeroom_teacher_id
        console.log('Тест 1: Создание класса без homeroom_teacher_id');
        const classId1 = crypto.randomUUID();
        await pool.query(
            'INSERT INTO classes (id, grade, section) VALUES ($1, $2, $3)',
            [classId1, '9', 'A']
        );
        const haCount1 = await pool.query('SELECT COUNT(*) FROM homeroom_assignments WHERE class_id = $1', [classId1]);
        console.log(`Записей homeroom_assignments: ${haCount1.rows[0].count} (ожидалось 0)`);

        // Тест 2: Создание класса с homeroom_teacher_id
        console.log('Тест 2: Создание класса с homeroom_teacher_id');
        const teacherId = crypto.randomUUID();
        await pool.query(
            'INSERT INTO users (id, username, password_hash, role, first_name, last_name) VALUES ($1, $2, $3, $4, $5, $6)',
            [teacherId, 'testteacher', 'hash', 'teacher', 'Test', 'Teacher']
        );
        const classId2 = crypto.randomUUID();
        await pool.query(
            'INSERT INTO classes (id, grade, section) VALUES ($1, $2, $3)',
            [classId2, '10', 'B']
        );
        const assignmentId = crypto.randomUUID();
        await pool.query(
            'INSERT INTO homeroom_assignments (id, teacher_id, class_id, start_at, end_at) VALUES ($1, $2, $3, NOW(), NULL)',
            [assignmentId, teacherId, classId2]
        );
        const haCount2 = await pool.query('SELECT COUNT(*) FROM homeroom_assignments WHERE class_id = $1 AND end_at IS NULL', [classId2]);
        console.log(`Записей homeroom_assignments: ${haCount2.rows[0].count} (ожидалось 1)`);

        // Тест 3: Смена классного руководителя
        console.log('Тест 3: Смена классного руководителя');
        const teacherId2 = crypto.randomUUID();
        await pool.query(
            'INSERT INTO users (id, username, password_hash, role, first_name, last_name) VALUES ($1, $2, $3, $4, $5, $6)',
            [teacherId2, 'testteacher2', 'hash', 'teacher', 'Test2', 'Teacher2']
        );
        // Закрыть старую
        await pool.query('UPDATE homeroom_assignments SET end_at = NOW() WHERE class_id = $1 AND end_at IS NULL', [classId2]);
        // Создать новую
        const assignmentId2 = crypto.randomUUID();
        await pool.query(
            'INSERT INTO homeroom_assignments (id, teacher_id, class_id, start_at, end_at) VALUES ($1, $2, $3, NOW(), NULL)',
            [assignmentId2, teacherId2, classId2]
        );
        const haCount3 = await pool.query('SELECT COUNT(*) FROM homeroom_assignments WHERE class_id = $1 AND end_at IS NULL', [classId2]);
        console.log(`Активных записей homeroom_assignments: ${haCount3.rows[0].count} (ожидалось 1)`);

        // Тест 4: Запрет homeroom_teacher_id не teacher
        console.log('Тест 4: Запрет homeroom_teacher_id не teacher');
        const studentId = crypto.randomUUID();
        await pool.query(
            'INSERT INTO users (id, username, password_hash, role, first_name, last_name) VALUES ($1, $2, $3, $4, $5, $6)',
            [studentId, 'teststudent', 'hash', 'student', 'Test', 'Student']
        );
        try {
            const assignmentId3 = crypto.randomUUID();
            await pool.query(
                'INSERT INTO homeroom_assignments (id, teacher_id, class_id, start_at, end_at) VALUES ($1, $2, $3, NOW(), NULL)',
                [assignmentId3, studentId, classId2]
            );
            console.log('❌ Ошибка: удалось назначить студента классным руководителем');
        } catch (error) {
            console.log('✅ Корректно: нельзя назначить студента классным руководителем');
        }

        console.log('🎉 Тесты завершены');

    } catch (error) {
        console.error('❌ Ошибка тестирования:', error);
    } finally {
        await pool.end();
    }
}

testHomeroomAssignments();