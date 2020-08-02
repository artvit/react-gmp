const HtmlWebPackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = (env) => ({
  mode: env.prod ? 'production' : 'development',
  devtool: env.dev ? 'eval-cheap-module-source-map' : undefined,
  resolve: {
    extensions: ['.js', '.jsx']
  },
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
});
