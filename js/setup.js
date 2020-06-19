'use strict';

window.setup = (function () {
  var fireballSize = 22;
  var wizardSpeed = 3;
  var wizardWidth = 70;

  return {
    fireballSize: fireballSize,
    getFireballSpeed: function (isWindFromLeft) {
      return isWindFromLeft ? 5 : 2;
    },
    wizardSpeed: wizardSpeed,
    wizardWidth: wizardWidth,
    getWizardHeight: function () {
      return 1.337 * wizardWidth;
    },
    getWizardX: function (gameFieldWidth) {
      return (gameFieldWidth - wizardWidth) / 2;
    },
    getWizardY: function (gameFieldHeight) {
      return gameFieldHeight / 3;
    }
  };
})();
