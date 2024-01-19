"use strict";

module.exports = {
	extends: ["./lax"],
	rules: {
		"@stylistic/js/indent": ["error", "tab", { "SwitchCase": 1 }],
		"@stylistic/js/linebreak-style": ["error", "unix"],
	},
};
