const app = require('../../server/server.js');
const request = require('supertest')(app);
const expect = require('chai').expect;
const MongoClient = require('mongodb').MongoClient;

describe('POST "/data"', function() {
  var poll, db;
  before(done => {
    MongoClient.connect('mongodb://localhost/tadpolliterration', (err, db_) => {
      if (err) throw new Error(err);
      db = db_;
      poll = db_.collection('Poll');
      done();
    });
  });

  it('should return an html page', (done) => {
    request
      .post('/data')
      .expect(200)
      .expect('Content-Type', /html/)
      .end(done);
  });

  it('should update the corresponding answer in the database', (done) => {
    request
      .post('/data')
      .send({answer: 'A'})
      .end(res => {
        poll.findOne({}, (err, poll) => {

        })
      });
  });
});
