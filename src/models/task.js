const mongoose = require('mongoose')
const validator = require('validator')

const Task = mongoose.model('Task', {
    Description: {
        type: String,
        trim: true,
        required: true,

    },
    Completed: {
        type: Boolean,
        default: false
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }
})

module.exports = Task