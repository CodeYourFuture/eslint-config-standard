import globals from "globals";

import cyf from "../../index.js";

/** @type {import("eslint").Linter.Config[]} */
export default [
	{
		languageOptions: {
			globals: globals.node,
		},
	},
	...cyf.configs.standard,
];
