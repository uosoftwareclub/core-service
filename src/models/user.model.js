const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  profile_picture: {
    type: String,
    // TODO: Set default avatar picture
  },
  title: {
    type: String,
    default: 'New Member'
    // TODO: Enumify
  },
  badges: {
    type: String,
    enum: ['Founding', 'Exec', 'Good', 'General'], // TODO: Figure out badges and enumify
    default: 'General'
  },
  firstname: {
    type: String,
    required: [true, 'You have to add a first name.']
  },
  lastname: {
    type: String,
    required: [true, 'You have to add a last name.']
  },
  username: {
    type: String,
    required: [true, 'You have to add a username'],
    unique: true
  },
  description: {
    type: String
  },
  rank: [{
    contest_number: {
      type: Number,
      required: [true, 'Contest Number is required for a rank.']
    },
    placing: {
      type: Number,
      required: [true, 'Placing is required for a rank']
    },
  }]
}, {
  timestamps: true
})

module.exports = mongoose.model('User', userSchema);