module.exports = async (page, scenario) => {
  console.log(`SCENARIO > ${ scenario.label}`);

  await page.waitForFunction(() => document.fonts.ready.then(() => true));
  await require('./click-and-hover-helper.js')(page, scenario);
};
