const getConfig = require('./default');

module.exports = getConfig('events', [
  {
    misMatchThreshold: 3,
    viewports: ['desktop', 'mobile'],
  },
  {
    misMatchThreshold: 3,
    viewports: ['tablet'],
  },
  {
    type: 'overflow',
    misMatchThreshold: 3,
    viewports: ['desktop'],
  },
  {
    type: 'underflow',
    misMatchThreshold: 3,
    viewports: ['desktop'],
  }
]);
