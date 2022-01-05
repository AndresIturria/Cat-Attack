const mongoose = require('mongoose')
const { Schema } = mongoose;


const incidenciaSchema = new Schema({
    target: String,
    issuer: String,
    desc: String,

});

module.exports = mongoose.model('incidencia', incidenciaSchema)