import pool from './src/db.js';

async function checkAndCreateTables() {
    try {
        console.log('🔍 Проверка подключения к базе данных...');

        // Проверяем подключение
        const connectionTest = await pool.query('SELECT NOW()');
        console.log('✅ Подключение к БД успешно:', connectionTest.rows[0].now);

        // Проверяем существование таблиц
        const tables = [
            'schools',
            'users',
            'subjects',
            'modules',
            'tests',
            'test_results',
            'classes',
            'teacher_tests',
            'teacher_test_results'
        ];

        console.log('🔍 Проверка таблиц...');
        for (const table of tables) {
            try {
                const result = await pool.query(`SELECT COUNT(*) FROM ${table}`);
                console.log(`✅ Таблица ${table} существует (${result.rows[0].count} записей)`);
            } catch (error) {
                console.log(`❌ Таблица ${table} не существует или нет доступа`);
                console.log('   Ошибка:', error.message);
            }
        }

        // Проверяем права пользователя
        console.log('🔍 Проверка прав пользователя...');
        try {
            const grants = await pool.query(`
                SELECT grantee, privilege_type, table_name
                FROM information_schema.role_table_grants
                WHERE grantee = current_user
                ORDER BY table_name, privilege_type
            `);
            console.log('Права пользователя:');
            grants.rows.forEach(grant => {
                console.log(`  ${grant.table_name}: ${grant.privilege_type}`);
            });
        } catch (error) {
            console.log('❌ Не удалось проверить права:', error.message);
        }

    } catch (error) {
        console.error('❌ Ошибка подключения к БД:', error.message);
        console.error('Детали:', error);
    } finally {
        await pool.end();
        process.exit(0);
    }
}

checkAndCreateTables();