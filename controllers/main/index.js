const indexModel = require('../../models/main/index');

const commonCss = [];
const commonJs = [];

module.exports = (req, res) => {
    res.render('pages/main/index', {
        title: 'Test',
        scripts: [],
        styles: [],
        data: indexModel
    });
};