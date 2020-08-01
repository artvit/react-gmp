const HtmlWebPackPlugin = require("html-webpack-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');


module.exports = env => {
  console.log('Production:', !!env.prod);
  return {
    mode: env.prod ? 'production' : 'development',
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader'
          }
        }
      ]
    },
    plugins: [
      new HtmlWebPackPlugin({
        template: './src/index.html',
        filename: './index.html'
      })
    ],
    optimization: {
      minimizer: [new UglifyJsPlugin({ cache: true, parallel: true })]
    }
  };
};
