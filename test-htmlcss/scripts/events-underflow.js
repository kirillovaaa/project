module.exports = async (page, scenario, viewport) => {
  const containerSelector = scenario.selectors[0];

  console.log(`SCENARIO > ${ scenario.label}`);

  await page.waitForFunction(() => document.fonts.ready.then(() => true));
  await page.addScriptTag({ path: `${__dirname }/utils.js` });

  await page.evaluateHandle((containerSelector) => {
    const container = document.querySelector(containerSelector);

    findAndReplaceIncludingText(container, 'Гастрономическое', 'Путешествие вокруг');
    findAndReplaceIncludingText(container, 'мастерству', 'Путь к мастерству');
    findAndReplaceIncludingText(container, 'морских', 'От горных до морских');

  }, containerSelector);
};
