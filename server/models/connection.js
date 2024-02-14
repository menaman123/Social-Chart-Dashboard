const mongoose = require('mongosoe')

const connectionSchema = new mongoose.Shema({
    first_name: {type: String, required: true},
    last_name: {type:String, required: false},
    department: {type: String, required: true},
    potential: {type: Number, required: true}
});

module.exports = mongoose.model('Connection', connectionSchema);