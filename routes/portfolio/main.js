const express = require('express');
const router = express.Router();

const portfolioStyles = [
    process.env.BOOTSTRAP_CSS_PATH,
    '/css/portfolio/font-awesome.css',
    '/css/portfolio/style.css'
];

const portfolioScripts = [
    process.env.JQUERY_FILE_PATH,
    ...process.env.BOOTSTRAP_JS_PATH.split(",")
];

router.get('/', (req, res) => {
    res.render('pages/portfolio/index',{
        title: 'Home',
        styles: portfolioStyles,
        scripts: portfolioScripts
    });
});

module.exports = router;