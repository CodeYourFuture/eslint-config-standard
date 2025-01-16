const { node } = require("globals");

const cyf = require(".");

/** @type {import("eslint").Linter.Config} */
module.exports = [
	...cyf.configs.standard,
	{
		languageOptions: {
			globals: node,
		},
	},
];
