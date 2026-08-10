# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Login.spec.ts >> ParaBank Login Functionality >> TC-02: Verify News link goes to News page
- Location: tests\Login.spec.ts:26:9

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('h1.title')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('h1.title')

```

```yaml
- link:
  - /url: admin.htm;jsessionid=B1C4BC143CEE59B16B1496D3D6F2F99C
  - img
- link "ParaBank":
  - /url: index.htm;jsessionid=B1C4BC143CEE59B16B1496D3D6F2F99C
  - img "ParaBank"
- paragraph: Experience the difference
- list:
  - listitem: Solutions
  - listitem:
    - link "About Us":
      - /url: about.htm;jsessionid=B1C4BC143CEE59B16B1496D3D6F2F99C
  - listitem:
    - link "Services":
      - /url: services.htm;jsessionid=B1C4BC143CEE59B16B1496D3D6F2F99C
  - listitem:
    - link "Products":
      - /url: http://www.parasoft.com/jsp/products.jsp
  - listitem:
    - link "Locations":
      - /url: http://www.parasoft.com/jsp/pr/contacts.jsp
  - listitem:
    - link "Admin Page":
      - /url: admin.htm;jsessionid=B1C4BC143CEE59B16B1496D3D6F2F99C
- list:
  - listitem:
    - link "home":
      - /url: index.htm;jsessionid=B1C4BC143CEE59B16B1496D3D6F2F99C
  - listitem:
    - link "about":
      - /url: about.htm;jsessionid=B1C4BC143CEE59B16B1496D3D6F2F99C
  - listitem:
    - link "contact":
      - /url: contact.htm;jsessionid=B1C4BC143CEE59B16B1496D3D6F2F99C
- heading "Customer Login" [level=2]
- paragraph: Username
- textbox
- paragraph: Password
- textbox
- button "Log In"
- paragraph:
  - link "Forgot login info?":
    - /url: lookup.htm;jsessionid=B1C4BC143CEE59B16B1496D3D6F2F99C
- paragraph:
  - link "Register":
    - /url: register.htm;jsessionid=B1C4BC143CEE59B16B1496D3D6F2F99C
- list:
  - listitem: ATM Services
  - listitem:
    - link "Withdraw Funds":
      - /url: services/ParaBank;jsessionid=B1C4BC143CEE59B16B1496D3D6F2F99C?wsdl
  - listitem:
    - link "Transfer Funds":
      - /url: services/ParaBank;jsessionid=B1C4BC143CEE59B16B1496D3D6F2F99C?wsdl
  - listitem:
    - link "Check Balances":
      - /url: services/ParaBank;jsessionid=B1C4BC143CEE59B16B1496D3D6F2F99C?wsdl
  - listitem:
    - link "Make Deposits":
      - /url: services/ParaBank;jsessionid=B1C4BC143CEE59B16B1496D3D6F2F99C?wsdl
- list:
  - listitem: Online Services
  - listitem:
    - link "Bill Pay":
      - /url: services/bank;jsessionid=B1C4BC143CEE59B16B1496D3D6F2F99C?_wadl&_type=xml
  - listitem:
    - link "Account History":
      - /url: services/bank;jsessionid=B1C4BC143CEE59B16B1496D3D6F2F99C?_wadl&_type=xml
  - listitem:
    - link "Transfer Funds":
      - /url: services/bank;jsessionid=B1C4BC143CEE59B16B1496D3D6F2F99C?_wadl&_type=xml
- paragraph:
  - link "Read More":
    - /url: services.htm;jsessionid=B1C4BC143CEE59B16B1496D3D6F2F99C
- heading "Latest News" [level=4]
- list:
  - listitem: 08/05/2026
  - listitem:
    - link "ParaBank Is Now Re-Opened":
      - /url: news.htm;jsessionid=B1C4BC143CEE59B16B1496D3D6F2F99C#6
  - listitem:
    - link "New! Online Bill Pay":
      - /url: news.htm;jsessionid=B1C4BC143CEE59B16B1496D3D6F2F99C#5
  - listitem:
    - link "New! Online Account Transfers":
      - /url: news.htm;jsessionid=B1C4BC143CEE59B16B1496D3D6F2F99C#4
- paragraph:
  - link "Read More":
    - /url: news.htm;jsessionid=B1C4BC143CEE59B16B1496D3D6F2F99C
- list:
  - listitem:
    - link "Home":
      - /url: index.htm;jsessionid=B1C4BC143CEE59B16B1496D3D6F2F99C
    - text: "|"
  - listitem:
    - link "About Us":
      - /url: about.htm;jsessionid=B1C4BC143CEE59B16B1496D3D6F2F99C
    - text: "|"
  - listitem:
    - link "Services":
      - /url: services.htm;jsessionid=B1C4BC143CEE59B16B1496D3D6F2F99C
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
      - /url: sitemap.htm;jsessionid=B1C4BC143CEE59B16B1496D3D6F2F99C
    - text: "|"
  - listitem:
    - link "Contact Us":
      - /url: contact.htm;jsessionid=B1C4BC143CEE59B16B1496D3D6F2F99C
- paragraph: © Parasoft. All rights reserved.
- list:
  - listitem: "Visit us at:"
  - listitem:
    - link "www.parasoft.com":
      - /url: http://www.parasoft.com/
```

# Test source

```ts
  1  | import { Page, Locator, expect } from '@playwright/test';
  2  | export class NewsPage {
  3  |     readonly page: Page;
  4  |    // readonly openNewAccountLink: Locator;
  5  |     readonly pageHeader: Locator;
  6  | 
  7  |     constructor(page: Page) {
  8  |         this.page = page;
  9  |         // Locator for the side navigation menu link
  10 |         //this.openNewAccountLink = page.locator('a:has-text("Open New Account")');
  11 |         // Locator for the structural title header on the resulting page
  12 |         this.pageHeader = page.locator('h1.title');
  13 |     }
  14 | 
  15 |     async VerifyPageHeaderText(expectedText: string) {
  16 |        // await this.openNewAccountLink.click();
> 17 |        await expect(this.pageHeader).toBeVisible();
     |                                      ^ Error: expect(locator).toBeVisible() failed
  18 |        await expect(this.pageHeader).toContainText(expectedText);}
  19 | }
```