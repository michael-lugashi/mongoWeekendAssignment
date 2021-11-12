'use strict'
const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({}, { strict: false }, { timestamps: true });

const Post = mongoose.model('Post', PostSchema);


module.exports = Post