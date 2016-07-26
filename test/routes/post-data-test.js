const app = require('../../server/server.js');
const mongoose = require('mongoose');
const request = require('supertest')(app);
const expect = require('chai').expect;
const MongoClient = require('mongodb').MongoClient;
const Poll = require('../../Database/Models/PollModel');
// mongoose.connect('mongodb://localhost/tadpolliteration');
// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
//   console.log('We are connected!');
// });

describe('POST "/data"', function() {
  let poll, db;
  before(done => {
    MongoClient.connect('mongodb://localhost/tadpolliteration', (err, db_) => {
      if (err) throw new Error(err);
      db = db_;
      polls = db_.collection('polls');
      done();
    });
  });

  it('should redirect to /results', (done) => {
    request
      .post('/data')
      .expect('Location', /\/results/, done);
  });

  it('should update the corresponding answer in the database', (done) => {
    polls.findOne({}, (err, poll) => {
      expect(err).to.not.exist;
      
      done();
    });
  });
});
