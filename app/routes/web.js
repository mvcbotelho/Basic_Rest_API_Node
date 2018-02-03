let clientController = require('../controllers/clientCrontroller');


module.exports = (app) => {

    app.get('/', (req, res) => {
        clientController.index(req, res);
    });

    app.post('/', (req, res) => {
        clientController.store(req, res);
    });

    app.get('/detalhe/:id', (req, res) => {
        clientController.show(req, res);
    });

    app.get('/contato', (req, res) => {
        res.render('template/contact');
    });
};