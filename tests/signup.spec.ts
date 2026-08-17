import { test, expect } from '@playwright/test';
import { SignupPage } from '../pages/SignUpPage';
import { loadSignupData } from '../data-loader/dataprovider';
import { loadActiveSignupData } from '../data-loader/dataprovider'; // Imported new function

// Automatically pulls only rows marked 'true'
const activeRecords = loadActiveSignupData();

// Load the data directly before generating the test suite blocks
const userRecords = loadSignupData();
test.beforeEach(async ({ page, context }) => {
  // 1. Clear all cookies for this context
  await context.clearCookies();
});

for (const record of activeRecords) {
  test(`Data Driven Signup for user: ${record.name}`, async ({ page }) => {
    const signupPage = new SignupPage(page);
    const timestamp = Date.now();
    const uniqueEmail = record.email.replace('@', `_${timestamp}@`);

    // 1. Setup & Navigation
    await signupPage.navigate();
    await signupPage.goToSignupWithNetworkCheck();
    await expect(signupPage.signupHeader).toBeVisible();

    // 2. Submit initial signup
    await signupPage.fillInitialSignup(record.name, uniqueEmail);
    await expect(signupPage.formHeader).toBeVisible();

    // 3. Populate Account details via helper methods
    await signupPage.genderRadio.check();
    await signupPage.passwordInput.fill(String(record.password));
    await signupPage.daysSelect.selectOption(String(record.day));
    await signupPage.monthsSelect.selectOption(String(record.month));
    await signupPage.yearsSelect.selectOption(String(record.year));
    await signupPage.newsletterCheck.check();
    await signupPage.optInCheck.check();

    // 4. Populate Address details
    await signupPage.firstNameInput.fill(record.firstName);
    await signupPage.lastNameInput.fill(record.lastName);
    await signupPage.companyInput.fill(record.company);
    await signupPage.addressInput.fill(record.address);
    await signupPage.countrySelect.selectOption(record.country);
    await signupPage.stateInput.fill(record.state);
    await signupPage.cityInput.fill(record.city);
    await signupPage.zipcodeInput.fill(String(record.zipcode));
    await signupPage.mobileInput.fill(String(record.mobileNumber));
    await signupPage.createAccountBtn.click();

    // 5. Verify Successful state
    await expect(signupPage.accountCreatedHeader).toBeVisible();
    await signupPage.continueBtn.click();
    await expect(page.locator(`text=Logged in as ${record.name}`)).toBeVisible();

    // 6. Tear Down / Clean Up Environment state
    await signupPage.deleteAccount();
    await expect(signupPage.accountDeletedHeader).toBeVisible();
    await signupPage.continueBtn.click();
  });
}
