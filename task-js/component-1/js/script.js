(function () {
  /**
   * Служебная функция для считывания параметров из адресной строки
   * и определения конфигурации компонента
   * @param  {string} name - имя параметра
   * @return {number} - значение параметра в адресной строке
   */
  const getUrlValue = (name) => {
    const urlParams = new URLSearchParams(window.location.search);
    return parseInt(urlParams.get(name), 10);
  };

  /**
   * Настройки аккордеона, параметры получаются из командной строки
   *
   * tabs_limit - number, максимальное количество одновременно открытых элементов,
   * по умолчанию 0 - не ограничено
   *
   * Для тестирования работы своего скрипта при разных значениях tabs_limit
   * временно переопределяйте значение переменной, хранящей этот параметр.
   * Либо можете дописыват GET-параметр с нужным значением в конец адресной строки,
   * например: ?tabs_limit=1
   */
  const settings = {
    tabsLimit: getUrlValue("tabs_limit") || 0,
  };

  /* Код компонента пишите ниже */

  let selectedOrder = [];

  const list = document.getElementsByClassName("accordeon")[0];

  /**
   * Обновление классов в списке
   */
  function updateList() {
    const hiddenItems = [];
    for (let i = 0; i < list.children.length; i++) {
      if (!selectedOrder.includes(list.children[i].children[0])) {
        hiddenItems.push(list.children[i].children[0]);
      }
    }

    hiddenItems.forEach((item) => {
      item.parentElement.classList.remove("accordeon-item--open");
    });

    selectedOrder.forEach((item) => {
      item.parentElement.classList.add("accordeon-item--open");
    });
  }

  /**
   * Обработчик нажатия
   */
  function handleClick(e) {
    if (selectedOrder.find((item) => item === e.srcElement)) {
      // (A) удаление
      selectedOrder = selectedOrder.filter((item) => item !== e.srcElement);
    } else {
      // (B) добавление
      if (
        settings.tabsLimit > 0 &&
        selectedOrder.length === settings.tabsLimit
      ) {
        // лимит достигнут
        selectedOrder = selectedOrder.slice(1);
      }
      selectedOrder.push(e.srcElement);
    }
    // обновить лист по итогу
    updateList();
  }

  /**
   * подписать айтемы на нажатие
   */
  for (let i = 0; i < list.children.length; i++) {
    list.children[i].children[0].addEventListener("click", handleClick);
  }
})();
