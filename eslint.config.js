// @ts-check
const tseslint = require("typescript-eslint");
const devmy = require("./dist/index");

module.exports = tseslint.config({
  files: ["src/**/*.ts"],
  ignores: ["**/*.spec.ts"],
  plugins: { devmy: devmy },
  extends: [devmy.configs.recommended],
  rules: { "no-magic-numbers": "off" },
});
