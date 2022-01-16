const express = require('express');
const router = express.Router();
const User = require('../models/user')

router.route('/')
    .get(function(req, res, next){
        res.render('perfil_form_foto.njk');
    })

    .post(function(req, res, next){
        let profilepic = req.files.profilepic;
        let uploadPath = process.cwd() + "/public/img/" + req.user.username + ".jpg";

        profilepic.mv(uploadPath, function (err){
            if (err) console.log(err)
        });


        res.redirect('/miperfil');
    })

module.exports = router;
