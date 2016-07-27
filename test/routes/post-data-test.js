const app = require('../../server/server.js');
const request = require('supertest')(app);
const expect = require('chai').expect;

describe('POST "/data"', function() {
  it('should redirect to /results E', (done) => {
    request
      .post('/data')
      .send({answer: 'A'})
      .type('form')
      .set('Accept', /application\/json/)
      .expect('Location', /\/results/, done);
  });
});
