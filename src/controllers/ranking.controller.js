const User = require('../models/user.model');
const errorHandler = require('../middlewares/error-handler');

exports.get_top_rankings = (req, res, next) => {
  const query = User.find({}).select('username rank -_id');

  query.exec((err, value) => {
    if (err) {
      console.log(err);
      return errorHandler.handleMongoError(err, req, res, next);
    }
    const ranks = [];
    // remove the empty ranks
    for (let i = 0; i < value.length; i += 1) {
      const { rank } = value[i];
      if (rank && rank.length > 0) ranks.push(value[i]);
    }

    // sort the ranks latest value
    ranks.sort((a, b) => {
      const rankA = a.rank;
      const rankB = b.rank;
      return rankB[rankB.length - 1] - rankA[rankA.length - 1];
    });

    // parse data
    const ret = [];
    for (let i = 0; i < ranks.length; i += 1) {
      if (i === 9) break; // top ten
      const { rank, username } = ranks[i];
      const rankLen = (rank.length >= 5) ? 5 : rank.length;
      const ranksCopy = rank.slice(rank.length - rankLen);
      ret.push({
        username,
        rank: ranksCopy,
      });
    }
    res.send(ret);
  });
};
