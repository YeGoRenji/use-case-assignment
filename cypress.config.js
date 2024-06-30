import { defineConfig } from "cypress";

export default defineConfig({
  viewportHeight: 1080,
  viewportWidth: 1920,
  defaultCommandTimeout: 8000,
  watchForFileChanges: false,
  requestTimeout: 30000,
  e2e: {
    setupNodeEvents(on, config) {
    },
    baseUrl: 'http://localhost:5173/',
    specPattern: 'cypress/e2e/*.{js,jsx,ts,tsx}',
  },
});
