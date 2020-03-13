const User = require('../models/user.model')
const errorHandler = require('../middlewares/error-handler')

exports.status = async (req, res, next) => res.json({ message: 'User endpoint is working.' })

exports.add_user = async (req, res, next) => {
  const { title, username, firstname, lastname, graduation } = req.body;
  const newUser = {
    profile_picture:'update.to.s3.default',
    title: [title],
    badges: ['General'],
    firstname,
    lastname,
    username,
    graduation,
    description: '',
  }

  User.create(newUser, (err, user) => {
    if (err) {
      console.log(err)
      return errorHandler.handleMongoError(err, req, res, next)
    }
    res.send(user)
  })

}