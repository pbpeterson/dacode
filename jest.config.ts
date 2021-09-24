export default {
  collectCoverage: true,
  collectCoverageFrom: ['./src/components/**/test.(ts)x'],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', './next'],
}
