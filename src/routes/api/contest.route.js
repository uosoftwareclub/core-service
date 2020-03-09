const express = require('express');
const router = express.Router()
const contestController = require('../../controllers/contest.controller')
const auth = require('../../middlewares/authorization')

router.get('/status', auth, contestController.status);

module.exports = router;