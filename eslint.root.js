const { node } = require("globals");

const cyfConfig = require(".");

/** @type {import("eslint").Linter.FlatConfig} */
module.exports = [
	{
		languageOptions: {
			ecmaVersion: 9,
			globals: node,
		},
	},
	cyfConfig,
	{
		rules: {
			"quote-props": ["error", "consistent-as-needed"],
		},
	},
];
