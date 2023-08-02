const { Pool } = require('pg');

const connection = new Pool({
    user : 'postgres',
    database : 'DbConnection',
    password : 'divum123',
    port : 5432,
    host : 'localhost',
});

module.exports = {connection};

