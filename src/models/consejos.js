const mongoose = require('mongoose')
const { Schema } = mongoose;

const consejosSchema = new Schema({
    title: String,
    description: String,
});

module.exports = mongoose.model('consejos', consejosSchema)