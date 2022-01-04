const express = require('express');
const router = express.Router();

CatSitting = require('../models/catsitting')

router.route('/')
    .get(function(req, res, next){
        res.render('catsitting_form.njk');
    })

    .post(function(req, res, next){
        let sittingpic = req.files.fotocatsitting;
        console.log(sittingpic)
        let uploadPath = process.cwd() + "/public/img/" + req.body.name + req.user._id +".jpg";

        sittingpic.mv(uploadPath, function (err){
            if (err) console.log(err)
        });

        const newSitter = new CatSitting();
        newSitter.photo = "/img/" + req.body.name + req.user._id +".jpg";
        newSitter.name = req.body.name;
        newSitter.price = req.body.price;
        newSitter.place = req.body.place;
        newSitter.description = req.body.description;
        newSitter.ownerid = req.user._id;
        newSitter.save()

        res.redirect('/catsitting');
    })

module.exports = router;
