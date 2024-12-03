import { Linter } from "@typescript-eslint/utils/ts-eslint";
import angular from "angular-eslint";
import tsEslint from "typescript-eslint";

export default tsEslint.config({
  name: "devmy-angular-template-recommended",
  files: ["**/*.html"],
  extends: [
    ...angular.configs.templateRecommended,
    ...angular.configs.templateAccessibility,
  ],
});