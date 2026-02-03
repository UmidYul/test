import pool from './src/db.js';

async function createTestClasses() {
    try {
        console.log('🏫 Создание тестовых классов...');

        const classes = [
            { grade: '9', name: 'А' },
            { grade: '9', name: 'Б' },
            { grade: '10', name: 'А' },
            { grade: '10', name: 'Б' },
            { grade: '11', name: 'А' },
            { grade: '11', name: 'Б' }
        ];

        for (const classData of classes) {
            const classId = crypto.randomUUID();
            await pool.query(
                'INSERT INTO classes (id, grade, name, created_at) VALUES ($1, $2, $3, NOW()) ON CONFLICT DO NOTHING',
                [classId, classData.grade, classData.name]
            );
            console.log(`✅ Создан класс: ${classData.grade}${classData.name}`);
        }

        console.log('🎉 Тестовые классы созданы!');

    } catch (error) {
        console.error('❌ Ошибка при создании классов:', error.message);
    } finally {
        await pool.end();
        process.exit(0);
    }
}

createTestClasses();