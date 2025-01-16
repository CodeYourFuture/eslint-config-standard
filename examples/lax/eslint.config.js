const { node } = require("globals");

const cyf = require("../..");

/** @type {import("eslint").Linter.Config} */
module.exports = [
	{
		languageOptions: {
			globals: node,
		},
	},
	...cyf.configs.lax,
];
