import { FlatConfig } from '@typescript-eslint/utils/ts-eslint';
import cypress from 'eslint-plugin-cypress/flat';
import tsEslint from 'typescript-eslint';

import { ignores } from '../utils';
import recommendedConfig from './recommended';

export default tsEslint.config({
  name: 'devmy-cypress-recommended',
  ignores,
  files: ['**/*.cy.ts'],
  extends: [cypress.configs.recommended, recommendedConfig],
}) as FlatConfig.Config;
