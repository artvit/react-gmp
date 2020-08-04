const devConfig = require('./config/webpack.dev');
const prodConfig = require('./config/webpack.prod');

const nodeEnv = process.env.NODE_ENV && process.env.NODE_ENV.toLowerCase();
const config = nodeEnv === 'prod' ? prodConfig : devConfig;

module.exports = config;
