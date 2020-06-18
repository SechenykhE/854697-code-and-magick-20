'use strict';

(function () {
  var CLOUD_WIDTH = 420;
  var CLOUD_HEIGHT = 270;
  var CLOUD_X = 100;
  var CLOUD_Y = 10;
  var PADDING = 20;
  var PADDING_LEFT = 30;
  var FONT_GAP = 16;
  var GAP = 10;
  var BAR_WIDTH = 40;
  var BAR_BETWEEN = 50;
  var BAR_HEIGHT_MAX = 150;
  var STATISTIC_MESSAGE = 'Ура вы победили!\nСписок результатов:';
  var STATISTIC_SEPARATOR = '\n';

  var renderCloud = function (ctx, x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
  };

  var createMessage = function (ctx, fontColor, fontSize, fontName, text, separator) {
    ctx.fillStyle = fontColor;
    ctx.font = fontSize + ' ' + fontName;
    ctx.textBaseline = 'hanging';

    var arrayMessages = text.split(separator);
    for (var i = 0; i < arrayMessages.length; i++) {
      ctx.fillText(arrayMessages[i], CLOUD_X + PADDING, CLOUD_Y + PADDING + (FONT_GAP + GAP) * i);
    }
  };

  var getMaxElement = function (arr) {
    var maxElement = arr[0];

    for (var i = 0; i < arr.length; i++) {
      if (arr[i] > maxElement) {
        maxElement = arr[i];
      }
    }
    return maxElement;
  };

  var createStatisticColumn = function (ctx, player, time, maxTime, index) {
    var barHeight = (BAR_HEIGHT_MAX * time) / maxTime;
    var playerY = CLOUD_Y + CLOUD_HEIGHT - GAP - FONT_GAP;
    var barY = playerY - GAP - barHeight;
    var timeY = barY - FONT_GAP;

    ctx.fillStyle = '#000';
    ctx.fillText(Math.floor(time), CLOUD_X + PADDING_LEFT + (BAR_WIDTH + BAR_BETWEEN) * index, timeY);
    ctx.fillText(player, CLOUD_X + PADDING_LEFT + (BAR_WIDTH + BAR_BETWEEN) * index, playerY);

    ctx.fillStyle = (player === 'Вы') ? 'rgba(255, 0, 0, 1)' : 'hsl(240, ' + Math.floor(Math.random() * 100) + '%, 50%)';
    ctx.fillRect(CLOUD_X + PADDING_LEFT + (BAR_WIDTH + BAR_BETWEEN) * index, barY, BAR_WIDTH, barHeight);
  };

  window.renderStatistics = function (ctx, players, times) {
    renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
    renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

    createMessage(ctx, 'rgba(0, 0, 0, 1)', '16px', 'PT Mono', STATISTIC_MESSAGE, STATISTIC_SEPARATOR);

    for (var i = 0; i < players.length; i++) {
      createStatisticColumn(ctx, players[i], times[i], getMaxElement(times), i);
    }
  };
})();
