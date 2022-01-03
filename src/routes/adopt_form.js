const express = require('express');
const router = express.Router();

router.route('/')
    .get(function(req, res, next){
        res.render('adopt_form.njk');
    })

router.route('/post-adopt')
    .post(function (req, res){
        dbConn.then(function(db) {
            db.collection('adopcion').insertOne(req.body);
    });
    res.send('Data received:\n' + JSON.stringify(req.body));

    });

module.exports = router;
