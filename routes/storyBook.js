const express = require('express');
const router = express.Router();
const passport = require('passport');
const session = require('express-session');
const connectDB = require('../config/mongoConn');

const app = express();

require('../config/passportConfig')(passport);
connectDB();

app.use(session({
    secret: 'dotcomengineer',
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

const commonCss = [
    '/css/materialize/materialize.css',
    '/css/font-awesome.css',
    '/css/utils/_global.css',
    '/css/storyBook/style.css'
];

const commonJs = [
    '/js/materialize/materialize.js',

];

// @desc    Login/Landing Page
// @route   GET /
router.get('/', (req, res) => {
    res.render("pages/storyBook/login", {
        title: 'Login',
        scripts: [
            ...commonJs
        ],
        styles: [
            ...commonCss
        ]
    });
});

// @desc    Auth With Google
// @route   GET /auth/google
router.get('/auth/google', passport.authenticate('google', {scope: ['profile']}));

// @desc    Google auth callback
// @route   GET /auth/google/callback
router.get('/auth/google/callback', passport.authenticate('google', {failureRedirect: '/story-book/'}), (req, res) => {
    res.redirect('/story-book/dashboard');
});

// @desc    Logout User
// @route   /auth/logout
router.get('/auth/logut', (req, res) => {
    req.logout();
    res.redirect('/story-book');
});

// @desc    Dashboard
// @route   GET /dashboard
router.get('/dashboard', (req, res) => {
    res.render("pages/storyBook/dashboard", {
        title: 'Dashboard',
        scripts: [
            ...commonJs
        ],
        styles: [
            ...commonCss
        ]
    });
});

module.exports = router;