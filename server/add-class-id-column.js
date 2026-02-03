import pool from './src/db.js';

async function addClassIdColumn() {
    try {
        console.log('🔧 Добавляем поле class_id к таблице users...');

        // Проверяем, существует ли поле class_id
        const checkColumn = await pool.query(`
            SELECT column_name
            FROM information_schema.columns
            WHERE table_name = 'users' AND column_name = 'class_id'
        `);

        if (checkColumn.rows.length === 0) {
            // Добавляем поле class_id
            await pool.query(`
                ALTER TABLE users ADD COLUMN class_id UUID
            `);
            console.log('✅ Поле class_id добавлено');

            // Добавляем внешний ключ
            try {
                await pool.query(`
                    ALTER TABLE users
                    ADD CONSTRAINT fk_users_class_id
                    FOREIGN KEY (class_id) REFERENCES classes(id)
                `);
                console.log('✅ Внешний ключ fk_users_class_id добавлен');
            } catch (error) {
                console.log('ℹ️ Внешний ключ fk_users_class_id уже существует');
            }
        } else {
            console.log('ℹ️ Поле class_id уже существует');
        }

        console.log('🎉 Готово!');

    } catch (error) {
        console.error('❌ Ошибка:', error.message);
    } finally {
        await pool.end();
        process.exit(0);
    }
}

addClassIdColumn();