import type {Config} from 'jest';

const config: Config = {
  verbose: true,
  testMatch: ["**/*.doctest.ts"],
  preset: 'ts-jest',
  testEnvironment: 'node',
};

export default config;
