const http = require('http');
var express = require('express');
var app = express();
var nunjucks = require('nunjucks');
const { Sequelize, Model, DataTypes } = require('sequelize');
var port = process.env.PORT || 9000 ;


//db

const db = new Sequelize('catattack', 'root', 'root', {  //process.env.DB_USER, process.env.DB_PASSWORD, { para despues
  dialect: 'sqlite',
  storage: 'catattack.db',
  dialectOptions: {
    // Your sqlite3 options here
  }
});

const User = db.define('user', {
  // Model attributes are defined here
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName1: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName2:{
    type: DataTypes.STRING
    // allowNull defaults to true
  },
  username: {
    type: DataTypes.TEXT,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  birthday: {
    type: DataTypes.DATEONLY, // yyyy-mm-dd
    allowNull: false
  },
  email:{
    type: DataTypes.STRING,
    allowNull: false
  },
  isAdmin:{
    type: DataTypes.BOOLEAN,
    defaultValue: false
  }

}, {
  // Other model options go here
  tableName: 'users'
});

(async () => {
  await db.sync({ force: true });
  // Code here
  const admin = await User.create({ firstName: "admin", lastName1: "admin", username: "admin", password: "admin", birthday:"1900-01-01", email:"admin@catattack.com", isAdmin:"true"})
  const normaluser = await User.create({ firstName: "test", lastName1:"test", lastName2:"test", username: "test", password: "test", birthday:"1996-05-04", email: "test@catattack.com"})
  const guestuser = await User.create({ firstName: "guest", lastName1:"guest", lastName2:"guest", username: "guest", password: "guest", birthday:"1996-05-04", email: "guest@catattack.com"})
  User.sync();
  const users = await User.findAll();
  console.log(users.every(user => user instanceof User)); // true
  console.log("All users:", JSON.stringify(users, null, 2));
})();


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

  res.render('dashboard.html')
});

app.listen( port ) ;
console.log( 'Listening on port %s...', port ) ;
