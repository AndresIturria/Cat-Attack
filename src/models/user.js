const mongoose = require('mongoose')
const { Schema } = mongoose;
const bcrypt = require('bcrypt-nodejs');

const userSchema = new Schema({
    username: String,
    password: String,
    firstName: String,
    lastName1: String,
    lastName2: String,
    dni: String,
    birthday: Date,
    email: String,
    photo: Array,
    description: String,
    isAdmin: Boolean
});

userSchema.methods.encryptPassword = (password) => {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10)); //gensaltsync(10) significa que va a ejecutar el algoritmo 10 veces, 10 es el más común usado.
    //lo ideal seria hacerlo asincrono pero asi es mas facil
};

userSchema.methods.validatePassword = function(password) {
    return bcrypt.compareSync(password, this.password)
}

module.exports = mongoose.model('user', userSchema)