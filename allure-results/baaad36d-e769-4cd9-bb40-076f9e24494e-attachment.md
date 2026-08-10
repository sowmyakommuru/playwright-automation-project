# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Login.spec.ts >> Verify successful login with valid credentials
- Location: tests\Login.spec.ts:4:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.fill: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('#username')

```

# Page snapshot

```yaml
- generic [ref=e2]:
  - heading "Example Domain" [level=1] [ref=e3]
  - paragraph [ref=e4]: This domain is for use in documentation examples without needing permission. Avoid use in operations.
  - paragraph [ref=e5]:
    - link "Learn more" [ref=e6] [cursor=pointer]:
      - /url: https://iana.org/domains/example
```

# Test source

```ts
  1  | import { Page, Locator } from '@playwright/test';
  2  | 
  3  | export class LoginPage {
  4  |     private readonly page: Page;
  5  |     private readonly usernameInput: Locator;
  6  |     private readonly passwordInput: Locator;
  7  |     private readonly loginButton: Locator;
  8  | 
  9  |     constructor(page: Page) {
  10 |         this.page = page;
  11 |         this.usernameInput = page.locator('#username');
  12 |         this.passwordInput = page.locator('#password');
  13 |         this.loginButton = page.locator('#login-button');
  14 |     }
  15 | 
  16 |     async navigateTo() {
  17 |         await this.page.goto('https://example.com');
  18 |     }
  19 | 
  20 |     async login(username: string, password: string) {
> 21 |         await this.usernameInput.fill(username);
     |                                  ^ Error: locator.fill: Test timeout of 30000ms exceeded.
  22 |         await this.passwordInput.fill(password);
  23 |         await this.loginButton.click();
  24 |     }
  25 | }
```