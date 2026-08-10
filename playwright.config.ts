import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  reporter: [
    ['html'], // Standard HTML report
    ['allure-playwright', { outputFolder: 'allure-results' }] // Allure configuration
  ],
  use: {
    headless: false,
    launchOptions: {
      slowMo: 100,
    },
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'on-first-retry',
  },
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
    {
      // name: 'edge',
      // use: { 
      //   ...devices['Desktop Chrome'], 
      //   channel: 'msedge' // This tells Playwright to launch your local Edge browser
      // },
    }
  ],
});
