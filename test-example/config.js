
const config = require('./header');
const main = require('./main');
const footer = require('./footer');

config.scenarios = [
  ...config.scenarios, // header
  ...main.scenarios,
  ...footer.scenarios,
]

module.exports = config;
