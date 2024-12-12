import angular from "angular-eslint";
import tsEslint from "typescript-eslint";

import { ignores } from "../utils";

export default tsEslint.config({
  name: "devmy-angular-template-recommended",
  ignores,
  files: ["**/*.html"],
  extends: [
    ...angular.configs.templateRecommended,
    ...angular.configs.templateAccessibility,
  ],
  rules: {
    "@angular-eslint/template/attributes-order": "error",
    "@angular-eslint/template/prefer-self-closing-tags": "error",
  },
});
