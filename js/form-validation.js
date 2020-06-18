'use strict';

(function () {
  var formsTitle = document.querySelector('.setup-user-name');
  formsTitle.addEventListener('invalid', function () {
    if (formsTitle.validity.tooShort) {
      formsTitle.setCustomValidity('Имя должно состоять минимум из 2-х символов');
    } else if (formsTitle.validity.tooLong) {
      formsTitle.setCustomValidity('Имя не должно превышать 25-ти символов');
    } else if (formsTitle.validity.valueMissing) {
      formsTitle.setCustomValidity('Обязательное поле');
    } else {
      formsTitle.setCustomValidity('');
    }
  });

  formsTitle.addEventListener('input', function () {
    var valueLength = formsTitle.value.length;

    if (valueLength < window.constants.MIN_NAME_LENGTH) {
      formsTitle.setCustomValidity('Ещё ' + (window.constants.MIN_NAME_LENGTH - valueLength) + ' симв.');
    } else if (valueLength > window.constants.MAX_NAME_LENGTH) {
      formsTitle.setCustomValidity('Удалите лишние ' + (valueLength - window.constants.MIN_NAME_LENGTH) + ' симв.');
    } else {
      formsTitle.setCustomValidity('');
    }
  });
})();
