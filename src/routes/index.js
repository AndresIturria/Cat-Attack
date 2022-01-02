const express = require('express');
const router = express.Router();
const passport = require('passport');

router.route('/')
    .get(function(req, res, next){
        res.render('index.njk')
    })
    .post(passport.authenticate('local-signin', {
        successRedirect: '/dashboard',
        failureRedirect: '/',
        passReqToCallback: true
    }));

module.exports = router;