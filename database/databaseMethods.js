const mongoose = require('mongoose');
var db = mongoose.connection;

var Host = require('../Database/Models/HostModel');
var poll = require('../Database/Models/PollModel');
//verifying
db.on('error', console.error);
db.once('open', function() {
  console.log('Mongodb connected');
});

var dbMethods = {};


//Mongodb CRUD Operation for HOSTS
dbMethods.createNewHost = function(req, res){
  var hostData = req.body;
  var hostTemp = new Host(hostData);
  hostTemp.save(function(err, hostData) {
    if (err) return console.error('Error! ' + err);
    console.dir('saved!');
  });
}


dbMethods.verifyHost = function(hostNameInput, hostPasswordInput) {

    // fetch user and test password verification
    Host.findOne({ username: 'SarahJ' }, function(err, user) {
        if (err) throw err;

        // test a matching password
        user.comparePassword('Password123', function(err, isMatch) {
            if (err) throw err;
            console.log('Password123:', isMatch); // -> Password123: true
        });

        // test a failing password
        user.comparePassword('123Password', function(err, isMatch) {
            if (err) throw err;
            console.log('123Password:', isMatch); // -> 123Password: false
        });
    });
  }

// Mongodb CRUD Operations for POLLS


dbMethods.savePollInstance = function(pollToSave){
  var pollTemp = new poll(pollToSave);
  pollTemp.save(function(err, pollToSave) {
    if (err) return console.error('Error! ' + err);
    console.dir('saved!');
  });
}

dbMethods.deletePollInstance = function(pollToDelete_id){
  poll.findByIdAndRemove(pollToDelete_id, function(err, poll){
    console.log('removed ' + poll);
  })
}








mongoose.connect('mongodb://localhost/tadpoll');

//MP - DB code for iteration project


module.exports = dbMethods;
