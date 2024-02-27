const mongoose = require('mongoose')

const connectionSchema = new mongoose.Schema({
    first_name_1: {type: String, required: true},
    last_name_1: {type:String, required: false},
    first_name_2: {type: String, required: true},
    last_name_2: {type:String, required: false},
    status: {type: String, required: false}
});

module.exports = mongoose.model('Connection', connectionSchema);