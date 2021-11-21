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
    .post(function(req, res, next){
        res.render('index.html')
    })

router.route('/registrarse')
    .get(function(req, res, next){
        res.render('registrarse.html')
    })
    .post(passport.authenticate('local-signup', {
        successRedirect: '/',
        failureRedirect: '/registrarse',
        passReqToCallback: true
    }));

/* router.route('/profile')
    .get(function(req, res, next){
        res.render('profile');
}); */
module.exports = router;