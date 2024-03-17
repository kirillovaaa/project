
const config = require('./component-1');
const headerstrict = require('./component-1-strict');
const hero = require('./component-2');
const herostrict = require('./component-2-strict');
const events = require('./component-3');
const eventsstrict = require('./component-3-strict');

config.scenarios = [
  ...config.scenarios, // header
  ...headerstrict.scenarios,
  ...hero.scenarios,
  ...herostrict.scenarios,
  ...events.scenarios,
  ...eventsstrict.scenarios,
]

module.exports = config;
