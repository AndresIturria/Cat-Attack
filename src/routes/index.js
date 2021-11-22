const express = require('express');
const router = express.Router();
const passport = require('passport');

router.route('/index.css')
.get(function(req, res, next){
    console.log
    res.sendFile(process.cwd() + '/static/css/index.css')
})

router.route('/') 
    .get(function(req, res, next){
        res.render('index.html')
    })
    .post(passport.authenticate('local-signin', {
        successRedirect: '/dashboard',
        failureRedirect: '/',
        passReqToCallback: true
    }));

router.route('/registrarse')
    .get(function(req, res, next){
        res.render('registrarse.html')
    })
    .post(passport.authenticate('local-signup', {
        successRedirect: '/',
        failureRedirect: '/registrarse',
        passReqToCallback: true
    }));

 router.route('/dashboard')
    .get(isAuthenticated, function(req, res, next){
        res.render('dashboard.html');
    });

function isAuthenticated(req, res, next) {
    if(req.isAuthenticated()) {
        return next();
    }
    res.redirect('/')
}

module.exports = router;