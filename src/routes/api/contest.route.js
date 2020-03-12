const express = require('express');
const contestController = require('../../controllers/contest.controller')
const auth = require('../../middlewares/authorization')

const router = express.Router()

router.get('/status', auth, contestController.status);

module.exports = router;