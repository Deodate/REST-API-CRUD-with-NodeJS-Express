const { Pool } = require('pg');

const pgPool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'citizen_db',
    password: 'postgres',
    port: 5432, // Default PostgreSQL port
});

pgPool.query('SELECT 1')
    .then(res => console.log('Connected to PostgreSQL:', res.rows[0]))
    .catch(err => console.error('Error connecting to PostgreSQL:', err.stack));

module.exports = pgPool;
