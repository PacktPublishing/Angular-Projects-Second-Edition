const path = require('path');
const baseConfig = require('./webpack.config');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  ...baseConfig,
  output: {
    path: path.join(process.cwd(), 'dist', 'my-editor'),
    filename: 'main.js'
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          context: path.join(process.cwd(), 'src', 'electron'),
          from: 'package.json'
        }
      ]
    })
  ]
};
