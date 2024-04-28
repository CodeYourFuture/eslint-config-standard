"use strict";
const lax = require("./lax");

module.exports = {
	rules: {
		...lax.rules,
		"indent": ["error", "tab", { SwitchCase: 1 }],
		"linebreak-style": ["error", "unix"],
	},
};
