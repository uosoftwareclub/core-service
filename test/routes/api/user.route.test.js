const { expect } = require('chai');
const request = require('supertest');
const app = require('../../../src/services/express');

const supertest = request(app);

describe('User Route Tests', () => {
  it('should get the user health check', (done) => {
    supertest
      .get('/v0/users/status')
      .end((err, res) => {
        expect(res.status).equal(200);
        done();
      });
  });
});
