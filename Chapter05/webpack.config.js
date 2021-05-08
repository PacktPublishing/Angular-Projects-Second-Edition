const path = require('path');
const src = path.join(process.cwd(), 'src', 'electron');

module.exports = {
  entry: path.join(src, 'main.ts'),
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        options: {
          configFile: path.join(src, 'tsconfig.json')
        }
      }
    ]
  },
  target: 'electron-main'
};
