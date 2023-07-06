"use strict";

module.exports = {
	extends: ["./lax"],
	rules: {
		"indent": ["error", "tab", { "SwitchCase": 1 }],
		"linebreak-style": ["error", "unix"],
	},
};
