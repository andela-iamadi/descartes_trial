"use strict";

document.addEventListener("DOMContentLoaded", function (event) {
	var _font = {
		"color": "#666",
		"font-family": "Helvetica",
		'p': {
			"height": "300px",
			"font-weight": "bold",
			'margin-top': function marginTop(_) {
				return _.height / 2 + "px";
			}
		}
	};
	var styles = {
		"html": {
			"margin": 0,
			"padding": 0,
			"body": {
				'_mixin': _font
			}
		}
	};
	Descartes(styles);
});