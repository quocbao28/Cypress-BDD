import { defineConfig } from 'cypress'

export default defineConfig({
  viewportWidth: 1368,
  viewportHeight: 800,
  requestTimeout: 120000,
  pageLoadTimeout: 120000,
  defaultCommandTimeout: 60000,
  chromeWebSecurity: false,
  video: false,
  env: {
    NODE_ENV: 'development',
  },
  reporter: 'mochawesome',
  reporterOptions: {
    html: false,
    json: true,
    overwrite: false,
    reportDir: 'report/mochawesome-report',
  },
  numTestsKeptInMemory: 0,
  trashAssetsBeforeRuns: true,
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    baseUrl: 'https://magento.softwaretestingboard.com/',
    specPattern: 'cypress/**/*.feature',
  },
})
