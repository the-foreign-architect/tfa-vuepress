const path = require('path');

module.exports = ({ config, mode }) => {
  config.module.rules.push(
    {
      test: /\.p?css$/,
      loaders: ['style-loader', 'css-loader', 'postcss-loader'],
      include: path.resolve(__dirname, '../'),
    },
    {
      test: /\.(png|woff|woff2|eot|ttf|svg)$/,
      loaders: ['file-loader'],
      include: path.resolve(__dirname, '../'),
    }
  );
  return config;
};
