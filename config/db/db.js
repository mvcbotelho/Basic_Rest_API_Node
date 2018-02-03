const mysql = require('mysql');

let con = () => {
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'CursoNodeDB'
    });
};

module.exports = con;