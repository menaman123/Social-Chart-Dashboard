const mongoose = require('mongoose')

const coworkerSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type:String,
    },
    department: {
        type: String,
        required: true
    },
    potential: {
        type: Number, 
        required: true
    },
    connection: [{
        coworker_ids: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'coworker'
    }
    }],
    issues: [{
        issue_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'issue'
        },
        agitation_level:{
            type: Number
        }
    }],
});

module.exports = Coworker = mongoose.model('Coworker', coworkerSchema);