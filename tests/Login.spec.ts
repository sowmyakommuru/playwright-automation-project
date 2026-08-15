import { test, expect } from './fixtures';
import { loadActiveSignupData } from '../data-loader/dataprovider';
import * as path from 'path';
import * as fs from 'fs'; // <
const activeRecords = loadActiveSignupData();
const authFilePath = path.join(process.cwd(), '.auth/user.json');

test.describe('Automation Exercise - Login Tests', () => {

  // ==========================================================================
  // SECTION A: UN-AUTHENTICATED TESTS (No Storage State Used)
  // ==========================================================================
test.beforeEach(async ({ page, context }) => {
  // 1. Clear all cookies for this context
  await context.clearCookies();

  // 2. Clear local and session storage (must be on the domain to clear it)
  await page.goto('https://automationexercise.com'); 
  await page.evaluate(() => {
    localStorage.clear();
    sessionStorage.clear();
  });
});
  // 1. Data-Driven Login Loop
  for (const record of activeRecords) {
    test(`Successful Login and Logout for user: ${record.name}`, async ({ loginPage, signupPage }) => {
      await signupPage.navigate();
      await signupPage.goToSignupWithNetworkCheck();
      await expect(signupPage.signupHeader).toBeVisible();
      await loginPage.login(record.email, String(record.password));
    });
  }

  // 2. Multi-Page Interaction Test (Login -> Navigation)
  test('Should navigate between login page and home via navigation menu', async ({ loginPage, signupPage }) => {
    await loginPage.navigate();
    await signupPage.navigate();
    await expect(loginPage.page).toHaveTitle(/Automation Exercise/);
  });

  // ==========================================================================
  // SECTION B: AUTHENTICATED TESTS (Using Globally Saved Storage State)
  // ==========================================================================
  test.describe('Post-Login Dashboard Tests', () => {
test('Should view checkout cart instantly because user is pre-authenticated', async ({ browser }) => {
  // Check if the file exists on your hard drive first
  const hasStorageState = fs.existsSync(authFilePath);
  
  // Create context: Inject file if it exists, otherwise fall back to empty state
  const context = await browser.newContext(
    hasStorageState ? { storageState: authFilePath } : {}
  );
  const page = await context.newPage();

  // If the file was missing, log a helpful warning in the console instead of crashing
  if (!hasStorageState) {
    console.warn("⚠️ Warning: .auth/user.json was not found! Running test in an un-authenticated state.");
  }

  await page.goto('https://automationexercise.com');
  await expect(page.getByRole('link', { name: 'Logout' })).toBeVisible();

  await context.close();
});

    test('Should access profile page directly without hitting login wall', async ({ browser }) => {
      const context = await browser.newContext({ storageState: authFilePath });
      const page = await context.newPage();

      await page.goto('https://automationexercise.com');
      await expect(page.getByText(/Logged in as/i)).toBeVisible();

      await context.close();
    });

  });
});

  