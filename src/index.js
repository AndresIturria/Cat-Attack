const express = require('express');
const nunjucks = require('nunjucks');
const path = require('path');
const morgan = require('morgan');
const passport = require('passport');
const session = require('express-session');

//Initializations
require('./database');
require('./passport/local-auth');
const app = express();

//settings
app.set('port',process.env.port || 9000);
app.engine( 'html', nunjucks.render) ;
app.set( 'view engine', 'html');

nunjucks.configure(path.join(__dirname, '/static/views'), {
    autoescape: true,
    express: app
});

//middlewares
app.use(express.json());       // to support JSON-encoded bodies
app.use(express.urlencoded( { extended: true } )); // to support URL-encoded bodies
morgan.token('body', (req, res) => JSON.stringify(req.body));
app.use(morgan(':method :url :status :response-time ms :body '));
app.use(session({
    secret: 'pruebasecreto',
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());


//Routes
app.use('/', require('./routes/index'));


//starting the server

app.listen(app.get('port'), () => {
    console.log('Server on Port', app.get('port'))
});