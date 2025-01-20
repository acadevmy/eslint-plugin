# @devmy/eslint-plugin

This library provides ESLint configurations with the recommended rules from the Devmy team for TypeScript and popular frameworks like React, Angular. It helps you enforce consistent code style, avoid common pitfalls, and improve the overall quality and maintainability of your projects.

## Installation

**npm:**
```bash
npm install --save-dev @devmy/eslint-plugin
```

**pnpm:**
```bash
pnpm add -D @devmy/eslint-plugin
```

**yarn**
```bash
yarn add --dev @devmy/eslint-plugin
```

**bun**
```bash
bun add -d @devmy/eslint-plugin
```

**Note:** If you installed ESLint globally then you must also install `@devmy/eslint-plugin` globally.

## Usage

If you're using flat configuration:

With
[flat configuration](https://eslint.org/docs/latest/use/configure/configuration-files),
just import the plugin and away you go:

```js
// .eslintrc.js
const pluginDevmy = require('@devmy/eslint-plugin');

module.exports = {
  extends: [
    pluginDevmy.configs.recommended
  ]
};
```

With legacy configuration, add `@devmy/eslint-plugin` to the plugins section of your `.eslintrc`
configuration file:

```json
{
  "extends": ["plugin:@devmy/eslint-plugin/recommended"]
}
```

## Configurations

| **Configuration**          | **full name**                          | **Description**                                       |
|-----------------------------|------------------------------------------|-------------------------------------------------------|
| **recommended**            | `@devmy/eslint-plugin/recommended`      | The base configuration for TypeScript projects.      |
| **angular-recommended**    | `@devmy/eslint-plugin/angular-recommended` | Extends the "recommended" configuration with rules specific to Angular projects. |
| **angular-template-recommended** | `@devmy/eslint-plugin/angular-template-recommended` | Provides recommended rules for Angular templates.    |
| **cypress-recommended**    | `@devmy/eslint-plugin/cypress-recommended` | Provides recommended rules for Cypress projects.     |
| **jest-recommended**       | `@devmy/eslint-plugin/jest-recommended` | Provides recommended rules for jest tests.           |


### Rules

**Key**

- :white_check_mark: = recommended
- :wrench: = fixable
- :bulb: = has suggestions

| **Rule**                | **Description** | :white_check_mark: | :wrench: | :bulb: |
|-------------------------| --- | --- | --- | --- |
| `prefer-class-bindings` | Ensures the usage of class bindings instead of ngClass for elements |  |  |  |


## Contributing

We welcome contributions to this project! If you find any issues or have suggestions for new rules or configurations, please open an issue or submit a pull request.
