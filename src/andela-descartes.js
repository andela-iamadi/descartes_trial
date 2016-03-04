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