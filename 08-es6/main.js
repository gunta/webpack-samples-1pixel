/*jshint esnext:true */

// Style modules
require('todomvc-common/base.css')

// ES5 modules
var $ = require('jquery')
var Backbone = require('backbone')

// ES6 modules
import {AppView, Filters} from './todo-app';

// Document ready
$(() => {
  new AppView()
  new Filters()
  Backbone.history.start()
})
