const mongoose = require('mongoose')
const { Schema } = mongoose;


const incidenciaSchema = new Schema({
    target: String,
    issuer: String,
    type: String,
    desc: String,
    status: Boolean,
});

module.exports = mongoose.model('incidencia', incidenciaSchema)