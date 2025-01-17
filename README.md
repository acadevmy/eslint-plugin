# @devmy/eslint-plugin

This library provides ESLint configurations with the recommended rules from the Devmy team for TypeScript and popular frameworks like React, Angular. It helps you enforce consistent code style, avoid common pitfalls, and improve the overall quality and maintainability of your projects.

## Installation

```bash
npm install --save-dev @devmy/eslint-plugin
```

## Usage

### Typescript

```js
// .eslintrc.js
module.exports = {
  extends: [
    'plugin:@devmy/eslint-plugin/recommended'
  ]
};
```

### Angular

```js
// .eslintrc.js
module.exports = {
  extends: [
    'plugin:@devmy/eslint-plugin/angular-recommended'
  ]
};
```

### Angular with separate template configuration
```js
// eslint.config.js
const tseslint = require("typescript-eslint");
const devmy = require("@devmy/eslint-plugin");

module.exports = tseslint.config(
  {
    files: ["**/*.ts"],
    plugins: { "devmy": devmy },
    extends: [devmy.configs["angular-recommended"]],
  },
  {
    files: ["**/*.html"],
    plugins: { "devmy": devmy },
    extends: [devmy.configs["angular-template-recommended"]],
  }
);
```

### Cypress

```js
// .eslintrc.js
module.exports = {
  extends: [
    'plugin:@devmy/eslint-plugin/cypress-recommended'
  ]
};
```

### Jest

```js
// .eslintrc.js
module.exports = {
  extends: [
    'plugin:@devmy/eslint-plugin/jest-recommended'
  ]
};
```

## Configurations

- **recommended**: The base configuration for TypeScript projects.
- **angular-recommended**: Extends the "recommended" configuration with rules specific to Angular projects.
- **angular-template-recommended**: Provides recommended rules for Angular templates.
- **cypress-recommended**: Provides recommended rules for Cypress projects.
- **jest-recommended**: Provides recommended rules for jest tests.

## Contributing

We welcome contributions to this project! If you find any issues or have suggestions for new rules or configurations, please open an issue or submit a pull request.