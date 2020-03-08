
process.env.NODE_ENV = 'test'

const chai = require('chai')
const chaiHttp = require('chai-http')
const app = require('../src/index').app

chai.use(chaiHttp)

describe('Application', () => {
  it('It should return HTTP OK for api call', (done) => {
    chai
      .request(app)
      .get('/api/status')
      .end((_err, res) => {
        res.should.have.status(200)
        done()
      })
  })

  it('It should return HTTP NOTFOUND', (done) => {
    chai
      .request(app)
      .get('/something/not/exists')
      .end((_err, res) => {
        res.should.have.status(404)
        done()
      })
  })
})
