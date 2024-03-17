const getConfig = require('./default');

module.exports = getConfig('header', [
  {
    misMatchThreshold: 3,
    viewports: ['desktop', 'tablet'],
  },
  {
    misMatchThreshold: 3,
    viewports: ['mobile'],
  },
  {
    type: 'overflow',
    misMatchThreshold: 3,
    viewports: ['desktop', 'mobile']
  }
]);
