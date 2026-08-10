# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Login.spec.ts >> Should display error message with incorrect password
- Location: tests\Login.spec.ts:22:7

# Error details

```
Error: page.waitForResponse: Target page, context or browser has been closed
```

```
Error: locator.fill: Target page, context or browser has been closed
Call log:
  - waiting for locator('input[data-qa="login-email"]')

```

# Test source

```ts
  1  | import { Page, Locator, expect } from '@playwright/test';
  2  | 
  3  | export class LoginPage {
  4  |   readonly page: Page;
  5  |   readonly loginHeader: Locator;
  6  |   readonly emailInput: Locator;
  7  |   readonly passwordInput: Locator;
  8  |   readonly loginButton: Locator;
  9  |   readonly errorMessage: Locator;
  10 |   readonly logoutLink: Locator;
  11 |   readonly mainLoginbutton: Locator;
  12 | 
  13 |   constructor(page: Page) {
  14 |     this.page = page;
  15 |     this.mainLoginbutton = page.locator('[name=" Signup / Login"]');
  16 |     this.loginHeader = page.locator('h2:text("New User Signup!")');
  17 |     this.emailInput = page.locator('input[data-qa="login-email"]');
  18 |     this.passwordInput = page.locator('input[data-qa="login-password"]');
  19 |     this.loginButton = page.locator('button[data-qa="login-button"]');
  20 |     this.errorMessage = page.locator('p:text("Your email or password is incorrect!")');
  21 |     this.logoutLink = page.locator('a[href="/logout"]');
  22 |   }
  23 | 
  24 |   async navigate() {
  25 |     await this.page.goto('https://automationexercise.com');
  26 |   }
  27 |   async clickMainLoginButton() {
  28 |     await this.mainLoginbutton.click();
  29 | }
  30 |   async login(email: string, pass: string) {
  31 |     // Listen for the network response of the login form submission
  32 |     const responsePromise = this.page.waitForResponse(response => 
  33 |       response.url().includes('/login')
  34 |     );
  35 | 
> 36 |     await this.emailInput.fill(email);
     |                           ^ Error: locator.fill: Target page, context or browser has been closed
  37 |     await this.passwordInput.fill(pass);
  38 |     await this.loginButton.click();
  39 | 
  40 |     return await responsePromise;
  41 |   }
  42 | }
```