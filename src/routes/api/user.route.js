const express = require('express');
const router = express.Router()
const userController = require('../../controllers/user.controller')

router.get('/status', userController.status);

module.exports = router;