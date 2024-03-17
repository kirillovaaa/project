const getConfig = require('./default');

module.exports = getConfig('events', [
  {
    labelSuffix: 'strict',
    misMatchThreshold: 0.7,
    viewports: ['desktop', 'mobile'],
  },
  {
    labelSuffix: 'strict',
    misMatchThreshold: 1,
    viewports: ['tablet'],
  },
  {
    labelSuffix: 'strict',
    type: 'overflow',
    misMatchThreshold: 0.7,
    viewports: ['desktop'],
  },
  {
    labelSuffix: 'strict',
    type: 'underflow',
    misMatchThreshold: 0.7,
    viewports: ['desktop'],
  }
]);
