"use strict";

module.exports = {
	extends: ["eslint:recommended"],
	plugins: ["@stylistic/js"],
	rules: {
		"@stylistic/js/arrow-parens": "error",
		"@stylistic/js/brace-style": ["error", "1tbs", { "allowSingleLine": false }],
		"@stylistic/js/comma-dangle": ["error", "always-multiline"],
		"@stylistic/js/no-trailing-spaces": "error",
		"@stylistic/js/object-curly-spacing": ["error", "always"],
		"@stylistic/js/operator-linebreak": ["error", "before"],
		"@stylistic/js/quotes": ["error", "double", { "avoidEscape": true, "allowTemplateLiterals": false }],
		"@stylistic/js/semi": "error",
		"curly": "error",
		"no-unused-vars": ["error", { "ignoreRestSiblings": true }],
		"no-var": "error",
	},
};
