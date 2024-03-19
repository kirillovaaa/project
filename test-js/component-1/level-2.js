const getConfig = require('./default');

module.exports = getConfig([
  {
    onReadyScript: 'onready.js',
    urlParameters: '?tabs_limit=1',
    clickSelectors: [
      '.accordeon-item:nth-child(1) .accordeon-item-title',
      '.accordeon-item:nth-child(2) .accordeon-item-title',
      '.accordeon-item:nth-child(3) .accordeon-item-title'
    ]
  },
  {
    onReadyScript: 'onready.js',
    urlParameters: '?tabs_limit=1',
    clickSelectors: [
      '.accordeon-item:nth-child(2) .accordeon-item-title',
      '.accordeon-item:nth-child(3) .accordeon-item-title',
      '.accordeon-item:nth-child(5) .accordeon-item-title',
      '.accordeon-item:nth-child(3) .accordeon-item-title'
    ]
  },
  {
    onReadyScript: 'onready.js',
    urlParameters: '?tabs_limit=1',
    clickSelectors: [
      '.accordeon-item:nth-child(6) .accordeon-item-title',
      '.accordeon-item:nth-child(5) .accordeon-item-title',
      '.accordeon-item:nth-child(6) .accordeon-item-title',
      '.accordeon-item:nth-child(6) .accordeon-item-title'
    ]
  }
], 2);
