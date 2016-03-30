'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var Descartes = function Descartes(tree) {
	// var check = applyMixins(tree);
	var objStyles = flatten(tree);
	applyStyles(objStyles);
};

var applyStyles = function applyStyles(objStyles) {
	var elements, selector, style, lastIndex;
	for (var key in objStyles) {
		lastIndex = key.lastIndexOf(' ');
		selector = key.substring(0, lastIndex);
		style = key.substring(lastIndex).trim();
		elements = document.querySelectorAll(selector);
		for (var i = 0; i < elements.length; i++) {
			elements[i].style[style] = objStyles[key];
		}
	}
};

var flatten = function flatten(obj) {
	var builtObj = {};
	for (var key in obj) {
		flattenNode(obj, key, builtObj);
	}
	console.log(builtObj);
	return builtObj;
};

// Create a new tree that applies all mixins before flattening
var applyMixins = function applyMixins(tree) {
	// Apply the mixins
	var obj = {};

	/*
 if (key === '_mixin') {
  		var mixin = obj[key]
  		for (var property in mixin) {
  			obj[property] = mixin[property]
  		}
  	}
  	*/

	return obj;
};

var flattenNode = function flattenNode(obj, key, builtObj, str) {
	str = str || "";
	str += str.length > 0 ? " " + key : key;
	if (_typeof(obj[key]) == 'object') {
		for (var k in obj[key]) {
			flattenNode(obj[key], k, builtObj, str);
		}
	} else {
		builtObj[str] = obj[key];
	}
};