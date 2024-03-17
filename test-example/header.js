const getConfig = require('./default');

module.exports = getConfig('header', [
  {
    misMatchThreshold: 5,
  }
]);
