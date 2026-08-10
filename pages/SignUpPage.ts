import { Page, Locator, expect } from '@playwright/test';

export class SignupPage {
  readonly page: Page;
  readonly loginLink: Locator;
  readonly signupHeader: Locator;
  readonly signupNameInput: Locator;
  readonly signupEmailInput: Locator;
  readonly signupButton: Locator;

  // Account Information Locators
  readonly formHeader: Locator;
  readonly genderRadio: Locator;
  readonly passwordInput: Locator;
  readonly daysSelect: Locator;
  readonly monthsSelect: Locator;
  readonly yearsSelect: Locator;
  readonly newsletterCheck: Locator;
  readonly optInCheck: Locator;

  // Address Locators
  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly companyInput: Locator;
  readonly addressInput: Locator;
  readonly countrySelect: Locator;
  readonly stateInput: Locator;
  readonly cityInput: Locator;
  readonly zipcodeInput: Locator;
  readonly mobileInput: Locator;
  readonly createAccountBtn: Locator;

  // Success & Teardown Locators
  readonly accountCreatedHeader: Locator;
  readonly continueBtn: Locator;
  readonly loggedInUserText: Locator;
  readonly deleteAccountLink: Locator;
  readonly accountDeletedHeader: Locator;

  constructor(page: Page) {
    this.page = page;
    this.loginLink = page.locator('a[href="/login"]');
    this.signupHeader = page.locator('h2:text("New User Signup!")');
    this.signupNameInput = page.locator('input[data-qa="signup-name"]');
    this.signupEmailInput = page.locator('input[data-qa="signup-email"]');
    this.signupButton = page.locator('button[data-qa="signup-button"]');

    this.formHeader = page.locator('b:text("Enter Account Information")');
    this.genderRadio = page.locator('#id_gender1');
    this.passwordInput = page.locator('#password');
    this.daysSelect = page.locator('#days');
    this.monthsSelect = page.locator('#months');
    this.yearsSelect = page.locator('#years');
    this.newsletterCheck = page.locator('#newsletter');
    this.optInCheck = page.locator('#optin');

    this.firstNameInput = page.locator('#first_name');
    this.lastNameInput = page.locator('#last_name');
    this.companyInput = page.locator('#company');
    this.addressInput = page.locator('#address1');
    this.countrySelect = page.locator('#country');
    this.stateInput = page.locator('#state');
    this.cityInput = page.locator('#city');
    this.zipcodeInput = page.locator('#zipcode');
    this.mobileInput = page.locator('#mobile_number');
    this.createAccountBtn = page.locator('button[data-qa="create-account"]');

    this.accountCreatedHeader = page.locator('b:text("Account Created!")');
    this.continueBtn = page.locator('a[data-qa="continue-button"]');
    this.loggedInUserText = page.locator('text=Logged in as ');
    this.deleteAccountLink = page.locator('a[href="/delete_account"]');
    this.accountDeletedHeader = page.locator('b:text("Account Deleted!")');
  }

  async navigate() {
    await this.page.goto('https://automationexercise.com');
  }

   async goToSignupWithNetworkCheck() {
    // 1. Set up a listener for the main page document response
    const responsePromise = this.page.waitForResponse(response => 
      response.url().includes('/login') && response.status() === 200
    );

    // 2. Perform the click that triggers the load
    await this.loginLink.click();

    // 3. Wait for the server response to resolve successfully
    const response = await responsePromise;
    
    // Explicit assertion on the API response status code
    expect(response.status()).toBe(200);
  }


  async fillInitialSignup(name: string, email: string) {
    await this.signupNameInput.fill(name);
    await this.signupEmailInput.fill(email);
    await this.signupButton.click();
  }

  async fillAccountDetails(password: string) {
    await this.genderRadio.check();
    await this.passwordInput.fill(password);
    await this.daysSelect.selectOption('15');
    await this.monthsSelect.selectOption('5');
    await this.yearsSelect.selectOption('1992');
    await this.newsletterCheck.check();
    await this.optInCheck.check();
  }

  async fillAddressDetails() {
    await this.firstNameInput.fill('John');
    await this.lastNameInput.fill('Doe');
    await this.companyInput.fill('Test Corp');
    await this.addressInput.fill('123 Main Street');
    await this.countrySelect.selectOption('United States');
    await this.stateInput.fill('Ohio');
    await this.cityInput.fill('Mason');
    await this.zipcodeInput.fill('45040');
    await this.mobileInput.fill('5550192834');
    await this.createAccountBtn.click();
  }

  async deleteAccount() {
    await this.deleteAccountLink.click();
  }
}