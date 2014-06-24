var a = require('a');
var b = require('b');

require.ensure(['c'], function (require) {
  require('b');
  var d = require('d');
});
// Should print 'a b d' and not 'c' because ensure doesn't evaluate code
