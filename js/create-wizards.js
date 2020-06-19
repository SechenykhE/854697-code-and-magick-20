'use strict';

(function () {
  var makeRandomWizard = function () {
    var wizardName = window.getRandomValue(window.constants.WIZARD_NAMES) + ' ' + window.getRandomValue(window.constants.WIZARD_SURNAMES);
    var wizardCoatColor = window.getRandomValue(window.constants.WIZARD_COAT_COLORS);
    var wizardEyesColor = window.getRandomValue(window.constants.WIZARD_EYES_COLORS);

    return {name: wizardName, coatColor: wizardCoatColor, eyesColor: wizardEyesColor};
  };

  var getWizardsList = function (number) {
    var wizardsList = [];

    for (var i = 0; i < number; i++) {
      wizardsList.push(makeRandomWizard());
    }
    return wizardsList;
  };

  var wizards = getWizardsList(window.constants.SIMILAR_CHARACTERS_COUNT);

  var similarListElement = document.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

  var createWizardElement = function (template, character) {
    var element = template.cloneNode(true);

    element.querySelector('.setup-similar-label').textContent = character.name;
    element.querySelector('.wizard-coat').style.fill = character.coatColor;
    element.querySelector('.wizard-eyes').style.fill = character.eyesColor;

    return element;
  };

  var createDomBlock = function (count, template, characters, blockLocation) {
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < count; i++) {
      var blockElement = createWizardElement(template, characters[i]);

      fragment.appendChild(blockElement);
    }
    blockLocation.appendChild(fragment);
  };

  createDomBlock(window.constants.SIMILAR_CHARACTERS_COUNT, similarWizardTemplate, wizards, similarListElement);

  var similarCharacters = document.querySelector('.setup-similar');
  similarCharacters.classList.remove('hidden');
})();
