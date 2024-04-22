const { defineConfig } = require("cypress");


module.exports = defineConfig({
  projectId: '8xyckh',
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'Cypress Project Demo Report in Mochawesome Report',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
  
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
      
     
    },
    specPattern: 'cypress/integration/Examples/*.js',
    video: true
  },
  
 
});


