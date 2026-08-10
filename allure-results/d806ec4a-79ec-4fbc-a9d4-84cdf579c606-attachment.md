# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Login.spec.ts >> ParaBank Login Functionality >> TC-02: Should display error message with invalid credentials
- Location: tests\Login.spec.ts:22:9

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator:  locator('p.error')
Expected: visible
Received: hidden
Timeout:  5000ms

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('p.error')
    13 × locator resolved to <p class="error">↵⇆⇆⇆An internal error has occurred and has been l…</p>
       - unexpected value "hidden"

```

```yaml
- link:
  - /url: admin.htm
  - img
- link "ParaBank":
  - /url: index.htm
  - img "ParaBank"
- paragraph: Experience the difference
- list:
  - listitem: Solutions
  - listitem:
    - link "About Us":
      - /url: about.htm
  - listitem:
    - link "Services":
      - /url: services.htm
  - listitem:
    - link "Products":
      - /url: http://www.parasoft.com/jsp/products.jsp
  - listitem:
    - link "Locations":
      - /url: http://www.parasoft.com/jsp/pr/contacts.jsp
  - listitem:
    - link "Admin Page":
      - /url: admin.htm
- list:
  - listitem:
    - link "home":
      - /url: index.htm
  - listitem:
    - link "about":
      - /url: about.htm
  - listitem:
    - link "contact":
      - /url: contact.htm
- paragraph: Welcome John Smith
- heading "Account Services" [level=2]
- list:
  - listitem:
    - link "Open New Account":
      - /url: openaccount.htm
  - listitem:
    - link "Accounts Overview":
      - /url: overview.htm
  - listitem:
    - link "Transfer Funds":
      - /url: transfer.htm
  - listitem:
    - link "Bill Pay":
      - /url: billpay.htm
  - listitem:
    - link "Find Transactions":
      - /url: findtrans.htm
  - listitem:
    - link "Update Contact Info":
      - /url: updateprofile.htm
  - listitem:
    - link "Request Loan":
      - /url: requestloan.htm
  - listitem:
    - link "Log Out":
      - /url: logout.htm
- heading "Accounts Overview" [level=1]
- table:
  - rowgroup:
    - row "Account Balance* Available Amount":
      - columnheader "Account"
      - columnheader "Balance*"
      - columnheader "Available Amount"
  - rowgroup:
    - row "12345 -$2300.01 $0.00":
      - cell "12345":
        - link "12345":
          - /url: activity.htm?id=12345
      - cell "-$2300.01"
      - cell "$0.00"
    - row "12456 $10.45 $10.45":
      - cell "12456":
        - link "12456":
          - /url: activity.htm?id=12456
      - cell "$10.45"
      - cell "$10.45"
    - row "12567 $100.00 $100.00":
      - cell "12567":
        - link "12567":
          - /url: activity.htm?id=12567
      - cell "$100.00"
      - cell "$100.00"
    - row "12678 -$100.00 $0.00":
      - cell "12678":
        - link "12678":
          - /url: activity.htm?id=12678
      - cell "-$100.00"
      - cell "$0.00"
    - row "12789 $100.00 $100.00":
      - cell "12789":
        - link "12789":
          - /url: activity.htm?id=12789
      - cell "$100.00"
      - cell "$100.00"
    - row "12900 $0.00 $0.00":
      - cell "12900":
        - link "12900":
          - /url: activity.htm?id=12900
      - cell "$0.00"
      - cell "$0.00"
    - row "13011 $100.00 $100.00":
      - cell "13011":
        - link "13011":
          - /url: activity.htm?id=13011
      - cell "$100.00"
      - cell "$100.00"
    - row "13122 $1100.00 $1100.00":
      - cell "13122":
        - link "13122":
          - /url: activity.htm?id=13122
      - cell "$1100.00"
      - cell "$1100.00"
    - row "13233 $100.00 $100.00":
      - cell "13233":
        - link "13233":
          - /url: activity.htm?id=13233
      - cell "$100.00"
      - cell "$100.00"
    - row "13344 $1231.10 $1231.10":
      - cell "13344":
        - link "13344":
          - /url: activity.htm?id=13344
      - cell "$1231.10"
      - cell "$1231.10"
    - row "15342 $0.01 $0.01":
      - cell "15342":
        - link "15342":
          - /url: activity.htm?id=15342
      - cell "$0.01"
      - cell "$0.01"
    - row "54321 $1351.12 $1351.12":
      - cell "54321":
        - link "54321":
          - /url: activity.htm?id=54321
      - cell "$1351.12"
      - cell "$1351.12"
    - row "Total $1692.67":
      - cell "Total"
      - cell "$1692.67"
      - cell
  - rowgroup:
    - row "*Balance includes deposits that may be subject to holds":
      - cell "*Balance includes deposits that may be subject to holds"
- list:
  - listitem:
    - link "Home":
      - /url: index.htm
    - text: "|"
  - listitem:
    - link "About Us":
      - /url: about.htm
    - text: "|"
  - listitem:
    - link "Services":
      - /url: services.htm
    - text: "|"
  - listitem:
    - link "Products":
      - /url: http://www.parasoft.com/jsp/products.jsp
    - text: "|"
  - listitem:
    - link "Locations":
      - /url: http://www.parasoft.com/jsp/pr/contacts.jsp
    - text: "|"
  - listitem:
    - link "Forum":
      - /url: http://forums.parasoft.com/
    - text: "|"
  - listitem:
    - link "Site Map":
      - /url: sitemap.htm
    - text: "|"
  - listitem:
    - link "Contact Us":
      - /url: contact.htm
- paragraph: © Parasoft. All rights reserved.
- list:
  - listitem: "Visit us at:"
  - listitem:
    - link "www.parasoft.com":
      - /url: http://www.parasoft.com/
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | import { LoginPage } from '../pages/LoginPage';
  3  | 
  4  | test.describe('ParaBank Login Functionality', () => {
  5  |     let loginPage: LoginPage;
  6  | 
  7  |     // Runs before every individual test case
  8  |     test.beforeEach(async ({ page }) => {
  9  |         loginPage = new LoginPage(page);
  10 |         await loginPage.navigate();
  11 |     });
  12 | 
  13 |     test('TC-01: Should login successfully with valid credentials', async () => {
  14 |         // NOTE: Make sure you have previously registered 'testuser123' manually or via automation 
  15 |         await loginPage.login('SowmyaTest', 'Test1234');
  16 |         
  17 |         // Assert successful login state
  18 |        // await expect(loginPage.welcomeMessage).toBeVisible();
  19 |         //await expect(loginPage.welcomeMessage).toContainText('Welcome');
  20 |     });
  21 | 
  22 |     test('TC-02: Should display error message with invalid credentials', async () => {
  23 |         await loginPage.login('wrongUser', 'wrongPassword');
  24 |         
  25 |         // Assert failure validations are handled safely
> 26 |         await expect(loginPage.errorMessage).toBeVisible();
     |                                              ^ Error: expect(locator).toBeVisible() failed
  27 |         await expect(loginPage.errorMessage).toContainText('The username and password could not be verified.');
  28 |     });
  29 | 
  30 |     test('TC-03: Should prompt validation error when password is empty', async () => {
  31 |         await loginPage.usernameInput.fill('testuser123');
  32 |         await loginPage.loginButton.click();
  33 |         
  34 |         // Assert system alerts user to complete required input
  35 |         await expect(loginPage.errorMessage).toBeVisible();
  36 |         await expect(loginPage.errorMessage).toContainText('Please enter a username and password.');
  37 |     });
  38 | });
```