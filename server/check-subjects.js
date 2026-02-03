import pool from './src/db.js';

async function checkSubjects() {
    try {
        console.log('🔍 Проверяем таблицу subjects...');

        // Проверяем, существует ли таблица
        const tableExists = await pool.query(`
            SELECT EXISTS (
                SELECT FROM information_schema.tables
                WHERE table_schema = 'public'
                AND table_name = 'subjects'
            );
        `);

        if (!tableExists.rows[0].exists) {
            console.log('❌ Таблица subjects не существует');
            return;
        }

        console.log('✅ Таблица subjects существует');

        // Получаем все записи
        const { rows } = await pool.query('SELECT id, name, questions_count FROM subjects ORDER BY id');

        console.log(`📚 Найдено предметов: ${rows.length}`);
        if (rows.length > 0) {
            console.log('Предметы:');
            rows.forEach((subject, index) => {
                console.log(`${index + 1}. ${subject.name} (ID: ${subject.id}, вопросов: ${subject.questions_count || 0})`);
            });
        } else {
            console.log('⚠️  Таблица subjects пуста');
        }

    } catch (error) {
        console.error('❌ Ошибка при проверке:', error.message);
    } finally {
        await pool.end();
    }
}

checkSubjects();