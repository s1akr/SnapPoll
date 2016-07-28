const app = require('../../server/server.js');
const request = require('supertest')(app);

describe('Get "/guestion" route: ', () => {
  it('should return status 200', (done) => {
    request
      .get('/question')
      .expect('Content-Type', /html/)
      .expect('Location', /\/question/)
      .expect(200, done);
  });
});
