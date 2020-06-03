'use strict';

var SIMILAR_CHARACTERS_COUNT = 4;

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var wizardNames = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var wizardSurnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var wizardCoatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var wizardEyesColors = ['black', 'red', 'blue', 'yellow', 'green'];

var takeRandomValue = function (values) {
  return values[Math.floor(Math.random() * values.length)];
};

var makeRandomWizard = function () {
  var wizardName = takeRandomValue(wizardNames) + ' ' + takeRandomValue(wizardSurnames);
  var wizardCoatColor = takeRandomValue(wizardCoatColors);
  var wizardEyesColor = takeRandomValue(wizardEyesColors);

  return {name: wizardName, coatColor: wizardCoatColor, eyesColor: wizardEyesColor};
};

var wizards = [];

for (var i = 0; i < SIMILAR_CHARACTERS_COUNT; i++) {
  wizards.push(makeRandomWizard());
}

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var createDomElement = function (template, character) {
  var element = template.cloneNode(true);

  element.querySelector('.setup-similar-label').textContent = character.name;
  element.querySelector('.wizard-coat').style.fill = character.coatColor;
  element.querySelector('.wizard-eyes').style.fill = character.eyesColor;

  return element;
};

var createDomBlock = function (count, template, characters, blockLocation) {
  var fragment = document.createDocumentFragment();
  for (i = 0; i < count; i++) {
    var blockElement = createDomElement(template, characters[i]);

    fragment.appendChild(blockElement);
  }
  blockLocation.appendChild(fragment);
};

createDomBlock(SIMILAR_CHARACTERS_COUNT, similarWizardTemplate, wizards, similarListElement);

var similarCharacters = document.querySelector('.setup-similar');
similarCharacters.classList.remove('hidden');
