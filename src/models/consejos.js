const mongoose = require('mongoose')
const { Schema } = mongoose;

const consejosSchema = new Schema({
    photo: Array,
    title: String,
    description: String,
});


module.exports = mongoose.model('consejos', consejosSchema)

var consejos = mongoose.model('consejos', consejosSchema);
var query = consejos.find({});

query.exec(function (err) {
    if (err) return handleError(err);
})