"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Andela = function () {
	function Andela(styles) {
		_classCallCheck(this, Andela);

		this.styles = styles;
		this.rulesStr;
		this.flatten();
	}

	_createClass(Andela, [{
		key: "flatten",
		value: function flatten() {
			var obj = arguments.length <= 0 || arguments[0] === undefined ? this.styles : arguments[0];

			var dummyObj = {},
			    rules;
			for (var key in obj) {
				var rules = obj[key];
				if ((typeof rules === "undefined" ? "undefined" : _typeof(rules)) == 'object') {
					this.flatten(rules);
				}
			}
		}
	}]);

	return Andela;
}();

var styles = {
	"html": {
		"margin": 0,
		"padding": 0,
		"body": {
			"color": "red",
			"font-family": "Helvetica"
		}
	}
};
new Andela(styles);