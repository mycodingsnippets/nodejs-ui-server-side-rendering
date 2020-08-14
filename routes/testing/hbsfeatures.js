const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('pages/testing/hbsfeatures', {
        title: 'Home',
        name: 'Aditya',
        isImportant: false,
        isLoggedIn: false,
        tweets: [
            {user: "Aditya",tweet:"Tweet1"},
            {user: "Aaina",tweet:"Tweet2"},
            {user: "Mamta",tweet:"Tweet3"},
            {user: "Dev",tweet:"Tweet4"},
        ],
        scripts: [
            '/js/testing/test.js'
        ],
        styles: [
            '/css/testing/test.css'
        ]
    });
});

module.exports = router;