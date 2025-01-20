import type { Config } from 'jest';

const config: Config = {
  clearMocks: true,
  maxWorkers: 1,
  testEnvironment: 'node',
  transform:{
    '^.+\\.[tj]s?$': ['ts-jest', { tsconfig: '<rootDir>/tsconfig.spec.json' }],
  }
};

export default config;
