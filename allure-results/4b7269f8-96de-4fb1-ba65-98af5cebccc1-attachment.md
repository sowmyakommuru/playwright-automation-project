# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Login.spec.ts >> Verify successful login with valid credentials
- Location: tests\Login.spec.ts:4:5

# Error details

```
Error: page.goto: net::ERR_SSL_UNRECOGNIZED_NAME_ALERT at https://herokuapp.com/
Call log:
  - navigating to "https://herokuapp.com/", waiting until "load"

```

# Page snapshot

```yaml
- generic [ref=e6]:
  - heading "This site can’t be reached" [level=1] [ref=e7]
  - paragraph [ref=e8]:
    - text: The webpage at
    - strong [ref=e9]: https://herokuapp.com/
    - text: might be temporarily down or it may have moved permanently to a new web address.
  - generic [ref=e10]: ERR_SSL_UNRECOGNIZED_NAME_ALERT
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
  11 |         // Updated selectors to match the real website below
  12 |         this.usernameInput = page.locator('#username');
  13 |         this.passwordInput = page.locator('#password');
  14 |         this.loginButton = page.locator('button[type="submit"]');
  15 |     }
  16 | 
  17 |     async navigateTo() {
  18 |         // Real, active testing website URL
> 19 |         await this.page.goto('https://herokuapp.com');
     |                         ^ Error: page.goto: net::ERR_SSL_UNRECOGNIZED_NAME_ALERT at https://herokuapp.com/
  20 |     }
  21 | 
  22 |     async login(username: string, password: string) {
  23 |         await this.usernameInput.fill(username);
  24 |         await this.passwordInput.fill(password);
  25 |         await this.loginButton.click();
  26 |     }
  27 | }
```