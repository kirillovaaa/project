
/**
 * Возвращает функцию для фильтрации списка элементов по точному совпадению текста
 */
const exactTextFilter = (text) => (el) => el.textContent.trim() === text.trim();

/**
 * Возвращает функцию для фильтрации списка элементов по вхождению текста
 */
const containsTextFilter = (text) => (el) => el.textContent.trim().includes(text.trim());

/**
 * Находит ноду, включающие текст
 */
const findNodeByText = (container, text, exact) => {
  return Array.from(container.querySelectorAll("*"))
    .filter(exact ? exactTextFilter(text) : containsTextFilter(text))
    .pop();
}

/**
 * Находит элемент в блоке по точному совпадению текста и заменяет его текст
 */
const findAndReplaceExactText = (container, text, replaceText) => {
  const node = findNodeByText(container, text, true);
  if (node) {
    node.textContent = replaceText;
  } else {
    throw new Error(`Не удалось найти элемент содержащий текст «${text}» для тестирования переполнения`)
  }
}

/**
 * Находит элемент в блоке по включению текста и заменяет его текст
 */
const findAndReplaceIncludingText = (container, text, replaceText) => {
  const node = findNodeByText(container, text, false);
  if (node) {
    node.textContent = replaceText;
  } else {
    throw new Error(`Не удалось найти элемент содержащий текст «${text}» для тестирования переполнения`)
  }
}

/**
 * Находит элемент в блоке по включению текста, клонирует его, заменяет в клоне текст и вставляет за исходным элементом
 */
const findCloneAndReplaceIncludingText = (container, text, replaceText) => {
  const node = findNodeByText(container, text, false);
  if (node) {
    const nodeClone = node.cloneNode(true);
    nodeClone.textContent = replaceText;
    node.after(nodeClone);
  } else {
    throw new Error(`Не удалось найти элемент содержащий текст «${text}» для тестирования переполнения`)
  }
}

const findParentCountNodes = (container, node, count) => {
  const parent = node.parentNode;
  if (!parent) {
    return null;
  }
  if (parent === container || parent.tagName === 'BODY') {
    return null;
  }
  // смотрим не только на количество детей но еще и на совпадающий тег
  const chilren = Array.from(parent.children).filter((el) => el.tagName === node.tagName);
  if (chilren.length === count) {
    return parent;
  }
  return findParentCountNodes(container, parent, count);
};

/**
 * Находит список одинаковых элементов на одном уровне по вхождению текста в одном из них
 */
const findListByText = (container, text, count) => {
  const node = findNodeByText(container, text, true);
  if (!node) {
    throw new Error(`Не удалось найти список элементов для тестирования переполнения`);
  }
  const parent = findParentCountNodes(container, node, count);
  if (!parent) {
    throw new Error(`Не удалось найти список элементов для тестирования переполнения`);
  }
  return parent.children;
}

/**
 * Находит список одинаковых элементов на одном уровне по тегу
 */
const findListByTag = (container, tag, count) => {
  const nodes = container.querySelectorAll(tag);

  for (const node of nodes) {
    const parent = findParentCountNodes(container, node, count);
    if (parent) {
      return parent.children;
    }
  }

  return null;
};

/**
 * Клонирует элементы в списке по индексам
 */
const cloneNodesInList = (nodes, cloneIndexes) => {
  for (i of cloneIndexes) {
    if (nodes[i]) {
      nodes[i].after(nodes[i].cloneNode(true));
    }
  }
}

/**
 * Удаляет элементы из списка
 */
const removeNodesInList = (nodes, removeCount) => {
  const parent = nodes[0].parentNode;

  for (i = 0; i < removeCount; i++) {
    parent.removeChild(parent.lastElementChild);
  }
}

module.exports = {
  findAndReplaceExactText,
  findAndReplaceIncludingText,
  findCloneAndReplaceIncludingText,
  findListByText,
  findListByTag,
  cloneNodesInList,
  removeNodesInList
};
