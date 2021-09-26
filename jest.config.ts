export default {
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/src/components/**/*.ts(x)',
    '<rootDir>/!src/**/stories.tsx',
    '<rootDir>/!src/pages/**/*.tsx',
    '<rootDir>/!src/styles/**/*.ts',
    '<rootDir>/!src/types/*.ts',
  ],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', './next'],
}
