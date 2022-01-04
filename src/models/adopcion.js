const mongoose = require('mongoose')
const { Schema } = mongoose;


const adopcionSchema = new Schema({
    photo: Array,
    name: String,
    age: String,
    sex: String,
    neutered: String,
    breed: String,
    weight: String,
    ownerid: Schema.Types.ObjectId,
});

module.exports = mongoose.model('adopcion', adopcionSchema)