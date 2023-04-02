// npm install rollup @rollup/plugin-node-resolve @rollup/plugin-typescript @rollup/plugin-commonjs rollup-plugin-dts --save-devipt @rollup/plugin-commonjs rollup-plugin-dts @rollup/plugin-typescript rollup-plugin-postcss --save-dev
// npm install tslib

import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import packageJson from "./package.json" assert { type: "json" };
import sourcemaps from 'rollup-plugin-sourcemaps';
import sucrase from '@rollup/plugin-sucrase';
import postcss from 'rollup-plugin-postcss';

export default [
  {
    input: "./index.tsx",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      // not sure why, but postcss must come first, else it will have an error
      postcss({
        extensions: ['.css'],
     }),
      resolve(),
      sourcemaps(),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }),
      sucrase({
        exclude: ['node_modules/**'],
        transforms: ['typescript', 'jsx'],
      }),
    ],
  },
  {
    input: "dist/esm/types/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts()],
    // add for exporting css
    external: [/\.css$/],
  },
];