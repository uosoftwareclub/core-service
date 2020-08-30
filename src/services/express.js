const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const apiRouter = require('../routes/api');
const errorHandler = require('../middlewares/error-handler');
const config = require('../config');
// const logger = require('../utils/logger');

const app = express();
const apiVersion = 'v0';

app.use(bodyParser.json());
app.use(cors());
app.use(helmet());

// if (config.env !== 'test') app.use(morgan('combined', { stream: logger.stream }));

app.use(`/${apiVersion}`, apiRouter);
app.use(errorHandler.handleNotFound);
app.use(errorHandler.handleError);

app.start = () => {
  app.listen(config.port, (err) => {
    if (err) {
      console.log(`Error : ${err}`);
      process.exit(-1);
    }

    console.log(`${config.app} is running on ${config.port}`);
  });
};

module.exports = app;
