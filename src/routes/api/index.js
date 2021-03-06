const express = require('express');
const userRouter = require('./user.route');
const contestRouter = require('./contest.route');
const rankingRouter = require('./ranking.route');

const router = express.Router();

router.get('/status', (req, res) => { res.send({ status: 'OK' }); }); // api status

router.use('/users', userRouter);

router.use('/contests', contestRouter);

router.use('/rankings', rankingRouter);

module.exports = router;
