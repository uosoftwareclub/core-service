const express = require('express');
const userController = require('../../controllers/user.controller');
const { userValidationRules, validateUser } = require('../../validation/user.validation');
const { rankingValidationRules, validateRanking } = require('../../validation/ranking.validation');
const { auth } = require('../../middlewares/authorization');

const router = express.Router();

router.get('/status', userController.status);

router.get('/', auth, userController.get_all_users);

router.get('/:username', auth, userController.get_user);

router.post('/:username/ranks', rankingValidationRules(), validateRanking, auth, userController.update_ranking);

router.post('/', userValidationRules(), validateUser, auth, userController.add_user);

module.exports = router;
