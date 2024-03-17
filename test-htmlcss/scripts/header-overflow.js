module.exports = async (page, scenario, viewport) => {
  const containerSelector = scenario.selectors[0];

  console.log(`SCENARIO > ${ scenario.label}`);

  await page.waitForFunction(() => document.fonts.ready.then(() => true));
  await page.addScriptTag({ path: `${__dirname }/utils.js` });

  await page.evaluateHandle((containerSelector) => {
    const container = document.querySelector(containerSelector);

    findAndReplaceExactText(container, '8 800 725-32-32', '8 800 725-32-32 звоните в любое время мы на связи 24 часа 7 дней в неделю кроме выходных и праздников');

    const list = findListByText(container, 'Гастротуры', 6);
    if (list && list.length) {
      cloneNodesInList(list, [5, 4, 3]);
    }

  }, containerSelector);
};
