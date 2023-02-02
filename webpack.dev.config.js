const path = require('path');

module.exports = {
  mode: 'development',
  devServer: {
    static: {
      directory: path.join(__dirname, '/public'),
    },
    compress: true,
    hot: true,
    port: 5000,
  },
};
