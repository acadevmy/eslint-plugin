# devmy-eslint-plugins

This library provides ESLint configurations with the recommended rules from the Devmy team for TypeScript and popular frameworks like React, Angular. It helps you enforce consistent code style, avoid common pitfalls, and improve the overall quality and maintainability of your projects.

## Installation

```bash
npm install --save-dev devmy-eslint-plugins
```

## Usage

### Typescript

```
// .eslintrc.js
module.exports = {
  extends: [
    'plugin:devmy-eslint-plugins/recommended'
  ]
};
```

### Angular

```
// .eslintrc.js
module.exports = {
  extends: [
    'plugin:devmy-eslint-plugins/angular-recommended'
  ]
};
```

## Configurations

- **recommended**: The base configuration for TypeScript projects.
- **angular-recommended**: Extends the "recommended" configuration with rules specific to Angular projects.
