import type {Config} from 'jest';

const config: Config = {
  verbose: true,
  testMatch: ["**/*.test.ts"],
  preset: 'ts-jest',
  testEnvironment: 'node',
};

export default config;
