const mongoose = require('mongoose')

const coworkerSchema = new mongoose.Schema({
    first_name: {type: String, required: true},
    last_name: {type:String, required: false},
    department: {type: String, required: true},
    potential: {type: Number, required: true}
});

module.exports = mongoose.model('Coworker', coworkerSchema);