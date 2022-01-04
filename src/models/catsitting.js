const mongoose = require('mongoose')
const { Schema } = mongoose;


const catsitterSchema = new Schema({
    userid: Schema.Types.ObjectId,
    name: String,
    place: String,
    price: String,
    description: String,
    photo: Array,

});

module.exports = mongoose.model('catsitter', catsitterSchema)