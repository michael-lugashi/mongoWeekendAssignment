'use strict'
const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({}, { strict: false }, { timestamps: true });

const User = mongoose.model('User', UserSchema);


module.exports = User