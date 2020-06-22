'use strict';

(function () {
  var similarListElement = document.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

  var createWizardElement = function (template, character) {
    var element = template.cloneNode(true);

    element.querySelector('.setup-similar-label').textContent = character.name;
    element.querySelector('.wizard-coat').style.fill = character.colorCoat;
    element.querySelector('.wizard-eyes').style.fill = character.colorEyes;

    return element;
  };

  var createDomBlock = function (count, template, characters, blockLocation) {
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < count; i++) {
      var blockElement = createWizardElement(template, window.getRandomValue(characters));

      fragment.appendChild(blockElement);
    }
    blockLocation.appendChild(fragment);
  };

  var similarCharacters = document.querySelector('.setup-similar');

  var onLoad = function (wizards) {
    createDomBlock(window.constants.SIMILAR_CHARACTERS_COUNT, similarWizardTemplate, wizards, similarListElement);
    similarCharacters.classList.remove('hidden');
  };

  window.connectingServer('GET', window.constants.URL_LOAD, null, onLoad, window.onError);
})();
