import pool from './src/db.js';

async function testConnection() {
    try {
        const res = await pool.query('SELECT NOW() as now');
        console.log('✅ PostgreSQL connection successful! Time:', res.rows[0].now);
        process.exit(0);
    } catch (err) {
        console.error('❌ PostgreSQL connection failed:', err);
        process.exit(1);
    }
}

testConnection();
