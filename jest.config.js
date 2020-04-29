module.exports = {
  preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
  collectCoverageFrom: ['**/*.{vue,ts}', '!**/node_modules/**', '!**/coverage/**', '!**/tests/e2e/**'],
  coverageReporters: ['text-summary', 'html', 'json']
}
