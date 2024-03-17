module.exports = async (page, scenario, vp) => {
  console.log('SCENARIO > ' + scenario.label);

  await page.waitForFunction(() => document.fonts.ready.then(() => true));
  await require('./click-hover-helper.js')(page, scenario);
};
