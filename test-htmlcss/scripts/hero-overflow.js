module.exports = async (page, scenario, viewport) => {
  const containerSelector = scenario.selectors[0];

  console.log(`SCENARIO > ${ scenario.label}`);

  await page.waitForFunction(() => document.fonts.ready.then(() => true));
  await page.addScriptTag({ path: `${__dirname }/utils.js` });

  await page.evaluateHandle((containerSelector) => {
    const container = document.querySelector(containerSelector);

    findAndReplaceIncludingText(container, 'Исследуйте вкусы', 'Исследуйте вкусы');

    findAndReplaceIncludingText(container, 'богатство кавказской кухни', 'Кавказская кухня — это уникальное сочетание вкусов и ароматов, которое отражает богатую историю и культуру региона. Она отличается использованием свежих, натуральных продуктов, а также разнообразием специй и пряностей.');

    findCloneAndReplaceIncludingText(container, 'Кавказская кухня', 'Участие в кулинарном мастер-классе под руководством опытных шеф-поваров — это прекрасная возможность познакомиться с кавказской кухней поближе. Вы узнаете о секретах приготовления традиционных блюд, а также сможете попробовать их в исполнении настоящих мастеров.');

  }, containerSelector);
};
