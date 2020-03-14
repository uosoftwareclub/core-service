
process.env.NODE_ENV = 'test'

const chai = require('chai')
const chaiHttp = require('chai-http')
const { app } = require('../src/index')

const { expect } = chai

chai.use(chaiHttp)

describe('Application', () => {
  it('It should return HTTP OK for api call', (done) => {
    chai
      .request(app)
      .get('/v0/status')
      .end((_err, res) => {
        expect(res.status).to.equal(200)
        done()
      })
  })

  it('It should return HTTP NOTFOUND', (done) => {
    chai
      .request(app)
      .get('/something/not/exists')
      .end((_err, res) => {
        expect(res.status).to.equal(404)
        done()
      })
  })
})
