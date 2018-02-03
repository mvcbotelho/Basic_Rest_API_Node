'use strict';

module.exports = () => {
    const express = require('express');
    const bodyParse = require('body-parser');
    const validator = require('express-validator');

    let app = express();
    app.set('view engine', 'ejs');
    app.set('views', './app/views');

    app.use(bodyParse.json());
    app.use(bodyParse.urlencoded({ extended: true }));

    app.use(validator());

    require('../../app/routes/web')(app);

    app.listen(8000, () => {
        console.log('localhost:8000');
    });
};