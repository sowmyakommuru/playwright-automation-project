import { test, expect } from './fixtures'; 
import { loadActiveSignupData } from '../data-loader/dataprovider';

const activeRecords = loadActiveSignupData();

test('authenticate user and save storage state via Page Objects', async ({ page, loginPage, signupPage }) => {
  if (!activeRecords || activeRecords.length === 0) {
    throw new Error("❌ Data Error: activeRecords array is empty!");
  }

  const primaryUser = activeRecords[0];

  // 1. Reuse your exact page object navigation steps
  await signupPage.navigate();
  await signupPage.goToSignupWithNetworkCheck();
  await expect(signupPage.signupHeader).toBeVisible();

  // 2. Execute your unified login method
    await loginPage.login(primaryUser.email, String(primaryUser.password));

  // 2. 💻 ADD THIS LINE: Wait for the visual confirmation element BEFORE saving
  await expect(page.getByText(/Logged in as/i)).toBeVisible({ timeout: 7000 });

  // 3. Now save the completely verified cookies state
  await page.context().storageState({ path: '.auth/user.json' });
});