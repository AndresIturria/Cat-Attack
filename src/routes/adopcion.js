const Adopcion = require("../models/adopcion");
const express = require("express");
const router = express.Router();


router.route('/')
    .get(function(req, res, next){
        Adopcion.find({}, function (err, adopciones){
            if (err) return console.log(err);
            res.render('adopcion.njk', {adopciones: adopciones});
        } )

    });

module.exports = router;