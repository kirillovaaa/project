const getConfig = require('./default');

module.exports = getConfig([
  {
    onReadyScript: 'onready.js',
    selectors: ['.dates-group'],
    keyPressSelectors: [
      {
        selector: '#checkin-date',
        keyPress: '2024-02-18'
      },
      {
        selector: '#checkout-date',
        keyPress: '2024-02-20'
      }
    ],
    clickSelectors: [
      '.submit-btn'
    ]
  },
  {
    onReadyScript: 'onready.js',
    selectors: ['.dates-group'],
    keyPressSelectors: [
      {
        selector: '#checkin-date',
        keyPress: '2024-02-18'
      },
      {
        selector: '#checkout-date',
        keyPress: '2024-02-22'
      }
    ],
    clickSelectors: [
      '.submit-btn'
    ]
  },
  {
    onReadyScript: 'onready.js',
    selectors: ['.dates-group'],
    keyPressSelectors: [
      {
        selector: '#checkin-date',
        keyPress: '18.02.2024'
      },
      {
        selector: '#checkout-date',
        keyPress: '14.02.2024'
      }
    ],
    clickSelectors: [
      '.submit-btn'
    ]
  },
  {
    onReadyScript: 'onready.js',
    selectors: ['.dates-group'],
    keyPressSelectors: [
      {
        selector: '#checkin-date',
        keyPress: '18.02.2024'
      },
      {
        selector: '#checkout-date',
        keyPress: '26.02.2024'
      }
    ],
    clickSelectors: [
      '.submit-btn'
    ]
  },
  {
    onReadyScript: 'onready.js',
    selectors: ['.dates-group'],
    keyPressSelectors: [
      {
        selector: '#checkin-date',
        keyPress: '31.02.2024'
      },
      {
        selector: '#checkout-date',
        keyPress: '02.03.2024'
      }
    ],
    clickSelectors: [
      '.submit-btn'
    ]
  },
  {
    onReadyScript: 'onready.js',
    selectors: ['.dates-group'],
    keyPressSelectors: [
      {
        selector: '#checkin-date',
        keyPress: '27.02.2024'
      },
      {
        selector: '#checkout-date',
        keyPress: '02.03.2024'
      }
    ],
    clickSelectors: [
      '.submit-btn'
    ]
  }
], 2);
