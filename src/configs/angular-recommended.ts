export default {
  env: {
    browser: true,
    es6: true,
  },
  extends: ['./recommended'],
  rules: {
    '@angular-eslint/directive-selector': ['error', { type: 'attribute', prefix: 'app', style: 'camelCase' }],
  },
};