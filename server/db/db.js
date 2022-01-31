const mysql = require("mysql");
require('dotenv').config();

let connection = mysql.createCXonnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PW,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME
});

connection.connect();

module.exports = connection;