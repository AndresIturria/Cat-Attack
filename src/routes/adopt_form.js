const express = require('express');
const router = express.Router();

router.route('/')
    .get(function(req, res, next){
        res.render('adopt_form.njk');
    });

module.exports = router;
