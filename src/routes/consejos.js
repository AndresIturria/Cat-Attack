const express = require('express');
const router = express.Router();
const Consejo = require("../models/consejos");
const passport = require('passport');

router.route('/')
    .get(function(req, res, next){
        Consejo.find({}, function (err, consejos){
            if (err) return console.log(err);
            res.render('consejos.njk', {consejos: consejos});
        } )

    });

router.route('/:id')
    .get(function(req, res, next){
        Consejo.findById(req.params.id, function (err, consejo){
            if (err) return console.log(err);
            res.render('consejo_detailed.njk', {consejo: consejo});
        } )

    });

module.exports = router;