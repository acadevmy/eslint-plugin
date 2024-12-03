import eslint from '@eslint/js';
import tsEslint from 'typescript-eslint';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import unusedImports from 'eslint-plugin-unused-imports';
import { FlatConfig, Linter } from '@typescript-eslint/utils/ts-eslint';


export default tsEslint.config({
  name: "devmy-recommended",
  plugins: { 'simple-import-sort': simpleImportSort, 'unused-imports': unusedImports, },
  files: ['**/*.ts'],
  extends: [
    eslint.configs.recommended,
    ...tsEslint.configs.recommended,
    ...tsEslint.configs.stylistic,
  ],
  rules: {
    '@typescript-eslint/ban-ts-comment': 0,
    '@typescript-eslint/explicit-member-accessibility': 'error',
    '@typescript-eslint/explicit-function-return-type': 'error',
    'arrow-body-style': ['error', 'as-needed'], 
    'curly': 'error',
    'default-case': 'error',
    'eqeqeq': 'error', 
    'id-length': ['error', { 'min': 3, 'exceptions': ['x', 'y', 'z', 'i', 'j', 'id'] }],
    'max-classes-per-file': ['error', 2],
    'max-depth': ['error', 4],
    'max-lines': [1, { max: 150 }],
    'max-lines-per-function': [1, { max: 40 }], 
    'max-nested-callbacks': ['error', 3], 
    'no-console': ['error'],
    'no-duplicate-imports': 'error', 
    'no-empty-function': 'error',
    'no-magic-numbers': 'error',
    'no-multi-assign': 'error',
    'no-nested-ternary': 'error',
    'no-shadow': 'error',
    'no-undefined': 'error', 
    'no-unneeded-ternary': 'error',
    'simple-import-sort/exports': 'error',
    'simple-import-sort/imports': 'error',
    'sort-keys': 'error',
    'yoda': 'error',
    'no-unused-vars': 'off',
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'warn',
      {
          'vars': 'all',
          'varsIgnorePattern': '^_',
          'args': 'after-used',
          'argsIgnorePattern': '^_',
      },
    ],
  }
}) as FlatConfig.Config;