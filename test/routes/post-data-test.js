const app = require('../../server/server.js');
const request = require('supertest')(app);
const expect = require('chai').expect;

describe('POST "/data"', function() {
  it('should redirect to /results E', (done) => {
    request
      .post('/data')
<<<<<<< HEAD
      .send({ answer: 'E' })
=======
      .send({answer: 'A'})
>>>>>>> b5f6d3c6fd02d5e1457edf9e32cd834eeaf47c74
      .type('form')
      .set('Accept', /application\/json/)
      .expect('Location', /\/results/, done);
  });
});
