"use strict";

module.exports = {
	extends: ["eslint:recommended"],
	rules: {
		"arrow-body-style": ["error", "always"],
		"arrow-parens": "error",
		"brace-style": ["error", "1tbs", { "allowSingleLine": false }],
		"comma-dangle": ["error", "always-multiline"],
		"curly": "error",
		"indent": ["error", "tab"],
		"linebreak-style": ["error", "unix"],
		"no-trailing-spaces": "error",
		"no-unused-vars": ["error", { "ignoreRestSiblings": true }],
		"no-var": "error",
		"object-curly-spacing": ["error", "always"],
		"operator-linebreak": ["error", "before"],
		"quotes": ["error", "double"],
		"semi": "error",
	},
};
