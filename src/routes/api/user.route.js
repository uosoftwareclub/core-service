const express = require('express');
const userController = require('../../controllers/user.controller')

const router = express.Router()

router.get('/status', userController.status);

module.exports = router;