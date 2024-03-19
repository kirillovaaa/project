const path = require('path');

const COMPONENT_NAME = 'accordeon';
const PROJECT_PATH = path.resolve(__dirname, '../../task-js/component-1/index.html');
const DEFAULT_CONFIG = {
  viewports: [
    {
      label: 'desktop',
      width: 1220,
      height: 1400
    }
  ],
  fileNameTemplate: '{scenarioLabel}',
  paths: {
    bitmaps_reference: `${__dirname}/reference`,
    bitmaps_test: 'backstop_data/bitmaps_test',
    engine_scripts: `${__dirname}/scripts`,
    html_report: 'backstop_data/html_report',
    json_report: 'backstop_data/json_report',
  },
  report: ['browser', 'json'],
  engine: 'puppeteer',
  engineOptions: {
    args: ['--no-sandbox'],
    gotoParameter: {
      waitUntil: ['load', 'networkidle0'],
      timeout: 20000
    },
  }
};

module.exports = (scenarios, level) => {
  const config = Object.assign({}, DEFAULT_CONFIG);

  config.scenarios = scenarios.map((scenario, i) => {
    scenario.label = `${COMPONENT_NAME} ${level}.${i + 1}`;
    scenario.url = `file://${PROJECT_PATH}${ scenario.urlParameters}`;
    scenario.misMatchThreshold = 4;
    return scenario;
  });

  return config;
};
