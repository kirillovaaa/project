module.exports = async (page, scenario, viewport) => {
  const containerSelector = scenario.selectors[0];

  console.log(`SCENARIO > ${ scenario.label}`);

  await page.waitForFunction(() => document.fonts.ready.then(() => true));
  await page.addScriptTag({ path: `${__dirname }/utils.js` });

  await page.evaluateHandle((containerSelector) => {
    const container = document.querySelector(containerSelector);

    findAndReplaceIncludingText(container, 'Гастрономическое', 'Гастрономическое путешествие вокруг да около Кавказа');
    findAndReplaceIncludingText(container, 'мастерству', 'Путь к мастерству в приготовлении блюд Алтая и Южного Урала во время солнцестояния');
    findAndReplaceIncludingText(container, 'морских', 'От горных до морских');

  }, containerSelector);
};

