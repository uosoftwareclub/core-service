const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const keySchema = new Schema({
  key: {
    type: String,
    unique: true
  },
  read: {
    type: Boolean
  },
  write: {
    type: Boolean
  }
})

module.exports = mongoose.model('Key', keySchema);