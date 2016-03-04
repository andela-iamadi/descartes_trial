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

var html = $(document).find('html');
var rulesStr;

const flatten = (obj) => {
  var dummyObj = {}, rules;
  for (key in obj) {
    var rules = obj[key];
    if (typeof rules == 'object') {
      flatten(rules)
    }
  }
}
