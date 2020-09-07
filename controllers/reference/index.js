const commonCss = [
    '/css/font-awesome.css',
    '/css/bulma/bulma.css',
    'css/utils/_global.css'
];

const commonJs = [];

module.exports = {
    'index': (req, res) => {
        res.render('pages/reference/index',{
            title: 'Index',
            styles: [
                ...commonCss
            ],
            scripts: [
                ...commonJs
            ]
        })
    }
};