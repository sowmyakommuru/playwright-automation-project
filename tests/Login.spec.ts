import { test, expect } from './fixtures';
import { loadSignupData } from '../data-loader/dataprovider';
import { SignupPage } from '../pages/SignUpPage';
import { loadActiveSignupData } from '../data-loader/dataprovider'; // Imported new function

// Automatically pulls only rows marked 'true'
const activeRecords = loadActiveSignupData();

const userRecords = loadSignupData();

test.describe('Automation Exercise - Login Tests', () => {

  // 1. Data-Driven Positive Tests (Valid credentials from your data)
  for (const record of activeRecords) {
    test(`Successful Login and Logout for user: ${record.name}`, async ({ loginPage, signupPage }) => {
     await signupPage.navigate();
    await signupPage.goToSignupWithNetworkCheck();
    await expect(signupPage.signupHeader).toBeVisible();
    await loginPage.login(record.email, String(record.password));
    });

}
});
  // 2. Negative Test: Invalid Credentials
  test('Should display error message with incorrect password', async ({ loginPage, signupPage }) => {
    await loginPage.navigate();
    await signupPage.goToSignupWithNetworkCheck();
    await expect(signupPage.signupHeader).toBeVisible();
    
    await loginPage.login('wrong_user@test.com', 'FakePassword123');

    // UI assertion verifying the specific validation error block appears
    await expect(loginPage.errorMessage).toBeVisible();
  });

  // 3. Multi-Page Interaction Test (Login -> Navigation)
  test('Should navigate between login page and home via navigation menu', async ({ loginPage, signupPage }) => {
    await loginPage.navigate();
    
    // Switch contexts using signup components inside the login test file safely
    await signupPage.navigate(); 
    await expect(loginPage.page).toHaveTitle(/Automation Exercise/);
  });


  