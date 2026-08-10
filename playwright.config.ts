import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  
  // Update this section inside your configuration file:
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    baseURL: 'https://automationexercise.com',

    /* Collect trace when retrying the failed test. See https://playwright.dev */
    trace: 'on-first-retry',
  },

  projects: [
    {
      name: 'chromium',
      use: { 
        ...devices['Desktop Chrome'],
        // This blocks Google Ads script networks engine-wide for all tests!
        extraHTTPHeaders: {
          'X-Block-Ads': 'true'
        }
      },
    },
    // ... keep your other project profiles exactly the same below ...
  ],
});
