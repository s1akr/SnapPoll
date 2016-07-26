const app = require('../server/server.js');
const request = require('supertest')(app);

describe('GET "/data"', () => {
  it('should return json object of a specific structure', (done) => {
    request
      .get('/data')
      .expect(200)
      .expect('Content-Type', /json/)
      .end(res => {
        if (!('question' in res.body)) throw new Error('incorrect structure');
        if (!('answers' in res.body)) throw new Error('incorrect structure');
        if (!('choices' in res.body)) throw new Error('incorrect structure');
        if (!('counter' in res.body)) throw new Error('incorrect structure');
      });
  });
});
