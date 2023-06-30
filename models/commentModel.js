const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    writeComment: {
        type: String,
        required: [true, 'Comment is required']
    },
    link: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Book'
    }
}, {timestamp: true})

const commentModel = mongoose.model('MyComments', commentSchema)

module.exports = commentModel