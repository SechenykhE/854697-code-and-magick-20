'use strict';

(function () {
  var createWizardElement = function (template, character) {
    var element = template.cloneNode(true);

    element.querySelector('.setup-similar-label').textContent = character.name;
    element.querySelector('.wizard-coat').style.fill = character.colorCoat;
    element.querySelector('.wizard-eyes').style.fill = character.colorEyes;

    return element;
  };

  window.createDomBlock = function (count, template, characters, blockLocation) {
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < count; i++) {
      var blockElement = createWizardElement(template, characters[i]);

      fragment.appendChild(blockElement);
    }
    blockLocation.innerHTML = '';
    blockLocation.appendChild(fragment);
  };
})();
