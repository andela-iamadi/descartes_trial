

document.addEventListener("DOMContentLoaded", function(event) {
	var _font = {
		"color": "#666",
		"font-family": "Helvetica",
		'p': {
			'margin-top': function(_) {
				debugger;
				_.height = "300px";
				_.style['font-weight'] = 'bold'
				return `${_.height / 2}px`;
			}
		}
	}
	var styles = {
		"html": {
			"margin": 0,
			"padding": 0,
			"body": {
				'_mixin': _font
			}
		}
	}
	Descartes(styles)
});
