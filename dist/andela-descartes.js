'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var Descartes = function Descartes(tree) {
	applyMixins(tree);
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
			elements[i].style[style] = typeof objStyles[key] === 'function' ? objStyles[key](elements[i]) : objStyles[key];
		}
	}
};

var flatten = function flatten(obj) {
	var builtObj = {};
	for (var key in obj) {
		flattenNode(obj, key, builtObj);
	}
	return builtObj;
};

// Create a new tree that applies all mixins before flattening
var applyMixins = function applyMixins(tree) {
	// Apply the mixins
	var obj = {};
	for (var key in tree) {
		if (_typeof(tree[key]) == 'object') {
			if (key === '_mixin') {
				var mixin = tree[key];
				for (var property in mixin) {
					tree[property] = mixin[property];
				}
				delete tree[key];
			} else {
				applyMixins(tree[key]);
			}
		}
	}
	return tree;
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