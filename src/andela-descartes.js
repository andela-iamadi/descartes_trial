class Andela {
	constructor(styles) {
		this.styles = styles
		this.rulesStr;
		this.flatten()
	}

	flatten(obj = this.styles) {
		var dummyObj = {}, rules;
		for (var key in obj) {
			var rules = obj[key];
		    if (typeof rules == 'object') {
		      this.flatten(rules)
		    }
		}
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