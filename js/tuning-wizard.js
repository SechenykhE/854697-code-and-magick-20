'use strict';

(function () {
  var similarCharacters = document.querySelector('.setup-similar');

  var wizards = [];

  var onLoad = function (data) {
    wizards = data;
    updateWizards();
    similarCharacters.classList.remove('hidden');
  };

  window.connectingServer('GET', window.constants.URL_LOAD, onLoad, window.onError);

  var setup = document.querySelector('.setup');
  var setupWizard = setup.querySelector('.setup-wizard');
  var wizardCoat = setupWizard.querySelector('.wizard-coat');
  var wizardEyes = setupWizard.querySelector('.wizard-eyes');
  var setupFireball = setup.querySelector('.setup-fireball-wrap');

  var coatColor = 'rgb(101, 137, 164)';
  var eyesColor = 'black';

  window.getWizardCoatColor = function () {
    var newColor = window.util.getRandomValue(window.constants.WIZARD_COAT_COLORS);
    wizardCoat.style.fill = newColor;
    setup.querySelector('input[name="coat-color"]').value = wizardCoat.style.fill;
    wizardOnCoatChange(newColor);
  };

  window.getWizardEyesColor = function () {
    var newColor = window.util.getRandomValue(window.constants.WIZARD_EYES_COLORS);
    wizardEyes.style.fill = newColor;
    setup.querySelector('input[name="eyes-color"]').value = wizardEyes.style.fill;
    wizardOnEyesChange(newColor);
  };

  window.getFireballColor = function () {
    var fireballColor = window.util.getRandomValue(window.constants.WIZARD_FIREBALL_COLORS);
    setupFireball.setAttribute('style', 'background-color:' + fireballColor);
    setupFireball.querySelector('input').value = fireballColor;
  };

  var getRank = function (wizardElement) {
    var rank = 0;

    if (wizardElement.colorCoat === coatColor) {
      rank += 2;
    }
    if (wizardElement.colorEyes === eyesColor) {
      rank += 1;
    }

    return rank;
  };

  var namesComparator = function (left, right) {
    if (left > right) {
      return 1;
    } else if (left < right) {
      return -1;
    } else {
      return 0;
    }
  };

  var similarListElement = document.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

  var updateWizards = function () {
    var sameWizards = wizards.slice().sort(function (left, right) {
      var rankDiff = getRank(right) - getRank(left);
      if (rankDiff === 0) {
        rankDiff = namesComparator(left.name, right.name);
      }
      return rankDiff;
    });

    window.createDomBlock(window.constants.SIMILAR_CHARACTERS_COUNT, similarWizardTemplate, sameWizards, similarListElement);
  };

  var wizardOnEyesChange = window.util.debounce(function (color) {
    eyesColor = color;
    updateWizards();
  });

  var wizardOnCoatChange = window.util.debounce(function (color) {
    coatColor = color;
    updateWizards();
  });
})();
