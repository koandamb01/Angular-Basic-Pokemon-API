const Controllers = require('../controllers/controllers');

module.exports = (app) => {
    app.get('/', (req, res) => {
        index: (req, res) => {
            Controllers.index(req, res);
        }
    });
}