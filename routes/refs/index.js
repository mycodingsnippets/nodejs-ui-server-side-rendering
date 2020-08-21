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

module.exports = router;