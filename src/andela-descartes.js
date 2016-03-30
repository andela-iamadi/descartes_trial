'use strict'

const Descartes = (tree) => {
	applyMixins(tree);
	var objStyles = flatten(tree);
	applyStyles(objStyles)
}

let applyStyles = (objStyles) => {
	var elements, selector, style, lastIndex;
	for (var key in objStyles) {
		lastIndex = key.lastIndexOf(' ');
		selector = key.substring(0, lastIndex);
		style = key.substring(lastIndex).trim();
		elements = document.querySelectorAll(selector);
		for (var i = 0; i < elements.length; i++) {
			elements[i].style[style] = (typeof objStyles[key] === 'function') ? objStyles[key]() : objStyles[key];
		}
	}
}

let flatten = (obj) => {
  let builtObj = {}
  for (var key in obj) {
    flattenNode(obj, key, builtObj)
  }
  return builtObj;
}


// Create a new tree that applies all mixins before flattening
let applyMixins = (tree) => {
	// Apply the mixins
	var obj = {}
	for (var key in tree) {
		if (typeof tree[key] == 'object') {
			if (key === '_mixin') {
	  		var mixin = tree[key]
	  		for (var property in mixin) {
	  			tree[property] = mixin[property]
	  		}
				delete(tree[key])
	  	} else {
				applyMixins(tree[key])
			}
		}
	}
	return tree;
}

let flattenNode = (obj, key, builtObj, str) => {
  str = str || ""
  str += ((str.length > 0) ? " " + key : key)
  if (typeof obj[key] == 'object'){

		for (var k in obj[key]) {
			flattenNode(obj[key], k, builtObj, str)
		}
  } else {
      builtObj[str] = obj[key]
  }
}
