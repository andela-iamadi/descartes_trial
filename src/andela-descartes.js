<<<<<<< HEAD
'use strict'

const Descartes = (tree) => {
	var check = applyMixins(tree);
	var objStyles = flatten(tree);
	applyStyles(objStyles);
}

let applyStyles = (objStyles) => {
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
}

let flatten = (obj) => {
  let builtObj = {}
  for (var key in obj) {
    flattenNode(obj, key, builtObj)
  }
  console.log(builtObj)
  return builtObj;
}

let applyMixins = (obj, parentKey) => {
	for (var key in obj) {
		if (key === "_mixin")  {
			obj[parentKey] = obj[key];
		} else if (typeof key === 'object') {
			debugger;
			applyMixins(obj[key], key)
		}
	}
	return obj;
}

let flattenNode = (obj, key, builtObj, parentKey, str) => {
  str = str || ""
  str += ((str.length > 0) ? " " + key : key)
  if (typeof obj[key] == 'object'){
		for (var k in obj[key]) {
			flattenNode(obj[key], k, builtObj, key, str)
		}
  } else {
      builtObj[str] = obj[key]
  }
}
=======
class Andela {
	constructor(styles) {
		this.styles = styles
		this.mapping = {}
		this.rulesStr;
		this.flatten()
		console.log(this.mapping)
	}

	flatten(obj = this.styles, selector = null) {
		var dummyObj = {}, rules;
		for (var key in obj) {
			var rules = obj[key];
		    if (typeof rules === 'object') {
		    	// This is a nested rule, run flatten again
		    	this.flatten(rules, key)
		    } else {
		    	// This is a real CSS rule
		    	var rule = {}
		    	rule[key] = rules
		    	this.mapping[selector] = rule
		    }
		}
		return dummyObj
  	}
}

var styles = {
	"html": {
		"margin": 0,
		"padding": 0,
		"body": {
			"color": "red",
			"font-family": "Helvetica"
		}
	}
}
new Andela(styles)
>>>>>>> 17158e2f69c1abca2c86bb3638cdaf8500c84641
