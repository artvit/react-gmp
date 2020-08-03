const devConfig = require('./config/webpack.dev');
const prodConfig = require('./config/webpack.prod');

module.exports = (env) => {
  if (process.env.NODE_ENV.toLowerCase() === 'prod' || env.prod) {
    return prodConfig;
  }
  if (process.env.NODE_ENV.toLowerCase() === 'dev' || env.dev) {
    return devConfig;
  }
  return devConfig;
};
