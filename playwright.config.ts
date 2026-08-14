import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
   outputDir: 'test-results',
  
  // Update this section inside your configuration file:
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    baseURL: 'https://automationexercise.com',

    /* Collect trace when retrying the failed test. See https://playwright.dev */
    trace: 'on-first-retry',

    // 2. TURN ON SCREENSHOTS
    // Options: 'off' | 'on' | 'only-on-failure'
    screenshot: 'on', 

    // 3. TURN ON VIDEOS
    // Options: 'off' | 'on' | 'retain-on-failure' | 'on-first-retry'
    video: 'on', 
    
    // (Optional) Turn on Traces which are even better for debugging!
   
  },
  
  // 4. Ensure you are using the HTML reporter to view them easily
  reporter: [['html']], 


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