"use strict";

document.addEventListener("DOMContentLoaded", function (event) {
	var _font = {
		"color": "#666",
		"font-family": "Helvetica",
		'p': {
			'font-weight': 'normal'
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