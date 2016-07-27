// const mongoose = require('mongoose');
// var db = mongoose.connection;

// var Host = require('../Database/Models/HostModel');
// var poll = require('../Database/Models/PollModel');
// //verifying
// db.on('error', console.error);
// db.once('open', function() {
//   console.log('Mongodb connected');
// });

// var dbMethods = {};


// //Mongodb CRUD Operation for HOSTS
// dbMethods.createNewHost = function(req, res){
//   var hostData = req.body;
//   var hostTemp = new Host(hostData);
//   hostTemp.save(function(err, hostData) {
//     if (err) return console.error('Error! ' + err);
//     console.dir('saved!');
//   });
// }


// dbMethods.verifyHost = function(hostNameInput, hostPasswordInput) {

//     // fetch user and test password verification
//     Host.findOne({ username: 'SarahJ' }, function(err, user) {
//         if (err) throw err;

//         // test a matching password
//         user.comparePassword('Password123', function(err, isMatch) {
//             if (err) throw err;
//             console.log('Password123:', isMatch); // -> Password123: true
//         });

//         // test a failing password
//         user.comparePassword('123Password', function(err, isMatch) {
//             if (err) throw err;
//             console.log('123Password:', isMatch); // -> 123Password: false
//         });
//     });
//   }

// // Mongodb CRUD Operations for POLLS


// dbMethods.savePollInstance = function(pollToSave){
//   var pollTemp = new poll(pollToSave);
//   pollTemp.save(function(err, pollToSave) {
//     if (err) return console.error('Error! ' + err);
//     console.dir('saved!');
//   });
// }

// dbMethods.deletePollInstance = function(pollToDelete_id){
//   poll.findByIdAndRemove(pollToDelete_id, function(err, poll){
//     console.log('removed ' + poll);
//   })
// }








// mongoose.connect('mongodb://localhost/tadpoll');

//MP - DB code for iteration project
'use strict';
const mongoose = require('mongoose');
const Poll = require('../Database/Models/PollModel');
mongoose.connect('mongodb://localhost/tadpolliteration');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('We are connected!');
});

// Add MVP poll question to tadpolliteration database.
// var newPoll = Poll({
//   question: 'What topic would you like to review?',
//   choices: ['A','B','C','D','E'],
//   answers: ['Asynchronous/Promises Fundamentals','Angular','React','Node/Express/Database Backend', 'Obect Orientated Programming'],
//   counter: [0,0,0,0,0]
// });
//
// newPoll.save(err => {
//   if (err) console.log(err);
//   else console.log('saved');
// });

// function saveMvpPoll() {
//   Poll.findOne({question:'What topic would you like to review?'}, (err, polls) => {
//   if (!polls) {
//     newPoll.save(function(err) {
//       if (err) {
//         console.log('New Poll save error!')
//       } else {
//         console.log('New Poll saved!')
//       }
//     });
//   } else {
//     console.log('You have poll data', polls);
//   }
//   });
// }

function getPoll(req, res, next){
  // saveMvpPoll();
  Poll.find({}, (err, polls) => {
    if (err) throw err;
    res.json(polls);
  });
}

function countAnswer(req, res, next) {
  Poll.find({ }, (err, poll) => {
    if(err) throw err;
    let index = poll[0].choices.indexOf(req.body.answer)
    let counterArray = poll[0].counter;
    let count = poll[0].counter[index] + 1;
    counterArray.splice(index, 1, count);
    Poll.update({ }, { $set: { counter: counterArray } }, (err, result) => {
      console.log('Vote counted!');
      next();
    });
  });
}

function resetCounter() {
  Poll.find({ }, (err, poll) => {
    if(err) console.log('Reset Error!')
    Poll.update({ }, { $set: { counter: [0,0,0,0,0] } }, (err, result) =>
      console.log('Counter reset!'));
  });
}

module.exports = {
  getPoll,
  countAnswer
};
