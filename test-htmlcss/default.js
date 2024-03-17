const path = require('path');
const PROJECT_PATH = path.resolve(__dirname, '../task-htmlcss/index.html');
const VIEWPORTS = [
  {
    label: "desktop",
    width: 1440,
    height: 800,
  },
  {
    label: "tablet",
    width: 768,
    height: 800,
  },
  {
    label: "mobile",
    width: 375,
    height: 800,
  },
];

const DEFAULT_CONFIG = {
  viewports: VIEWPORTS,
  onReadyScript: "on-ready.js",
  resembleOutputOptions: {
    ignoreAntialiasing: true
  },
  fileNameTemplate: '{scenarioLabel}-{viewportLabel}',
  paths: {
    bitmaps_reference: `${__dirname}/reference`,
    bitmaps_test: "backstop_data/bitmaps_test",
    engine_scripts: `${__dirname}/scripts`,
    html_report: "backstop_data/html_report",
    json_report: "backstop_data/json_report",
  },
  report: ["browser", "json"],
  engine: "puppeteer",
  engineOptions: {
    args: ["--no-sandbox"],
    gotoParameters: {
      waitUntil: ["load", "networkidle0"], timeout: 20000
    },
  },
  asyncCaptureLimit: 10,
  asyncCompareLimit: 50,
  debug: false,
  debugWindow: false
};

const sectionConfig = (section, params) => {
  const { misMatchThreshold, type, viewports, labelSuffix } = params;
  const config = {
    label: `${section}${type ? `-${type}` : ''}${labelSuffix ? `-${labelSuffix}` : ''}`,
    url: `file://${PROJECT_PATH}`,
    selectors: [`[data-test="${section}"]`],
    misMatchThreshold: misMatchThreshold || 5,
    requireSameDimensions: true
  };
  if (type) {
    config.onReadyScript = `${section}-${type}.js`;
  }
  if (viewports) {
    config.viewports = VIEWPORTS.filter((viewport) => viewports.includes(viewport.label));
  }
  return config;
};

module.exports = (section, scenarios) => {
  const config = Object.assign({}, DEFAULT_CONFIG);

  config.scenarios = scenarios.map((params) => sectionConfig(section, params));

  return config;
}
