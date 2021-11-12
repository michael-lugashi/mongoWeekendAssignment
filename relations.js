'use strict';
require('dotenv').config();
const mongoose = require('mongoose');
const Post = require('./model/posts');
const Comment = require('./model/Comments');
const User = require('./model/users');

mongoose
  .connect(process.env.dbUri)
  .then((res) => {
    console.log('succes');
  })
  .catch((err) => console.log(err));

function insertPosts() {
  Post.insertMany([
    {
      username: 'GoodGuyGreg',
      title: 'Passes out at party',
      body: 'Wakes up early and cleans house',
    },
    {
      username: 'GoodGuyGreg',
      title: 'Steals your identity',
      body: 'Raises your credit score',
    },

    {
      username: 'GoodGuyGreg',
      title: 'Reports a bug in your code',
      body: 'Sends you a Pull Request',
    },

    {
      username: 'ScumbagSteve',
      title: 'Borrows something',
      body: 'Sells it',
    },

    {
      username: 'ScumbagSteve',
      title: 'Borrows everything',
      body: 'The end',
    },

    {
      username: 'ScumbagSteve',
      title: 'Forks your repo on github',
      body: 'Sets to private',
    },
  ]);
}

// insertPosts()

async function insertComments() {
  Comment.insertMany([
    {
      username: 'GoodGuyGreg',
      comment: 'Hope you got a good deal!',
      post: await getPostId('Borrows something'),
    },
    {
      username: 'GoodGuyGreg',
      comment: "What's mine is yours!",
      post: await getPostId('Borrows everything'),
    },
    {
      username: 'GoodGuyGreg',
      comment: "Don't violate the licensing agreement!",
      post: await getPostId('Forks your repo on github'),
    },
    {
      username: 'ScumbagSteve',
      comment: "It still isn't clean",
      post: await getPostId('Passes out at party'),
    },
    {
      username: 'ScumbagSteve',
      comment: 'Denied your PR cause I found a hack',
      post: await getPostId('Reports a bug in your code'),
    },
  ])
    .then((comments) => {
      console.log(comments);
    })
    .catch((err) => {
      console.log(err);
    });
}
// insertComments();
async function getPostId(postTitle) {
  let postId = await Post.findOne({ title: postTitle });
  return postId['_id'].toString();
}

function insertUsers() {
  User.insertMany([
    {
      username: 'GoodGuyGreg',
      first_name: 'Good Guy',
      last_name: 'Greg',
    },
    {
      username: 'ScumbagSteve',
      full_name: {
        first: 'Scumbag',
        last: 'Steve',
      },
    },
  ]);
}
// insertUsers()

function findUsers() {
  User.find()
    .then((users) => {
      console.log(users);
    })
    .catch((err) => {
      console.log(err);
    });
}

// findUsers();

function findPosts() {
  Post.find()
    .then((users) => {
      console.log(users);
    })
    .catch((err) => {
      console.log(err);
    });
}
// findPosts()

function findByAuthor(_username) {
  Post.find({ username: _username })
    .then((users) => {
      console.log(users);
    })
    .catch((err) => {
      console.log(err);
    });
}
// findByAuthor('GoodGuyGreg')
// findByAuthor('ScumbagSteve');

function findComments() {
  Comment.find()
    .then((users) => {
      console.log(users);
    })
    .catch((err) => {
      console.log(err);
    });
}
// findComments()
function findCommentByAuthor(_username) {
  Comment.find({ username: _username })
    .then((users) => {
      console.log(users);
    })
    .catch((err) => {
      console.log(err);
    });
}
// findCommentByAuthor('GoodGuyGreg');

async function findCommentFromPost() {
  Comment.find({ post: await getPostId('Reports a bug in your code') })
    .then((users) => {
      console.log(users);
    })
    .catch((err) => {
      console.log(err);
    });
}
// findCommentFromPost();
