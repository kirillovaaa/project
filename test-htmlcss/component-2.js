const getConfig = require('./default');

module.exports = getConfig('hero', [
  {
    misMatchThreshold: 3,
    viewports: ['desktop', 'tablet'],
  },
  {
    misMatchThreshold: 4,
    viewports: ['mobile'],
  },
  {
    type: 'overflow',
    misMatchThreshold: 3,
    viewports: ['desktop'],
  },
  {
    type: 'underflow',
    misMatchThreshold: 3,
    viewports: ['tablet'],
  }
]);
