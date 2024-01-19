"use strict";

module.exports = {
	extends: ["eslint:recommended"],
	rules: {
		"@stylistic/js/arrow-parens": "error",
		"@stylistic/js/brace-style": ["error", "1tbs", { "allowSingleLine": false }],
		"@stylistic/js/comma-dangle": ["error", "always-multiline"],
		"@stylistic/js/no-trailing-spaces": "error",
		"@stylistic/js/object-curly-spacing": ["error", "always"],
		"@stylistic/js/operator-linebreak": ["error", "before"],
		"@stylistic/js/quotes": ["error", "double", { "avoidEscape": true, "allowTemplateLiterals": false }],
		"@stylistic/js/semi": "error",
		"arrow-parens": "off",
		"brace-style": "off",
		"comma-dangle": "off",
		"curly": "error",
		"no-trailing-spaces": "off",
		"no-unused-vars": ["error", { "ignoreRestSiblings": true }],
		"no-var": "error",
		"object-curly-spacing": "off",
		"operator-linebreak": "off",
		"quotes": "off",
		"semi": "off",
	},
};
