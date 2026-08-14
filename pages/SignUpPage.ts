import { Page, Locator, expect } from '@playwright/test';

export class SignupPage {
  readonly page: Page;
  readonly loginLink: Locator;
  readonly signupHeader: Locator;
  readonly signupNameInput: Locator;
  readonly signupEmailInput: Locator;
  readonly signupButton: Locator;
readonly emailInput: Locator;
  
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
  // readonly errorMessage: Locator;
  // readonly mainLoginbutton: Locator;
  // readonly logoutLink: Locator;
  // readonly loginHeader: Locator;
  // readonly loginButton: Locator;

  constructor(page: Page) {
    this.page = page;
  this.loginLink = page.getByRole('link', { name: 'Signup / Login' }); // Or whatever text is inside the link
this.signupHeader = page.locator('h2:text("New User Signup!")');
this.formHeader = page.getByText('Enter Account Information', { exact: false });
this.accountCreatedHeader = page.getByText('Account Created!', { exact: false });
this.accountDeletedHeader = page.getByText('Account Deleted!', { exact: false });

// --- Signup Form (Initial) ---
// Kept data-qa using getByTestId (highly recommended if you configure testIdAttribute: 'data-qa' in your playwright.config.ts)
this.signupNameInput = page.locator('input[data-qa="signup-name"]'); this.signupEmailInput = page.locator('input[data-qa="signup-email"]'); this.signupButton = page.locator('button[data-qa="signup-button"]'); 

// --- Account Information Form ---
// Replaced raw IDs with getByLabel. This assumes your form elements have corresponding <label> tags.
// If your HTML lacks labels, use getByRole('radio', { name: 'Mr.' }) or getByRole('textbox') instead.
this.genderRadio = page.getByLabel('Mr.'); 
this.passwordInput = page.getByLabel('Password'); 
this.daysSelect = page.locator('select[data-qa="days"]');
this.monthsSelect = page.locator('select[data-qa="months"]');
this.yearsSelect = page.locator('select[data-qa="years"]');

// --- Checkboxes ---
this.newsletterCheck = page.getByLabel('Sign up for our newsletter!'); 
this.optInCheck = page.getByLabel('Receive special offers from our partners!'); 

// --- Address Details ---
this.firstNameInput = page.getByLabel('First name *');
this.lastNameInput = page.getByLabel('Last name *');
this.companyInput = page.getByLabel('Company', { exact: true });
this.addressInput = page.locator('#address1');
this.countrySelect = page.getByLabel('Country ');
this.stateInput = page.getByLabel('state');
this.cityInput = page.getByLabel('city');
this.zipcodeInput = page.locator('#zipcode');
this.mobileInput = page.getByLabel('Mobile Number');

// --- Final Actions ---
this.createAccountBtn = page.getByRole('button', { name: 'Create Account' });
this.continueBtn = page.getByRole('link', { name: 'Continue' });
this.deleteAccountLink = page.getByRole('link', { name: 'Delete Account' });

// --- Dynamic Text ---
// Uses getByText with a regular expression to handle dynamic usernames following the prefix
this.loggedInUserText = page.getByText(/Logged in as /); 
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