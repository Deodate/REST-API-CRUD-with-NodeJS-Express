const { Pool } = require('pg');

const pgPool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'citizen_db',
    password: 'postgres',
    port: 5432, // Default PostgreSQL port
});



module.exports = pgPool;
