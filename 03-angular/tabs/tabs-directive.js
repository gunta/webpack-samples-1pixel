module.exports = function () {
  return {
    restrict: 'E',
    transclude: true,
    scope: {},
    controller: require('./tabs-controller'),
    template: require('./tabs-template.html'),
    replace: true
  }
};
