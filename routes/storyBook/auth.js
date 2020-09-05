const express = require('express');
const router = express.Router();
const passport = require('passport');

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
router.get('/auth/logout', (req, res) => {
    req.logout();
    res.redirect('/story-book');
});

module.exports = router;