import { FlatConfig } from '@typescript-eslint/utils/ts-eslint';
import jest from 'eslint-plugin-jest';
import tsEslint from 'typescript-eslint';

import { ignores } from '../utils';
import recommendedConfig from './recommended';

export default tsEslint.config({
  name: 'devmy-jest-recommended',
  ignores,
  plugins: { jest },
  files: ['**/*.spec.ts', '**/*.test.ts'],
  languageOptions: {
    globals: jest.environments.globals.globals,
  },
  extends: [
    jest.configs['flat/recommended'],
    jest.configs['flat/style'],
    recommendedConfig,
  ],
  rules: {
    'jest/max-expects': [
      'error',
      {
        max: 1,
      },
    ],
    'jest/no-conditional-in-test': 'error',
    'jest/no-confusing-set-timeout': 'error',
    'jest/no-duplicate-hooks': 'error',
    'jest/no-test-return-statement': 'error',
    'jest/padding-around-all': 'error',
    'jest/prefer-each': 'error',
    'jest/prefer-expect-resolves': 'error',
    'jest/prefer-hooks-on-top': 'error',
    'jest/prefer-lowercase-title': 'error',
    'jest/prefer-mock-promise-shorthand': 'error',
    'jest/prefer-spy-on': 'error',
    'jest/require-top-level-describe': 'error',
    'jest/valid-title': [
      'error',
      {
        mustNotMatch: ['\\.$', 'Titles should not end with a full-stop'],
        mustMatch: {
          test: [
            new RegExp(/^should\b.*\bwhen\b.*$/, 'u').source,
            `test titles must follow the format 'should {expected} when {case}'. Example: 'should open the dialog when user clicks the button'`,
          ],
          it: [
            new RegExp(/^should\b.*\bwhen\b.*$/, 'u').source,
            `test titles must follow the format 'should {expected} when {case}'. Example: 'should open the dialog when user clicks the button'`,
          ],
        },
      },
    ],
  },
}) as FlatConfig.Config;
