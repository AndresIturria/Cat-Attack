const mongoose = require('mongoose')
const { Schema } = mongoose;


const adopcionSchema = new Schema({
    photo: Array,
    name: String,
    description: String,
});

module.exports = mongoose.model('adopcion', adopcionSchema)