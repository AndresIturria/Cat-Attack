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

app.get('/dashboard', function(req, res) {
  res.render('dashboard.html');
});

app.get('/registrarse', function(req, res) {
  res.render('registrarse.html');
});

app.get('/listadeadopcion', function(req, res) {
  res.render('listadeadopcion.html');
});

app.get('/consejos', function(req, res) {
  res.render('consejos.html');
});

app.get('/catstitting', function(req, res) {
  res.render('catsitting.html');
});

app.get('/incidencias', function(req, res) {
  res.render('incidencias.html');
});

app.get('/perfil', function(req, res) {
    res.render('perfil.html');
  });

app.get('/perfil/solicitudcatsitter', function(req, res) {
    res.render('solicitudcatsitter.html');
  });

app.listen( port ) ;
console.log( 'Listening on port %s...', port ) ;
