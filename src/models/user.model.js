const mongoose = require('mongoose');
const titles = require('../enums/enums.titles');
const badges = require('../enums/enums.badges');

const { Schema } = mongoose;

const userSchema = new Schema({
  profile_picture: {
    type: String,
    // TODO: Set default avatar picture
  },
  title: {
    type: [String],
    default: ['New Member'],
    enum: titles,
  },
  badges: {
    type: [String],
    enum: badges,
    default: ['General'],
  },
  firstname: {
    type: String,
    required: [true, 'You have to add a first name.'],
  },
  lastname: {
    type: String,
    required: [true, 'You have to add a last name.'],
  },
  username: {
    type: String,
    required: [true, 'You have to add a username'],
    unique: true,
  },
  graduation: {
    type: Object,
    required: [true, 'You have to add a graduation date.'],
    year: {
      type: Number,
      required: [true, 'Year is needed for graduation.'],
    },
    month: {
      type: String,
      required: [true, 'Month is needed for graduation.'],
    },
  },
  description: {
    type: String,
  },
  rank: [{
    contest_number: {
      type: Number,
      required: [true, 'Contest Number is required for a rank.'],
    },
    placing: {
      type: Number,
      required: [true, 'Placing is required for a rank'],
    },
  }],
}, {
  timestamps: true,
});

module.exports = mongoose.model('User', userSchema);
