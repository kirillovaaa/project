const getConfig = require('./default');

module.exports = getConfig('main', [
  {
    misMatchThreshold: 5,
  }
]);
