const express = require('express');
const router = express.Router();
const passport = require('passport');
consejos = require('.../models/consejos');

router.route('/')
    .get(function(req, res, next){
        res.render('index.njk')
    })
    .post(passport.authenticate('local-signin', {
        successRedirect: '/dashboard',
        failureRedirect: '/',
        passReqToCallback: true
    }));

router.route('/registrarse')
    .get(function(req, res, next){
        res.render('registrarse.njk')
    })
    .post(passport.authenticate('local-signup', {
        successRedirect: '/',
        failureRedirect: '/registrarse',
        passReqToCallback: true
    }));

router.route('/logout')
    .get(function(req, res, next){
        req.logout();
        res.redirect('/');
})


 router.route('/dashboard')
    .get(isAuthenticated, function(req, res, next){
        res.render('dashboard.njk');
    });

function isAuthenticated(req, res, next) {
    if(req.isAuthenticated()) {
        return next();
    }
    res.redirect('/')
}

router.route('/consejos')
    .get(isAuthenticated, function(req, res, next){
        res.render('consejos.njk', {consejos: consejos});
    });

module.exports = router;