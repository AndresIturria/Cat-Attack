const express = require('express');
const app = express();
const { models } = require('../sequelize');
const nunjucks = require('nunjucks');

// Nunjuck config
nunjucks.configure('./static/views', {
    autoescape: true,
    express: app
});

// Set Nunjucks as rendering engine for pages with .html suffix
app.engine( 'html', nunjucks.render ) ;
app.set( 'view engine', 'html' ) ;

//Middleware
app.use(express.json());       // to support JSON-encoded bodies
app.use(express.urlencoded( { extended: true } )); // to support URL-encoded bodies


// We create a wrapper to workaround async errors not being transmitted correctly.
/* function makeHandlerAwareOfAsyncErrors(handler) {
	return async function(req, res, next) {
		try {
			await handler(req, res);
		} catch (error) {
			next(error);
		}
	};
} */

//css
app.get('/index.css', function(req, res) {
  res.sendFile(process.cwd() + '/static/css/index.css');
});
app.get('/base.css', function(req, res) {
  res.sendFile(__dirname + '/static/css/base.css');
});

//app

app.get('/', function(req, res) {
  console.log(req.query)
  res.render('index.html');
});

app.post('/', function(req, res){

  const aux = models.user.findAll({
    where:{
      username: req.body.user,
      password: req.body.passw
    },
    raw: true,
  }).then(users => {
    return users
  }).catch(error=>{
    console.log(error)
  })

  aux.then(function(users){
    console.log(users)
  })
  
});
module.exports = app;
