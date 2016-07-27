const app = require('../../server/server.js');
const request = require('supertest')(app);

describe('GET "/results"', () => {
  it('should return an html file', (done) => {
    request
      .get('/results')
      .expect('Content-Type', /html/)
      .expect('Location', /\/results/)
      .expect(200, done);
  });
});
