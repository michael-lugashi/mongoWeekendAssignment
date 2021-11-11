'use strict'
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studentSchema = new Schema(
    {
      name: {
        type: String,
      },
      surName: {
        type: String,
      },
      birth: {
        type: Date,
      },
      phone: {
        type: String,
      },
      gender: {
        type: String,
      },
      courses: {
        type: Array,
      },
    },
    { timestamps: true }
  );
  

const Student = mongoose.model('Student', studentSchema);
module.exports = Student