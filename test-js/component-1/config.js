
const level1 = require('./level-1');
const level2 = require('./level-2');
const level3 = require('./level-3');

level1.scenarios = [
  ...level1.scenarios,
  ...level2.scenarios,
  ...level3.scenarios,
];

module.exports = level1;
