const express = require('express');
const nunjucks = require('nunjucks');
const path = require('path');
const morgan = require('morgan');
const passport = require('passport');
const session = require('express-session');
const flash = require('connect-flash');
const createError = require("http-errors");
const fileUpload = require('express-fileupload');

//Initializations
require('./database');
require('./passport/local-auth');

const app = express();

//settings
app.engine( 'html', nunjucks.render) ;
app.set( 'view engine', 'html');

nunjucks.configure(path.join(__dirname, '/views'), {
    autoescape: true,
    express: app
});

//middlewares
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());       // to support JSON-encoded bodies
app.use(express.urlencoded( { extended: true } )); // to support URL-encoded bodies
morgan.token('body', (req, res) => JSON.stringify(req.body));
app.use(morgan(':method :url :status :response-time ms :body '));
app.use(session({
    secret: 'pruebasecreto',
    resave: false,
    saveUninitialized: false
}));
app.use(flash());
app.use(fileUpload());
app.use(passport.initialize());
app.use(passport.session());
app.use((req, res, next) => { //Esto es un Middleware propio para poder acceder al mensaje de signup en la vista de registrarse.
    app.locals.signinMessage = req.flash('signinMessage');
    app.locals.signupMessage = req.flash('signupMessage');
    app.locals.user = req.user;
    next(); // Sin este next se va a quedar estancado aqui
});


//Routes
app.use('/', require('./routes/index'));
app.use('/registrarse', require('./routes/registrarse'));
app.use('/logout', isAuthenticated, require('./routes/logout'));
app.use('/dashboard', isAuthenticated, require('./routes/dashboard'));
app.use('/adopcion', isAuthenticated, require('./routes/adopcion'));
app.use('/consejos', isAuthenticated, require('./routes/consejos'));
app.use('/miperfil', isAuthenticated, require('./routes/miperfil'));
app.use('/adopt_form', isAuthenticated, require('./routes/adopt_form'));
app.use('/catsitting', isAuthenticated, require('./routes/catsitting'));
app.use('/catsitting_form', isAuthenticated, require('./routes/catsitting_form'));
app.use('/consejo_form', isAuthenticated, require('./routes/consejo_form'));
app.use('/incidencias', isAuthenticated, require('./routes/incidencias'));
app.use('/chat', isAuthenticated, require('./routes/chat'));
app.use('/perfil_form_foto', isAuthenticated, require('./routes/perfil_form_foto'));
app.use('/perfil_form_password', isAuthenticated, require('./routes/perfil_form_password'));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error.njk');
});

// Authentication

function isAuthenticated(req, res, next) {
    if(req.isAuthenticated()) { // req.isAuthenticated is a function provided by passport.
        return next();
    }
    res.redirect('/')
}

module.exports = app;
