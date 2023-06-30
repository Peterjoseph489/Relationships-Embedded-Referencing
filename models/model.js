const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required']
    },
    email: {
        type: String,
        required: [true, 'Email is required']
    },
    comment: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'MyComments'
    }]
}, {timestamp: true})

const contactModel = mongoose.model('Book', contactSchema)

module.exports = contactModel