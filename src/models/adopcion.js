const mongoose = require('mongoose')
const { Schema } = mongoose;


const adopcionSchema = new Schema({
    photo: Array,
    name: String,
    description: String,
    age: String,
    sex: String,
    neutered: String,
    breed: String,
    fur: String,
    eyes: String
});

module.exports = mongoose.model('adopcion', adopcionSchema)