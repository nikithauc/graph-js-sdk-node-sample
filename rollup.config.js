/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */

import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import { terser } from "rollup-plugin-terser";

const config = [
	{
		input: ["lib/index.js"],
		output: {
			file: "bundledmin.js",
			format: "esm",
			name: "TestFullGraphAPI",
		},
		plugins: [
			resolve({
				browser: true,
				preferBuiltins: false,
			}),
			commonjs(),
            terser()
		],
	},
];

export default config;
