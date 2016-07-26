const app = require('../../server/server.js');
const request = require('supertest')(app);

describe('Get "/" route: ', () => {
  it('should return status 200', (done) => {
    request
      .get('/')
      .expect('Content-Type', /html/)
      .expect(200, done);
  });
});
