const express = require('express');
const router = express.Router();

const Incidencia = require("../models/incidencias");


router.route('/')
    .get(function(req, res, next){
        res.render('enviar_incidencia.njk');
    })

    .post(function(req, res, next){
        //wip

        const incidencia = new Incidencia();

        incidencia.issuer = req.user.username;
        incidencia.target = req.body.target;
        incidencia.type = req.body.type;
        incidencia.desc = req.body.desc;
        incidencia.status = "false";

        incidencia.save()

        res.redirect('/adopcion');
    })

module.exports = router;