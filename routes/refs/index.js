const express = require('express');
const router = express.Router();

const commonCss = [
    '/css/utils/_global.css',
    '/css/font-awesome.css'
];

const commonJs = [
    '/js/jquery.min.js'
];

router.get('/banner', (req, res) => {
    res.render('pages/refs/banner', {
        title: 'Banner',
        scripts: [
            ...commonJs,
            '/js/refs/banner.js'
        ],
        styles: [
            ...commonCss,
            '/css/refs/banner.css'
        ]
    });
});

router.get('/navbar', (req, res) => {
    res.render('pages/refs/navbar', {
        title: 'Navbar',
        scripts: [
            ...commonJs,
            '/js/refs/navbar.js'
        ],
        styles: [
            ...commonCss,
            '/css/refs/navbar.css'
        ]
    });
});

router.get('/columns', (req, res) => {
    res.render('pages/refs/columns', {
        title: 'Columns',
        scripts: [
            ...commonJs,
            '/js/refs/columns.js'
        ],
        styles: [
            ...commonCss,
            '/css/refs/columns.css'
        ]
    });
});

module.exports = router;