const mongoose = require('mongoose');

const notesSchema = new mongoose.Schema({
    title: {
        type: String,
    },
    content: {
        type: String,   
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
});

module.exports = mongoose.model('Note', notesSchema);