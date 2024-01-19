"use strict";

module.exports = {
	extends: ["eslint:recommended"],
	plugins: ["@stylistic"],
	rules: {
		"@stylistic/arrow-parens": "error",
		"@stylistic/brace-style": ["error", "1tbs", { "allowSingleLine": false }],
		"@stylistic/comma-dangle": ["error", "always-multiline"],
		"@stylistic/no-trailing-spaces": "error",
		"@stylistic/object-curly-spacing": ["error", "always"],
		"@stylistic/operator-linebreak": ["error", "before"],
		"@stylistic/quotes": ["error", "double", { "avoidEscape": true, "allowTemplateLiterals": false }],
		"@stylistic/semi": "error",
		"curly": "error",
		"no-unused-vars": ["error", { "ignoreRestSiblings": true }],
		"no-var": "error",
	},
};
