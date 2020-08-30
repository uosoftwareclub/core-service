const express = require('express');
const rankingController = require('../../controllers/ranking.controller');
const { auth } = require('../../middlewares/authorization');

const router = express.Router();

router.get('/featured', auth, rankingController.get_top_rankings);

module.exports = router;
