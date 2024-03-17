const getConfig = require('./default');

module.exports = getConfig('hero', [
  {
    labelSuffix: 'strict',
    misMatchThreshold: 1,
    viewports: ['desktop', 'tablet'],
  },
  {
    labelSuffix: 'strict',
    misMatchThreshold: 2,
    viewports: ['mobile'],
  },
  {
    labelSuffix: 'strict',
    type: 'overflow',
    misMatchThreshold: 1.5,
    viewports: ['desktop'],
  },
  {
    labelSuffix: 'strict',
    type: 'underflow',
    misMatchThreshold: 1.5,
    viewports: ['tablet'],
  }
]);
