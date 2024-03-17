const getConfig = require('./default');

module.exports = getConfig('header', [
  {
    labelSuffix: 'strict',
    misMatchThreshold: 0.7,
    viewports: ['desktop', 'tablet'],
  },
  {
    labelSuffix: 'strict',
    misMatchThreshold: 0.3,
    viewports: ['mobile'],
  },
  {
    labelSuffix: 'strict',
    type: 'overflow',
    misMatchThreshold: 1,
    viewports: ['desktop', 'mobile']
  }
]);
