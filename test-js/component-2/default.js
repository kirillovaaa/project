const path = require('path');

const COMPONENT_NAME = 'form-validation';
const PROJECT_PATH = path.resolve(__dirname, '../../task-js/component-2/index.html');
const DEFAULT_CONFIG = {
  viewports: [
    {
      label: 'desktop',
      width: 1440,
      height: 1300
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
    args: ['--no-sandbox']
  }
};

module.exports = (scenarios, level) => {
  const config = Object.assign({}, DEFAULT_CONFIG);

  config.scenarios = scenarios.map((scenario, i) => {
    scenario.label = `${COMPONENT_NAME} ${level}.${i + 1}`;
    scenario.url = `file://${PROJECT_PATH}`;
    scenario.misMatchThreshold = 3;
    return scenario;
  });

  return config;
};
