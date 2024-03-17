module.exports = async (page, scenario, viewport) => {
  const containerSelector = scenario.selectors[0];

  console.log('SCENARIO > ' + scenario.label);

  await page.waitForFunction(() => document.fonts.ready.then(() => true));
  await page.addScriptTag({ path: __dirname + "/utils.js" });

  await page.evaluateHandle((containerSelector) => {
    const container = document.querySelector(containerSelector);

    findAndReplaceIncludingText(container, 'защищены', 'Яхтклуб ©2020 Все права защищены и надёжно охраняются');

    const links = findListByText(container, "Новости", 5);
    if (links) {
      cloneNodesInList(links, [4, 3]);
    }

    const lists = findListByText(container, "Услуги", 3);
    if (lists) {
      cloneNodesInList(lists, [2]);
    }

  }, containerSelector);
};
