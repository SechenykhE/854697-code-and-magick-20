'use strict';

var SIMILAR_CHARACTERS_COUNT = 4;
var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var WIZARD_FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var MIN_NAME_LENGTH = 2;
var MAX_NAME_LENGTH = 25;

var setup = document.querySelector('.setup');
setup.classList.remove('hidden');

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

var setupOpen = document.querySelector('.setup-open');
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
  wizardCoat.style.fill = getRandomValue(WIZARD_COAT_COLORS);
  setup.querySelector('input[name="coat-color"]').value = wizardCoat.style.fill;
};

var getWizardEyesColor = function () {
  wizardEyes.style.fill = getRandomValue(WIZARD_EYES_COLORS);
  setup.querySelector('input[name="eyes-color"]').value = wizardEyes.style.fill;
};

var getFireballColor = function () {
  var fireballColor = getRandomValue(WIZARD_FIREBALL_COLORS);
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

var userNameInput = document.querySelector('.setup-user-name');
userNameInput.addEventListener('invalid', function () {
  if (userNameInput.validity.tooShort) {
    userNameInput.setCustomValidity('Имя должно состоять минимум из 2-х символов');
  } else if (userNameInput.validity.tooLong) {
    userNameInput.setCustomValidity('Имя не должно превышать 25-ти символов');
  } else if (userNameInput.validity.valueMissing) {
    userNameInput.setCustomValidity('Обязательное поле');
  } else {
    userNameInput.setCustomValidity('');
  }
});

userNameInput.addEventListener('input', function () {
  var valueLength = userNameInput.value.length;

  if (valueLength < MIN_NAME_LENGTH) {
    userNameInput.setCustomValidity('Ещё ' + (MIN_NAME_LENGTH - valueLength) + ' симв.');
  } else if (valueLength > MAX_NAME_LENGTH) {
    userNameInput.setCustomValidity('Удалите лишние ' + (valueLength - MIN_NAME_LENGTH) + ' симв.');
  } else {
    userNameInput.setCustomValidity('');
  }
});
