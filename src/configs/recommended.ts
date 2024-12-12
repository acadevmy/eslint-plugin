import eslint from "@eslint/js";
import stylisticTs from "@stylistic/eslint-plugin-ts";
import { FlatConfig } from "@typescript-eslint/utils/ts-eslint";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import sonar from "eslint-plugin-sonarjs";
import eslintPluginUnicorn from "eslint-plugin-unicorn";
import unusedImports from "eslint-plugin-unused-imports";
import tsEslint from "typescript-eslint";

import { ignores } from "../utils";

export default tsEslint.config({
  name: "devmy-recommended",
  ignores,
  plugins: {
    sonar,
    unicorn: eslintPluginUnicorn,
    "simple-import-sort": simpleImportSort,
    "@stylistic": stylisticTs,
    "unused-imports": unusedImports,
  },
  files: ["**/*.ts"],
  extends: [
    eslint.configs.recommended,
    sonar.configs.recommended,
    ...tsEslint.configs.recommended,
    ...tsEslint.configs.stylistic,
    eslintPluginPrettierRecommended,
  ],
  rules: {
    "@stylistic/space-before-blocks": "error",
    "@stylistic/padding-line-between-statements": [
      "error",
      {
        blankLine: "always",
        prev: "*",
        next: "return",
      },
    ],
    "@typescript-eslint/array-type": ["error", { default: "array-simple" }],
    "@typescript-eslint/ban-ts-comment": 0,
    "@typescript-eslint/explicit-member-accessibility": "error",
    "@typescript-eslint/explicit-function-return-type": "error",
    "@typescript-eslint/max-params": ["error", { max: 3 }],
    "arrow-body-style": ["error", "as-needed"],
    curly: "error",
    "default-case": "error",
    eqeqeq: "error",
    "id-length": [
      "error",
      { min: 2, exceptions: ["x", "y", "z", "i", "j", "_"] },
    ],
    "max-classes-per-file": ["error", 2],
    "max-depth": ["error", 4],
    "max-lines": [1, { max: 150 }],
    "max-lines-per-function": [1, { max: 40 }],
    "max-nested-callbacks": ["error", 3],
    "no-console": "error",
    "no-magic-numbers": [
      "error",
      {
        detectObjects: false,
        ignoreArrayIndexes: true,
        ignoreDefaultValues: true,
        ignoreClassFieldInitialValues: true,
        ignore: [0, 1],
      },
    ],
    "no-multi-assign": "error",
    "no-nested-ternary": "error",
    "no-shadow": "off",
    "no-undefined": "error",
    "no-unneeded-ternary": "error",
    "simple-import-sort/exports": "error",
    "simple-import-sort/imports": "error",
    yoda: "error",
    "no-unused-vars": "off",
    "unicorn/better-regex": "error",
    "unicorn/explicit-length-check": "error",
    "unicorn/no-abusive-eslint-disable": "error",
    "unused-imports/no-unused-imports": "error",
    "unused-imports/no-unused-vars": [
      "warn",
      {
        vars: "all",
        varsIgnorePattern: "^_",
        args: "after-used",
        argsIgnorePattern: "^_",
      },
    ],
  },
}) as FlatConfig.Config;
