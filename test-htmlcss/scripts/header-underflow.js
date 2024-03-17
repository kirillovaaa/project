module.exports = async (page, scenario, viewport) => {
  const containerSelector = scenario.selectors[0];

  console.log(`SCENARIO > ${ scenario.label}`);

  await page.waitForFunction(() => document.fonts.ready.then(() => true));
  await page.addScriptTag({ path: `${__dirname }/utils.js` });

  await page.evaluateHandle((containerSelector) => {
    const container = document.querySelector(containerSelector);

    findAndReplaceExactText(container, '8 800 725-32-32', '725-3-2');

    const list = findListByText(container, 'Гастротуры', 6);
    if (list && list.length) {
      removeNodesInList(list, 4);
    }

  }, containerSelector);
};
