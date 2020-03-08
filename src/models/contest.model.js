const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const contestSchema = new Schema({
  week: {
    type: String,
    unique: true,
    required: [true, 'A week is required.']
  },
  contest_number: {
    type: Number,
    required: [true, 'A contest number is required.']
  },
  ranks: {
    type: [String],
    required: [true, 'A ranks array is required.']
  }
})

module.exports = mongoose.model('Contest', contestSchema);