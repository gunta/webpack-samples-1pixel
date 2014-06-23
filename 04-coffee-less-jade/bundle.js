/******/ (function(modules) { // webpackBootstrap
/******/ 	
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/ 		
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/ 		
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 		
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 		
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/ 	
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/ 	
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/ 	
/******/ 	
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var Colors;

	Colors = __webpack_require__(1);

	window.onload = function() {
	  var colors;
	  colors = new Colors();
	  return document.getElementsByTagName("body")[0].innerHTML = colors.getTemplate();
	};


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var template;

	__webpack_require__(2);

	template = __webpack_require__(4);

	this.Colors = (function() {
	  function Colors() {}

	  Colors.prototype.getTemplate = function() {
	    return template;
	  };

	  return Colors;

	})();

	module.exports = this.Colors;


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	var dispose = __webpack_require__(5)
		// The css code:
		(__webpack_require__(3))
	if(false) {
		module.hot.accept();
		module.hot.dispose(dispose);
	}

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	module.exports =
		".box {\n  width: 50px;\n  height: 50px;\n  float: left;\n}\n.one {\n  background: #eb4a00;\n}\n.two {\n  background: #ff781f;\n}\n.three {\n  background: #ffa552;\n}\n.four {\n  background: #b82b00;\n}\n.five {\n  background: #851400;\n}\n";

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "<h1>Colors</h1><div class=\"box one\"></div><div class=\"box two\"></div><div class=\"box three\"></div><div class=\"box four\"></div><div class=\"box five\"></div>"

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	module.exports = function addStyle(cssCode) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		var head = document.getElementsByTagName("head")[0];
		head.appendChild(styleElement);
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = cssCode;
		} else {
			styleElement.appendChild(document.createTextNode(cssCode));
		}
		return function() {
			head.removeChild(styleElement);
		};
	}


/***/ }
/******/ ])