require('bootstrap/dist/css/bootstrap.css');
require('bootstrap/dist/js/bootstrap');

$('#myModal').modal({
  show: false
});

$('#save-button').click(function () {
  alert('Saved');
  $('#myModal').modal('hide');
});
