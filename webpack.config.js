/* eslint-disable no-undef */
// eslint-disable-next-line import/no-extraneous-dependencies
const path = require('path');

module.exports = {
  // ...
  resolve: {
    alias: {
      scss: path.resolve(__dirname, 'src/scss/'),
      screens: path.resolve(__dirname, 'src/screens/'),
      constants: path.resolve(__dirname, 'src/constants/'),
      assets: path.resolve(__dirname, 'src/assets/'),
    },
  },
};
