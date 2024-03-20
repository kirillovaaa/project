(function () {
  /* Код компонента пишите здесь */
  const form = document.querySelector("#booking-form");

  function validateField(field, isValid) {
    if (isValid) {
      field.classList.remove("field-error");
      field.classList.add("field-correct");
    } else {
      field.classList.remove("field-correct");
      field.classList.add("field-error");
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    /**
     * проверяем инпут телефона
     */
    const inputValue = form.elements["phone"].value;
    const phoneMatch =
      /\+7(?: \(\d{3}\) | \d{3} |-\d{3}-|\d{3})(-| )?\d{3}(-| )?\d{2}(-| )?\d{2}$/;
    validateField(form.elements["phone"], inputValue.match(phoneMatch));

    /**
     * проверяем инпут дат
     */
    const dateMatchA =
      /(?<year>(?:19|20)\d{2})-(?<month>0[1-9]|1[0-2])-(?<day>0[1-9]|[12][0-9]|3[01])/;
    const dateMatchB =
      /(?<day>0[1-9]|[12][0-9]|3[01])\.(?<month>0[1-9]|1[0-2])\.(?<year>(?:19|20)\d{2})/;

    const checkInValue = form.elements["checkin-date"].value;
    const checkOutValue = form.elements["checkout-date"].value;

    const checkInMatch =
      checkInValue.match(dateMatchA) || checkInValue.match(dateMatchB);
    const checkOutMatch =
      checkOutValue.match(dateMatchA) || checkOutValue.match(dateMatchB);

    if (!checkInMatch || !checkOutMatch) {
      // стиль ошибки для полей
      validateField(form.elements["checkin-date"], false);
      validateField(form.elements["checkout-date"], false);
    } else if (checkInMatch && checkOutMatch) {
      // кейс, когда оба поля точно валидные
      const checkInDate = new Date(
        checkInMatch.groups.year,
        checkInMatch.groups.month - 1,
        checkInMatch.groups.day
      );
      const checkOutDate = new Date(
        checkOutMatch.groups.year,
        checkOutMatch.groups.month - 1,
        checkOutMatch.groups.day
      );

      const daysDiff = (checkOutDate - checkInDate) / (1000 * 60 * 60 * 24);

      if (daysDiff < 4) {
        // стиль ошибки для обоих полей
        validateField(form.elements["checkin-date"], false);
        validateField(form.elements["checkout-date"], false);
      } else {
        // стиль успешных полей
        validateField(form.elements["checkin-date"], true);
        validateField(form.elements["checkout-date"], true);
      }
    }
  }

  form.addEventListener("submit", handleSubmit);
})();
