const express = require('express');
const userController = require('../../controllers/user.controller');
const { userValidationRules, validate } = require('../../validation/user.validation');
const auth = require('../../middlewares/authorization')

const router = express.Router();

router.get('/status', userController.status);

router.post('/', userValidationRules(), validate, auth, userController.add_user);

module.exports = router;