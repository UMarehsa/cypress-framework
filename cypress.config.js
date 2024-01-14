const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl:"https://opensource-demo.orangehrmlive.com/web/index.php",
    defaultCommandTimeout:12000,
    specPattern:'cypress/tests/**/*.{js,jsx,ts,tsx}',
    watchForFileChanges: false,
    experimentalRunAllSpecs:true,
    testIsolation:true
  },
});
