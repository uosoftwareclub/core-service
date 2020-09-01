// lambda.js
const awsServerlessExpress = require('aws-serverless-express');
const app = require('./src');

const server = awsServerlessExpress.createServer(app);

exports.handler = (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false;
  awsServerlessExpress.proxy(server, event, context);
};
