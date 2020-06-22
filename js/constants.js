'use strict';

window.constants = (function () {
  var SIMILAR_CHARACTERS_COUNT = 4;
  var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  var WIZARD_COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var WIZARD_EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
  var WIZARD_FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
  var MIN_NAME_LENGTH = 2;
  var MAX_NAME_LENGTH = 25;

  var URL_LOAD = 'https://javascript.pages.academy/code-and-magick/data';
  var URL_SAVE = 'https://javascript.pages.academy/code-and-magick';
  var TIMEOUT_IN_MS = 10000;

  var NODE = {
    general: 'z-index: 100; margin: 0 auto; text-align: center; background-color: white;',
    position: 'absolute',
    left: '0',
    right: '0',
    top: '50%',
    width: '50%',
    fontSize: '30px',
    color: 'red'
  };

  return {
    SIMILAR_CHARACTERS_COUNT: SIMILAR_CHARACTERS_COUNT,
    WIZARD_NAMES: WIZARD_NAMES,
    WIZARD_SURNAMES: WIZARD_SURNAMES,
    WIZARD_COAT_COLORS: WIZARD_COAT_COLORS,
    WIZARD_EYES_COLORS: WIZARD_EYES_COLORS,
    WIZARD_FIREBALL_COLORS: WIZARD_FIREBALL_COLORS,
    MIN_NAME_LENGTH: MIN_NAME_LENGTH,
    MAX_NAME_LENGTH: MAX_NAME_LENGTH,
    URL_LOAD: URL_LOAD,
    URL_SAVE: URL_SAVE,
    TIMEOUT_IN_MS: TIMEOUT_IN_MS,
    NODE: NODE
  };
})();
