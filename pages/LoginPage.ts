import { Page, Locator, expect } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly loginHeader: Locator;
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly errorMessage: Locator;
  readonly logoutLink: Locator;
  readonly mainLoginbutton: Locator;
  readonly loginLink: Locator;
  readonly signupHeader: Locator;

  constructor(page: Page) {
    this.page = page;
    this.loginLink = page.locator('a[href="/login"]');
    this.signupHeader = page.locator('h2:text("New User Signup!")');
    this.mainLoginbutton = page.locator('[name=" Signup / Login"]');
    this.loginHeader = page.locator('h2:text("New User Signup!")');
    this.emailInput = page.locator('input[data-qa="login-email"]');
    this.passwordInput = page.locator('input[data-qa="login-password"]');
    this.loginButton = page.locator('button[data-qa="login-button"]');
    this.errorMessage = page.locator('p:text("Your email or password is incorrect!")');
    this.logoutLink = page.locator('a[href="/logout"]');
  }

  async navigate() {
    await this.page.goto('https://automationexercise.com');
  }

  async login(email: string, pass: string) {
    // Listen for the network response of the login form submission
    const responsePromise = this.page.waitForResponse(response => 
      response.url().includes('/login')
    );

    await this.emailInput.fill(email);
    await this.passwordInput.fill(pass);
    await this.loginButton.click();

    // const response = await responsePromise;
    // expect(response.ok()).toBeTruthy();
    // const jsonBody = await response.json();
    // // Check the key-value pair
    // expect(jsonBody).toHaveProperty('isLoggedIn', true);
  }
}