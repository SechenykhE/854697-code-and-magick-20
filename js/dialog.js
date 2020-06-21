'use strict';

(function () {
  var setupOpen = document.querySelector('.setup-open');
  var setup = document.querySelector('.setup');
  var setupClose = setup.querySelector('.setup-close');
  var setupOpenIcon = setupOpen.querySelector('.setup-open-icon');
  var setupUserName = setup.querySelector('.setup-user-name');
  var setupWizard = setup.querySelector('.setup-wizard');
  var wizardCoat = setupWizard.querySelector('.wizard-coat');
  var wizardEyes = setupWizard.querySelector('.wizard-eyes');
  var setupFireball = setup.querySelector('.setup-fireball-wrap');

  var onPopupEscPress = function (evt) {
    if (evt.key === 'Escape' && !setupUserName.matches(':focus')) {
      evt.preventDefault();
      closePopup();
    }
  };

  var getWizardCoatColor = function () {
    wizardCoat.style.fill = window.getRandomValue(window.constants.WIZARD_COAT_COLORS);
    setup.querySelector('input[name="coat-color"]').value = wizardCoat.style.fill;
  };

  var getWizardEyesColor = function () {
    wizardEyes.style.fill = window.getRandomValue(window.constants.WIZARD_EYES_COLORS);
    setup.querySelector('input[name="eyes-color"]').value = wizardEyes.style.fill;
  };

  var getFireballColor = function () {
    var fireballColor = window.getRandomValue(window.constants.WIZARD_FIREBALL_COLORS);
    setupFireball.setAttribute('style', 'background-color:' + fireballColor);
    setupFireball.querySelector('input').value = fireballColor;
  };

  var openPopup = function () {
    setup.classList.remove('hidden');

    document.addEventListener('keydown', onPopupEscPress);
    wizardCoat.addEventListener('click', getWizardCoatColor);
    wizardEyes.addEventListener('click', getWizardEyesColor);
    setupFireball.addEventListener('click', getFireballColor);
  };

  var closePopup = function () {
    setup.classList.add('hidden');

    document.removeEventListener('keydown', onPopupEscPress);
    wizardCoat.removeEventListener('click', getWizardCoatColor);
    wizardEyes.removeEventListener('click', getWizardEyesColor);
    setupFireball.removeEventListener('click', getFireballColor);

    setup.removeAttribute('style');
  };

  setupOpen.addEventListener('click', function () {
    openPopup();
  });

  setupOpen.addEventListener('keydown', function (evt) {
    if (evt.key === 'Enter') {
      openPopup();
    }
  });

  setupOpenIcon.addEventListener('focus', function (evt) {
    if (evt.key === 'Enter') {
      openPopup();
    }
  });

  setupClose.addEventListener('click', function () {
    closePopup();
  });

  setupClose.addEventListener('keydown', function (evt) {
    if (evt.key === 'Enter') {
      closePopup();
    }
  });

  var form = setup.querySelector('.setup-wizard-form');
  form.addEventListener('submit', function (evt) {
    evt.preventDefault();
    window.backend.save(new FormData(form), function () {
      setup.classList.add('hidden');
    }, window.onError);
  });
})();
