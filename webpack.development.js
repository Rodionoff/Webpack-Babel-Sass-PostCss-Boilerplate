const {merge} = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'eval-source-map',
  devServer: {
    contentBase: './dist',
  },
  module: {
    rules: [
      {
        test: /\.(png|svg|jpe?g|gif|ico)$/,
        loader: 'file-loader',
        options: {
          esModule: false,
          outputPath: 'images',
          name: '[name].[ext]',
        }
      },
    ]
  }
})