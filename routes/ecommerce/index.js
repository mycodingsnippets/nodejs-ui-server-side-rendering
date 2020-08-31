const express = require('express');
const router = express.Router();

const commonCss = [
    '/css/utils/_global.css',
    '/css/font-awesome.css',
    '/css/ecommerce/common.css'
];

const commonJs = [
    '/js/jquery.min.js'
];

router.get('/', (req, res) => {
    res.render('pages/ecommerce/home', {
        title: 'Home',
        scripts: [
            ...commonJs,
        ],
        styles: [
            ...commonCss,
            '/css/ecommerce/home/style.css'
        ]
    });
});

module.exports = router;