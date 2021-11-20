const http = require('http');
var express = require('express');
var app = express();
var nunjucks = require('nunjucks');
//const {db, User} = require('./db')
var port = process.env.PORT || 9000 ;

// Nunjuck config
nunjucks.configure('static/views', {
    autoescape: true,
    express: app
});

// Set Nunjucks as rendering engine for pages with .html suffix
app.engine( 'html', nunjucks.render ) ;
app.set( 'view engine', 'html' ) ;

//Middleware
app.use(express.json());       // to support JSON-encoded bodies
app.use(express.urlencoded( { extended: true } )); // to support URL-encoded bodies

//css
app.get('/index.css', function(req, res) {
  res.sendFile(__dirname + '/static/css/index.css');
});
app.get('/base.css', function(req, res) {
  res.sendFile(__dirname + '/static/css/base.css');
});

//app
app.route('/')
.get(function(req, res) {
  res.render('index.html');
})
.post(function(req, res){
  inputUser = req.body.user
  inputPassword = req.body.passw

});

app.listen( port ) ;
console.log( 'Listening on port %s...', port ) ;
