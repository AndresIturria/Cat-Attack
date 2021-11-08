const http = require('http')
var express = require('express');
var app = express();
var nunjucks = require('nunjucks')

var port = process.env.PORT || 9000 ;


nunjucks.configure('static', {
    autoescape: true,
    express: app
});

// Set Nunjucks as rendering engine for pages with .html suffix
app.engine( 'html', nunjucks.render ) ;
app.set( 'view engine', 'html' ) ;

app.get('/', function(req, res) {
    res.render('index.html');
  });

app.listen( port ) ;
console.log( 'Listening on port %s...', port ) ;

