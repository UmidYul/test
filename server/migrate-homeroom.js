import pool from './src/db.js';

async function migrateHomeroomData() {
    try {
        console.log('🔄 Миграция данных из teacher_profiles в homeroom_assignments...');

        // Проверить, существует ли teacher_profiles
        const profileExists = await pool.query(`
            SELECT EXISTS (
                SELECT 1 FROM information_schema.tables
                WHERE table_name = 'teacher_profiles'
            )
        `);

        if (!profileExists.rows[0].exists) {
            console.log('ℹ️  Таблица teacher_profiles не существует, миграция пропущена');
            return;
        }

        // Получить данные из teacher_profiles
        const { rows: profiles } = await pool.query(`
            SELECT user_id, homeroom_class_id
            FROM teacher_profiles
            WHERE homeroom_class_id IS NOT NULL
        `);

        if (profiles.length === 0) {
            console.log('ℹ️  Нет данных для миграции');
            return;
        }

        console.log(`📊 Найдено ${profiles.length} записей для миграции`);

        // Вставить в homeroom_assignments
        for (const profile of profiles) {
            const assignmentId = crypto.randomUUID();
            await pool.query(`
                INSERT INTO homeroom_assignments (id, teacher_id, class_id, start_at, end_at)
                VALUES ($1, $2, $3, NOW(), NULL)
                ON CONFLICT (class_id, end_at) DO NOTHING
            `, [assignmentId, profile.user_id, profile.homeroom_class_id]);
        }

        console.log('✅ Данные успешно перенесены');

        // Удалить таблицу teacher_profiles
        await pool.query('DROP TABLE teacher_profiles');
        console.log('🗑️  Старая таблица teacher_profiles удалена');

    } catch (error) {
        console.error('❌ Ошибка миграции:', error);
        throw error;
    }
}

export default migrateHomeroomData;