let db = require('../../config/db/db');


module.exports = () => {
    this.all = (callback) => {
        let con = db();
        return con.query('select * from client', callback);
    };

    this.find = (id, callback) => {
        let con = db();
        return con.query('select * from client where id = ?',id, callback);
    };

    this.save = (datas, callback) => {
        let con = db();
        return con.query('insert into client set ?',datas, callback);
    };
    return this;
};