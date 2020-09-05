module.exports = {
    ensureAuth: function (req, res, next) {
        if(req.isAuthenticated()){
            return next();
        }else{
            res.redirect('/story-book');
        }
    },
    ensureGuest: function (req, res, next) {
        if(req.isAuthenticated()){
            res.redirect('/story-book/dashboard');
        }else{
            return next();
        }
    }
};