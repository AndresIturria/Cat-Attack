const express = require('express');
const router = express.Router();
const Incidencia = require("../models/incidencias");


router.route('/')
    .get(function(req, res, next){
        res.render('enviar_incidencia.njk');
    })

    .post(function(req, res, next){
        //wip
        incidencia = new Incidencia()
        res.redirect('/dashboard');
    });

module.exports = router;