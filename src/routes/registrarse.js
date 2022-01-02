const passport = require("passport");
const express = require('express');
const router = express.Router();

router.route('/')
    .get(function(req, res, next){
        res.render('registrarse.njk')
    })
    .post(passport.authenticate('local-signup', {
        successRedirect: '/',
        failureRedirect: '/registrarse',
        passReqToCallback: true
    }));

module.exports = router;