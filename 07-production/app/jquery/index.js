require('jquery-ui/core');
require('jquery-ui/widget');
require('jquery-ui/mouse');
require('jquery-ui/draggable');

require('./style.css');

$(function () {
  $('#draggable').draggable();
});
