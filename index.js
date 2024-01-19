"use strict";

module.exports = {
	extends: ["./lax"],
	rules: {
		"@stylistic/indent": ["error", "tab", { "SwitchCase": 1 }],
		"@stylistic/linebreak-style": ["error", "unix"],
	},
};
