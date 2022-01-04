const CatSitting = require("../models/catsitting");
const express = require("express");
const router = express.Router();


router.route('/')
    .get(function(req, res, next){
        CatSitting.find({}, function (err, catsitters){
            if (err) return console.log(err);
            res.render('catsitting.njk', {catsitters: catsitters});
        } )

    });

module.exports = router;