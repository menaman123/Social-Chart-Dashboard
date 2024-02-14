const mongoose = require('mongosoe')

const coworkerSchema = new mongoose.Shema({
    first_name_1: {type: String, required: true},
    last_name_1: {type:String, required: false},
    first_name_2: {type: String, required: true},
    last_name_2: {type:String, required: false},
    status: {type: String, required: false}
});

module.exports = mongoose.model('Coworker', coworkerSchema);