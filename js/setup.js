'use strict';

var SIMILAR_CHARACTERS_COUNT = 4;
var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var getRandomValue = function (values) {
  return values[Math.floor(Math.random() * values.length)];
};

var makeRandomWizard = function () {
  var wizardName = getRandomValue(WIZARD_NAMES) + ' ' + getRandomValue(WIZARD_SURNAMES);
  var wizardCoatColor = getRandomValue(WIZARD_COAT_COLORS);
  var wizardEyesColor = getRandomValue(WIZARD_EYES_COLORS);

  return {name: wizardName, coatColor: wizardCoatColor, eyesColor: wizardEyesColor};
};

var getWizardsList = function (number) {
  var wizardsList = [];

  for (var i = 0; i < number; i++) {
    wizardsList.push(makeRandomWizard());
  }
  return wizardsList;
};

var wizards = getWizardsList(SIMILAR_CHARACTERS_COUNT);

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

createDomBlock(SIMILAR_CHARACTERS_COUNT, similarWizardTemplate, wizards, similarListElement);

var similarCharacters = document.querySelector('.setup-similar');
similarCharacters.classList.remove('hidden');
