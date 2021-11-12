const mongoose = require('mongoose');

const CommentSchema = mongoose.Schema({}, { strict: false }, { timestamps: true });

const Comment = mongoose.model('Comment', CommentSchema);


module.exports = Comment