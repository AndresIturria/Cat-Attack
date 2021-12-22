const mongoose = require('mongoose')
const { Schema } = mongoose;


const consejoSchema = new Schema({
    photo: Array,
    title: String,
    description: String,
});

module.exports = mongoose.model('consejo', consejoSchema)