const getConfig = require('./default');

module.exports = getConfig([
  {
    onReadyScript: 'onready.js',
    selectors: ['.guests-group'],
    keyPressSelectors: [
      {
        selector: '#adults',
        keyPress: '2'
      }
    ],
    clickSelectors: [
      '.field-room-type label:nth-of-type(1)',
      '.submit-btn'
    ]
  },
  {
    onReadyScript: 'onready.js',
    selectors: ['.guests-group'],
    keyPressSelectors: [
      {
        selector: '#adults',
        keyPress: '1'
      },
      {
        selector: '#children',
        keyPress: '1'
      }
    ],
    clickSelectors: [
      '.field-room-type label:nth-of-type(3)',
      '.submit-btn'
    ]
  },
  {
    onReadyScript: 'onready.js',
    selectors: ['.guests-group'],
    keyPressSelectors: [
      {
        selector: '#adults',
        keyPress: '1'
      },
      {
        selector: '#children',
        keyPress: '1'
      }
    ],
    clickSelectors: [
      '.field-room-type label:nth-of-type(1)',
      '.submit-btn'
    ]
  },
  {
    onReadyScript: 'onready.js',
    selectors: ['.guests-group'],
    keyPressSelectors: [
      {
        selector: '#adults',
        keyPress: '3'
      },
      {
        selector: '#children',
        keyPress: '1'
      }
    ],
    clickSelectors: [
      '.field-room-type label:nth-of-type(3)',
      '.submit-btn'
    ]
  }
], 3);
