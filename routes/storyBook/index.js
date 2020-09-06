const mongoose = require('mongoose');
const passport = require('passport');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const methodOverride = require('method-override');
const connectDB = require('../../config/mongoConn');
const { ensureAuth, ensureGuest } = require('../../middlewares/storyBookAuth');
const { commonCss, commonJs } = require('../../data/storyBook/externalFilesKit');
const Story = require('../../models/storyBook/Story');

require('../../config/passportConfig')(passport);
connectDB();

module.exports = function (app) {

    //Method Override
    app.use(methodOverride(function (req, res) {
        if(req.body && typeof req.body === 'object' && '_method' in req.body){
            let method = req.body._method;
            delete req.body._method;
            return method;
        }
    }));

    //Cookies and Sessions
    app.use(session({
        secret: 'dotcomengineer',
        resave: false,
        saveUninitialized: false,
        store: new MongoStore({
            mongooseConnection: mongoose.connection
        })
    }));
    app.use(passport.initialize());
    app.use(passport.session());

    //Set Global Var
    app.use(function (req, res, next) {
        res.locals.user = req.user || null;
        next();
    });

    // @desc    Login/Landing Page
    // @route   GET /story-book
    app.get('/story-book', ensureGuest, (req, res) => {
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

    app.use('/story-book', require('./auth'));
    app.use('/story-book', require('./stories'));

    // @desc    Dashboard
    // @route   GET /story-book/dashboard
    app.get('/story-book/dashboard', ensureAuth, async (req, res) => {
        try {
            const stories = await Story.find({
                user: req.user.id
            }).lean();

            res.render("pages/storyBook/dashboard", {
                title: 'Dashboard',
                scripts: [
                    ...commonJs
                ],
                styles: [
                    ...commonCss
                ],
                name: req.user.firstName,
                stories
            });
        }catch (e) {
            console.error(e);
            res.render("pages/storyBook/error/500", {
                title: 'Server Error',
                scripts: commonJs,
                styles: commonCss
            });
        }
    });
};