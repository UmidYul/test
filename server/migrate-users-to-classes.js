import pool from './src/db.js';

async function migrateUsersToClasses() {
    try {
        console.log('🔄 Начинаем миграцию пользователей к системе классов...');

        // 1. Создаем классы на основе существующих данных пользователей
        console.log('📚 Создаем классы на основе существующих данных...');

        const existingClasses = await pool.query(`
            SELECT DISTINCT grade, grade_section
            FROM users
            WHERE grade IS NOT NULL AND grade_section IS NOT NULL
            ORDER BY grade, grade_section
        `);

        console.log(`Найдено ${existingClasses.rows.length} уникальных классов`);

        for (const classData of existingClasses.rows) {
            const { grade, grade_section } = classData;
            const className = `${grade}${grade_section}`;

            // Проверяем, существует ли уже такой класс
            const existingClass = await pool.query(
                'SELECT id FROM classes WHERE grade = $1 AND name = $2',
                [grade, className]
            );

            if (existingClass.rows.length === 0) {
                // Создаем новый класс
                const classId = crypto.randomUUID();
                await pool.query(
                    'INSERT INTO classes (id, grade, name, created_at) VALUES ($1, $2, $3, NOW())',
                    [classId, grade, className]
                );
                console.log(`✅ Создан класс: ${grade}${grade_section}`);
            } else {
                console.log(`ℹ️ Класс ${grade}${grade_section} уже существует`);
            }
        }

        // 2. Обновляем пользователей, присваивая им class_id
        console.log('👥 Обновляем пользователей...');

        const usersToUpdate = await pool.query(`
            SELECT id, grade, grade_section
            FROM users
            WHERE grade IS NOT NULL AND grade_section IS NOT NULL AND class_id IS NULL
        `);

        console.log(`Найдено ${usersToUpdate.rows.length} пользователей для обновления`);

        for (const user of usersToUpdate.rows) {
            const { id, grade, grade_section } = user;
            const className = `${grade}${grade_section}`;

            // Находим соответствующий класс
            const classResult = await pool.query(
                'SELECT id FROM classes WHERE grade = $1 AND name = $2',
                [grade, className]
            );

            if (classResult.rows.length > 0) {
                const classId = classResult.rows[0].id;
                await pool.query(
                    'UPDATE users SET class_id = $1 WHERE id = $2',
                    [classId, id]
                );
                console.log(`✅ Пользователю ${id} присвоен класс ${className}`);
            }
        }

        console.log('🎉 Миграция завершена успешно!');

    } catch (error) {
        console.error('❌ Ошибка при миграции:', error.message);
        console.error('Детали:', error);
    } finally {
        await pool.end();
        process.exit(0);
    }
}

migrateUsersToClasses();