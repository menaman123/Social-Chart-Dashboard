const { ObjectId } = require('mongodb');
const mongoose = require('mongoose')

const issueSchema = new mongoose.Schema({
    description: {type: String, required: true},
    workers: [{
        type: ObjectId,
        ref: 'coworker'
    }],
});

module.exports = issue = mongoose.model('Issue', issueSchema);