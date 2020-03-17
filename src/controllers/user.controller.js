const User = require('../models/user.model');
const errorHandler = require('../middlewares/error-handler');
const config = require('../config');

exports.status = async (req, res, next) => res.json({ message: 'User endpoint is working.' });

exports.add_user = async (req, res, next) => {
  const {
    title, username, firstname, lastname, graduation,
  } = req.body;
  const newUser = {
    profile_picture: config.default_profile_pic_uri,
    title: [title],
    badges: ['General'],
    firstname,
    lastname,
    username,
    graduation,
    description: '',
  };

  User.create(newUser, (err, user) => {
    if (err) {
      return errorHandler.handleMongoError(err, req, res, next);
    }
    res.status(201);
    res.send(user);
  });
};

exports.get_all_users = async (req, res, next) => {
  User.find({}, (err, users) => {
    if (err) {
      return errorHandler.handleMongoError(err, req, res, next);
    }
    if (!users) {
      res.status(400).send('DB is empty.');
    } else {
      res.send(users);
    }
  });
};

exports.get_user = async (req, res, next) => {
  const { username } = req.params;
  User.findOne({ username }, (err, user) => {
    if (err) {
      console.log(err);
      return errorHandler.handleMongoError(err, req, res, next);
    }
    if (!user) {
      res.status(400).send('User is not in the database.');
    } else {
      res.send(user);
    }
  });
};
