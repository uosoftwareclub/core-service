'use strict'
const express = require('express')
const router = express.Router()
const userRouter = require('./user.route');
const contestRouter = require('./contest.route');

router.get('/status', (req, res) => { res.send({status: 'OK'}) }) // api status

router.use('/users', userRouter)

router.use('/contests', contestRouter);

module.exports = router
