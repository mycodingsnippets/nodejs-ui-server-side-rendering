const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('pages/testing/cssprops',{
        title: 'CSS',
        styles: [

        ],
        scripts: [

        ]
    });
});

module.exports = router;
