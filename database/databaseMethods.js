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

///*Add MVP poll question to tadpolliteration database.
// var newPoll = Poll({
//   question: 'What topic would you like to review?',
//   choices: ['A','B','C','D','E'],
//   answers: ['Asynchronous/Promises Fundamentals','Angular','React','Node/Express/Database Backend', 'Obect Orientated Programming'],
//   counter: [1,2,3,4,5]
// });

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

//Added pollArray to handle 'add question' functionality to grab the most recent poll (array lenght - 1).
function getPoll(req, res, next){
  // saveMvpPoll();
  Poll.find({}, (err, polls) => {
    if (err) throw err;
    let pollArray = [];
    pollArray.push(polls[polls.length-1]);
    res.json(pollArray);
  });
}

//Made changes to handle 'add question' functionality to grab the most recent poll (array lenght - 1).
function countAnswer(req, res, next) {
  console.log('req.body',req.body);
  Poll.find({ }, (err, poll) => {
    if(err) throw err;
    let index = poll[poll.length-1].choices.indexOf(req.body.answer)
    let counterArray = poll[poll.length-1].counter;
    let count = poll[poll.length-1].counter[index] + 1;
    let pollID = poll[poll.length-1]._id
    counterArray.splice(index, 1, count);
    //udated Poll.update from { } to find the poll being updated based on object id.
    Poll.update({ _id: pollID }, { $set: { counter: counterArray } }, (err, result) => {
      console.log('Vote counted!');
      next();
    });
  });
}

//Made changes to reset counter based on index position of poll.
function resetCounter(index) {
  Poll.find({ }, (err, poll) => {
    if(err) console.log('Reset Error!')
    Poll.update(poll[index], { $set: { counter: [0,0,0,0,0] } }, (err, result) =>
      console.log('Counter reset!'));
  });
}

//Make sure there aren't issues calling Poll variable. May need to require PollModel on server.js file
function addPoll(req, res, next) {
  console.log('req.body add Poll',req.body);

  var newPoll = Poll({
    question: req.body.question,
    choices: ['A','B','C','D','E'],
    answers: req.body.answers,
    counter: [0,0,0,0,0]
  });

  newPoll.save(err => {
    if (err) console.log(err);
    else {
      console.log('new poll saved');
      next();
    }
  });

}

//test addPoll to ensure functionality and make sure poll is being added.
//It works.
  // function addPollTest(obj) {
  //   console.log('req.body add Poll',obj.body);

  //   var newPoll = Poll({
  //     question: obj.body.question,
  //     choices: ['A','B','C','D','E'],
  //     answers: obj.body.answers,
  //     counter: [1,1,1,1,1]
  //   });

  //   newPoll.save(err => {
  //     if (err) console.log(err);
  //     else console.log('new poll saved');
  //   });

  // }

  // var testAddPoll = {
  //   body: {
  //     'question':'What do you think of the add question feature?',
  //     'answer': ['I like A','I like B','I like C','I like D','I like E']
  //   }
  // }

  // addPollTest(testAddPoll);


module.exports = {
  getPoll,
  countAnswer,
  addPoll
};
