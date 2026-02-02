import pkg from 'pg';
const { Pool } = pkg;

const pool = new Pool({
    host: process.env.PGHOST || '127.0.0.200',
    port: process.env.PGPORT ? parseInt(process.env.PGPORT) : 5432,
    database: process.env.PGDATABASE || 'zedlyuz_testDB',
    user: process.env.PGUSER || 'zedlyuz_umid',
    password: process.env.PGPASSWORD || 'g@laxyA7',
});

export default pool;
