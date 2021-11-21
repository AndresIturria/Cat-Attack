const passport = require(`passport`);
const LocalStrategy = require('passport-local').Strategy;

User = require('../models/user')

passport.serializeUser((user, done) => {
    done(null, user.id);

});

passport.deserializeUser( async (id, done) => {
    const user = await User.findById(id);
    done(null, user);
});

passport.use('local-signup', new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password',
    passReqToCallback: true
}, async (req, username, password, done) => {
    const newUser = new User();
    console.log("entro a crear el user")
    newUser.username = username
    newUser.password = password;
    newUser.firstName = req.body.firstName;
    newUser.lastName1 = req.body.lastName1;
    newUser.lastName2 = req.body.lastName2;
    newUser.birthday = Date()
    await newUser.save();
    console.log("salvo el user")
    done(null, newUser);
    console.log("despues del done")
}));