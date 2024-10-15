// dbpools.js

const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    host: '221.145.75.81',
    user: 'bigbro',
    password: 'Jogkdud123$%',
    port: 3306,
    database: 'bigbro',
    connectionLimit: 10,
    waitForConnections: true
});

module.exports = pool;

