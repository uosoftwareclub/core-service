const express = require('express');
const router = express.Router()
const contestController = require('../../controllers/contest.controller')

router.get('/status', contestController.status);

module.exports = router;