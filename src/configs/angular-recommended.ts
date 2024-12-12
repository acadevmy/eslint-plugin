import ngrx from "@ngrx/eslint-plugin/v9";
import angular from "angular-eslint";
import tsEslint from "typescript-eslint";

import { ignores } from "../utils";
import recommendedConfig from "./recommended";

export default tsEslint.config({
  name: "devmy-angular-ts-recommended",
  ignores,
  files: ["**/*.ts"],
  extends: [
    ...ngrx.configs.all,
    ...angular.configs.tsRecommended,
    recommendedConfig,
  ],
  processor: angular.processInlineTemplates,
  rules: {
    "@angular-eslint/directive-selector": [
      "error",
      {
        type: "attribute",
        prefix: "app",
        style: "camelCase",
      },
    ],
    "@angular-eslint/component-selector": [
      "error",
      {
        type: "element",
        prefix: "app",
        style: "kebab-case",
      },
    ],
    "@angular-eslint/component-class-suffix": [
      "error",
      { suffixes: ["Page", "Component"] },
    ],
  },
});
