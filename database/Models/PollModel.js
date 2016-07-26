// var mongoose = require('mongoose');
// var Schema = mongoose.Schema;


// var pollSchema = new Schema({
//   hostOwner: String,
//   Title: String,
//   accessCode: String,
//   pollQuestionMeta: {
//     title: String,
//     questions: [String],
//     results: [Number]
//   },
//   isActive: Boolean,
//   created_at: Date,
//   updated_at: Date
// });


// // the schema is useless so far
// // we need to create a model using it
// var Poll = mongoose.model('Poll', pollSchema);

// // make this available to our users in our Node applications


//MP - DB schema code for iteration project
'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pollSchema = new Schema({
  question: String,
  choices: [String],
  answers: [String],
  counter: [Number]
});

const Poll = mongoose.model('Poll', pollSchema);

module.exports = Poll;
