const mongoose = require('./services/mongoose')
const app = require('./services/express')

// start app and connect to database
if (app && mongoose) {
  app.start()
  mongoose.connect()
}

module.exports = app
