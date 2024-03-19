const getConfig = require('./default');

module.exports = getConfig([
  {
    onReadyScript: 'onready.js',
    selectors: ['.phones-group'],
    keyPressSelectors: [
      {
        selector: '#phone',
        keyPress: '+7 (911) 123-56-89'
      }
    ],
    clickSelectors: [
      '.submit-btn'
    ]
  },
  {
    onReadyScript: 'onready.js',
    selectors: ['.phones-group'],
    keyPressSelectors: [
      {
        selector: '#phone',
        keyPress: '8 (911) 123-56-89'
      }
    ],
    clickSelectors: [
      '.submit-btn'
    ]
  },
  {
    onReadyScript: 'onready.js',
    selectors: ['.phones-group'],
    keyPressSelectors: [
      {
        selector: '#phone',
        keyPress: '+7 495 1235689'
      }
    ],
    clickSelectors: [
      '.submit-btn'
    ]
  },
  {
    onReadyScript: 'onready.js',
    selectors: ['.phones-group'],
    keyPressSelectors: [
      {
        selector: '#phone',
        keyPress: '+7 999 123 567 890'
      }
    ],
    clickSelectors: [
      '.submit-btn'
    ]
  },
  {
    onReadyScript: 'onready.js',
    selectors: ['.phones-group'],
    keyPressSelectors: [
      {
        selector: '#phone',
        keyPress: '+7+812+123+56+89'
      }
    ],
    clickSelectors: [
      '.submit-btn'
    ]
  }
], 1);
