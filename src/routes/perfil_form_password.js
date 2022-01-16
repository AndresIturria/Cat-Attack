const express = require('express');
const router = express.Router();
const User = require('../models/user')

router.route('/')
    .get(function(req, res, next){
        res.render('perfil_form_password.njk');
    })

    .post(function(req, res, next){
        const query = { username: req.user.username };
        user = new User()
        newPassword = user.encryptPassword(req.body.password);
        User.findOneAndUpdate(query, { password: newPassword }, function(err){
            res.redirect('/miperfil');

        });
        });




module.exports = router;
