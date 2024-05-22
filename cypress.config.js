// const { defineConfig } = require("cypress");
const { defineConfig } = require("cypress");
const {
  beforeRunHook,
  afterRunHook,
} = require("cypress-mochawesome-reporter/lib");

module.exports = defineConfig({
  projectId: "8u86z2",
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    reporterEnabled: "mochawesome",
    mochawesomeReporterOptions: {
      reportDir: "cypress/reports",
      quiet: true,
      overwrite: true,
      html: true,
      json: true,
      embeddedScreenshots: true,
      charts: true,
      reportPageTitle: "Cypress Inline Report",
      inlineAssets: true,
    },
  },
  pageLoadTimeout: 50000,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require("cypress-mochawesome-reporter/plugin")(on);
      on("before:run", async (details) => {
        console.log("override before:run");
        await beforeRunHook(details);
      });

      on("after:run", async () => {
        console.log("override after:run");
        await afterRunHook();
      });
      // config.specPattern = ["cypress/e2e/1-Belajar/karis/**/*.cy.js"];
      // return config;
    },

    viewportHeight: 800,
    viewportWidth: 1700,
    experimentalStudio: true,
  },
});
