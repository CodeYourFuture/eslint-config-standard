"use strict";

module.exports = {
	extends: ["eslint:recommended"],
	rules: {
		"arrow-parens": "error",
		"brace-style": ["error", "1tbs", { "allowSingleLine": false }],
		"comma-dangle": ["error", "always-multiline"],
		"curly": "error",
		"no-trailing-spaces": "error",
		"no-unused-vars": ["error", { "ignoreRestSiblings": true }],
		"no-var": "error",
		"object-curly-spacing": ["error", "always"],
		"operator-linebreak": ["error", "before"],
		"quotes": ["error", "double", { "avoidEscape": true, "allowTemplateLiterals": false }],
		"semi": "error",
	},
};
