const clientModel = require('../models/clientModel')();

module.exports.index = (req, res) => {
    clientModel.all( (erro, result) => {
        res.render('template/home', { clients: result, erros: {}, datas: {} });
    });
};

module.exports.store = (req, res) => {
    let datas = req.body;

    req.assert('name', 'Nome não pode ser vazio').notEmpty();
    req.assert('name', 'Nome deve ter de 3 a 20 letras').len(3, 20);
    req.assert('email', 'E-mail não pode ser vazio').notEmpty();
    req.assert('email', 'E-mail invalido').isEmail();

    let error = req.validationErrors();

    if(error) {
        clientModel.all( (erro, result) => {
            res.render('template/home', { clients: result, erros: error, datas: datas });
        });
        return;
    }

    console.log(datas);
    clientModel.save(datas, (erro, result) => {
        res.redirect('/');
    });
};

module.exports.show = (req, res) => {
    clientModel.find(req.params.id, (erro, result) => {
        if(result[0] && !erro) {
            res.render('template/detail', { client: result[0] });
        } else {
            res.redirect('/');
        }
    });
};