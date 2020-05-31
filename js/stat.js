'use strict';

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

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
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

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = 'rgba(0, 0, 0, 1)';
  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура вы победили!', CLOUD_X + PADDING, CLOUD_Y + PADDING);
  ctx.fillText('Список результатов:', CLOUD_X + PADDING, CLOUD_Y + PADDING + FONT_GAP + GAP);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    var barHeight = (BAR_HEIGHT_MAX * times[i]) / maxTime;

    ctx.fillStyle = '#000';
    ctx.fillText(Math.floor(times[i]), CLOUD_X + PADDING_LEFT + (BAR_WIDTH + BAR_BETWEEN) * i, CLOUD_Y + CLOUD_HEIGHT - FONT_GAP * 2 - GAP * 2 - barHeight);
    ctx.fillText(players[i], CLOUD_X + PADDING_LEFT + (BAR_WIDTH + BAR_BETWEEN) * i, CLOUD_Y + CLOUD_HEIGHT - GAP - FONT_GAP);

    ctx.fillStyle = (players[i] === 'Вы') ? 'rgba(255, 0, 0, 1)' : 'hsl(240, ' + Math.floor(Math.random() * 100) + '%, 50%)';
    ctx.fillRect(CLOUD_X + PADDING_LEFT + (BAR_WIDTH + BAR_BETWEEN) * i, CLOUD_Y + CLOUD_HEIGHT - FONT_GAP - GAP * 2 - barHeight, BAR_WIDTH, barHeight);
  }
};

