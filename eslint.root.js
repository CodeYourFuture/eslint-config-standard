import cyf from "./index.js";
import globals from "globals";

/** @type {import("eslint").Linter.Config[]} */
export default [
	...cyf.configs.standard,
	{
		languageOptions: {
			globals: globals.node,
		},
	},
];
