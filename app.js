'use strict';
require('dotenv').config();
const mongoose = require('mongoose');
const Student = require('./model/students');

mongoose
  .connect(process.env.dbUri)
  .then((res) => {
    console.log('succes');
  })
  .catch((err) => console.log(err));

// ADD DOCUMENTS
function addStudent(firstName, sureName, birth, phone, gender, courses) {
  const student = new Student({
    name: firstName,
    sureName,
    birth: new Date(birth),
    phone,
    gender,
    courses,
  });
  student.save();
}

// addStudent('Ido', ' Arbel', '01/26/1998', '526305421','male', ['Java', 'Math']);
// addStudent('Chen', 'Halevi', '11/03/1997', '0526323421','male', ['Math', 'Law']);
// addStudent('Koren', 'Gan-or', '01/19/1997', '0526305321', 'male', ["JavaScript", "Finance", "Law"]);
// addStudent('Oryan', 'Levy', '02/04/1998', '0542305321', 'male', ['JavaScript', 'Law']);
// addStudent('Yahalom', 'Cohen', '03/11/1993', '0542305392', 'Female', ['Java', 'Law']);

// FIND DOCUMENTS
function findAll() {
  Student.find().then((students) => {
    console.log(students);
  });
}

// findAll()

function findAllIdo() {
  Student.find({ name: 'Ido' }).then((student) => {
    console.log(student);
  });
}
// findAllIdo();

function includeLaw() {
  Student.find({ courses: { $in: ['Law'] } }).then((student) => {
    console.log(student);
  });
}
// includeLaw()

function genderCourse() {
  Student.find({ courses: { $in: ['Java'] }, gender: 'Female' }).then(
    (student) => {
      console.log(student);
    }
  );
}
// genderCourse()

function birthLessThan() {
  Student.find({ birth: { $lte: new Date('1998-05-05') } }).then((student) => {
    console.log(student);
  });
}

// birthLessThan()

function startPhone() {
  Student.find({ phone: { $regex: '^054', $options: 'i' } }).then((student) => {
    console.log(student);
  });
}
// startPhone()

// UPDATE DOCUMENTS
function updateYaholomCourses() {
  Student.findOneAndUpdate(
    { name: 'Yahalom' },
    {
      $push: { courses: 'JavaScript' },
    },
    { new: true }
  ).then((student) => {
    console.log(student);
  });
}
// updateYaholomCourses();

function updateKorenBirthDate() {
  Student.findOneAndUpdate(
    { name: 'Koren' },
    {
      birth: new Date('02/12/1998'),
    },
    {
      new: true,
    }
  ).then((student) => {
    console.log(student);
  });
}
// updateKorenBirthDate();

function findNamesWithLetterO() {
  Student.find({ name: { $regex: 'o', $options: 'i' } })
    .then((student) => {
      console.log(student);
    })
    .catch((err) => {
      console.log(err);
    });
}

// findNamesWithLetterO();

function findSureNameWithLetter() {
  Student.find({
    $or: [
      { name: { $regex: 'h', $options: 'i' } },
      { name: { $regex: 'y', $options: 'i' } },
    ],
  })
    .then((student) => {
      console.log(student);
    })
    .catch((err) => {
      console.log(err);
    });
}

// findSureNameWithLetter();

function deleteIdo() {
  Student.deleteOne({ name: 'Ido' })
    .then((student) => {
      console.log(student);
    })
    .catch((err) => {
      console.log(err);
    });
}
// deleteIdo();

function deleteByDate() {
  Student.deleteOne({ birth: new Date('02/04/1998') })
    .then((student) => {
      console.log(student);
    })
    .catch((err) => {
      console.log(err);
    });
}

// deleteByDate();
console.log('finished');
