const express = require('express');
const router = express.Router();

const portfolioStyles = [
    process.env.BOOTSTRAP_CSS_PATH,
    '/css/portfolioOne/font-awesome.css',
    '/css/portfolioOne/style.css'
];

const portfolioScripts = [
    process.env.JQUERY_FILE_PATH,
    ...process.env.BOOTSTRAP_JS_PATH.split(",")
];

router.get('/', (req, res) => {
    res.render('pages/portfolioOne/index',{
        title: 'Home',
        styles: portfolioStyles,
        scripts: portfolioScripts
    });
});

module.exports = router;