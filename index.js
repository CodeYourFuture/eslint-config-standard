const eslint = require("@eslint/js");
const stylistic = require("@stylistic/eslint-plugin");

/**
 * Create a configuration from the recommended base.
 *
 * @param {import("eslint").Linter.RulesRecord=} override
 * @returns {import("eslint").Linter.Config[]}
 */
function configure(override = {}) {
	return [
		eslint.configs.recommended,
		stylistic.configs.customize({
			arrowParens: true,
			commaDangle: "always-multiline",
			flat: true,
			indent: "tab",
			quoteProps: "as-needed",
			semi: true,
		}),
		{
			linterOptions: {
				reportUnusedDisableDirectives: true,
			},
			rules: {
				"@stylistic/brace-style": ["error", "1tbs", { allowSingleLine: false }],
				"@stylistic/indent": ["error", "tab", { SwitchCase: 1 }],
				"@stylistic/linebreak-style": ["error", "unix"],
				"@stylistic/no-trailing-spaces": "error",
				"@stylistic/object-curly-spacing": ["error", "always"],
				"@stylistic/operator-linebreak": ["error", "before"],
				"@stylistic/quotes": [
					"error",
					"double",
					{ avoidEscape: true, allowTemplateLiterals: false },
				],
				curly: "error",
				"no-unused-vars": ["error", { ignoreRestSiblings: true }],
				"no-var": "error",
				...override,
			},
		},
	];
}

module.exports = {
	configure,
	configs: {
		lax: configure({
			"@stylistic/indent": "off",
			"@stylistic/linebreak-style": "off",
			"@stylistic/no-tabs": "off",
		}),
		standard: configure(),
	},
};
