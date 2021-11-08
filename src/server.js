const http = require('http')
var express = require('express');
var app = express();
require('nunjucks')

nunjucks.configure('static', {
    autoescape: true,
    express: app
});

app.get('/', function(req, res) {
    res.render('index.html');
  });

