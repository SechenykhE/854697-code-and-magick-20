'use strict';

window.util = (function () {
  return {
    getRandomValue: function (values) {
      return values[Math.floor(Math.random() * values.length)];
    },
    debounce: function (cb) {
      var lastTimeout = null;

      return function () {
        var parameters = arguments;
        if (lastTimeout) {
          window.clearTimeout(lastTimeout);
        }
        lastTimeout = window.setTimeout(function () {
          cb.apply(null, parameters);
        }, window.constants.DEBOUNCE_INTERVAL);
      };
    }
  };
})();
