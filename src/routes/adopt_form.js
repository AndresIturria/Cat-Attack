const express = require('express');
const router = express.Router();

Adopcion = require('../models/adopcion')

router.route('/')
    .get(function(req, res, next){
        res.render('adopt_form.njk');
    })

    .post(function(req, res, next){
        let adoptpic = req.files.fotogato;
        console.log(adoptpic)
        let uploadPath = process.cwd() + "/public/img/" + req.body.name + req.user._id +".jpg";

        adoptpic.mv(uploadPath, function (err){
            if (err) console.log(err)
        });

        const newAdopt = new Adopcion();
        newAdopt.photo = "/img/" + req.body.name + req.user._id +".jpg";
        newAdopt.name = req.body.name;
        newAdopt.age = req.body.age;
        newAdopt.sex = req.body.sex;
        newAdopt.neutered = req.body.neutered;
        newAdopt.breed = req.body.breed;
        newAdopt.weight = req.body.weight;
        newAdopt.ownerid = req.user._id;
        newAdopt.save()

        res.redirect('/adopcion');
    })

module.exports = router;
