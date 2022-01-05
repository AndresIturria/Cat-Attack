const Incidencia = require("../models/incidencias");
const express = require("express");
const router = express.Router();


router.route('/')
    .get(function(req, res, next){
        Incidencia.find({}, function (err, incidencias){
            if (err) return console.log(err);
            res.render('incidencias.njk', {incidencias: incidencias});
        } )

    });

module.exports = router;