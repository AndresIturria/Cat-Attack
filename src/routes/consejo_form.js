const express = require('express');
const router = express.Router();
const Consejo = require('../models/consejos')

router.route('/')
    .get(function(req, res, next){
        res.render('consejo_form.njk');
    })

    .post(function(req, res, next){
        let sittingpic = req.files.fotoconsejo;
        let uploadPath = process.cwd() + "/public/img/" + req.body.title +".jpg";

        sittingpic.mv(uploadPath, function (err){
            if (err) console.log(err)
        });

        const consejo = new Consejo();
        consejo.photo = "/img/" + req.body.title + ".jpg";
        consejo.title = req.body.title
        consejo.description = req.body.description;
        consejo.article = req.body.contenido;

        consejo.save()

        res.redirect('/consejos');
    })

module.exports = router;
