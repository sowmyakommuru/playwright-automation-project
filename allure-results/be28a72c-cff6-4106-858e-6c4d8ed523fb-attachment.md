# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Login.spec.ts >> Automation Exercise - Login Tests >> Successful Login and Logout for user: Alice Smith
- Location: tests\Login.spec.ts:10:9

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('h2:text("New User Signup!")')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('h2:text("New User Signup!")')

```

```yaml
- banner:
  - link "Website for automation practice":
    - /url: /
    - img "Website for automation practice"
  - list:
    - listitem:
      - link " Home":
        - /url: /
    - listitem:
      - link " Products":
        - /url: /products
    - listitem:
      - link " Cart":
        - /url: /view_cart
    - listitem:
      - link " Signup / Login":
        - /url: /login
    - listitem:
      - link " Test Cases":
        - /url: /test_cases
    - listitem:
      - link " API Testing":
        - /url: /api_list
    - listitem:
      - link " Video Tutorials":
        - /url: https://www.youtube.com/c/AutomationExercise
    - listitem:
      - link " Contact us":
        - /url: /contact_us
- list:
  - listitem
  - listitem
  - listitem
- heading "AutomationExercise" [level=1]
- heading "Full-Fledged practice website for Automation Engineers" [level=2]
- paragraph: All QA engineers can use this website for automation practice and API testing either they are at beginner or advance level. This is for everybody to help them brush up their automation skills.
- link "Test Cases":
  - /url: /test_cases
  - button "Test Cases"
- link "APIs list for practice":
  - /url: /api_list
  - button "APIs list for practice"
- img "demo website for practice"
- link "":
  - /url: "#slider-carousel"
- link "":
  - /url: "#slider-carousel"
- heading "Category" [level=2]
- heading " Women" [level=4]:
  - link " Women":
    - /url: "#Women"
- heading " Men" [level=4]:
  - link " Men":
    - /url: "#Men"
- heading " Kids" [level=4]:
  - link " Kids":
    - /url: "#Kids"
- insertion:
  - iframe
- heading "Brands" [level=2]
- list:
  - listitem:
    - link "(6) Polo":
      - /url: /brand_products/Polo
  - listitem:
    - link "(5) H&M":
      - /url: /brand_products/H&M
  - listitem:
    - link "(5) Madame":
      - /url: /brand_products/Madame
  - listitem:
    - link "(3) Mast & Harbour":
      - /url: /brand_products/Mast & Harbour
  - listitem:
    - link "(4) Babyhug":
      - /url: /brand_products/Babyhug
  - listitem:
    - link "(3) Allen Solly Junior":
      - /url: /brand_products/Allen Solly Junior
  - listitem:
    - link "(3) Kookie Kids":
      - /url: /brand_products/Kookie Kids
  - listitem:
    - link "(5) Biba":
      - /url: /brand_products/Biba
- heading "Features Items" [level=2]
- img "ecommerce website products"
- heading "Rs. 500" [level=2]
- paragraph: Blue Top
- text:  Add to cart
- heading "Rs. 500" [level=2]
- paragraph: Blue Top
- text:  Add to cart
- list:
  - listitem:
    - link " View Product":
      - /url: /product_details/1
- img "ecommerce website products"
- heading "Rs. 400" [level=2]
- paragraph: Men Tshirt
- text:  Add to cart
- heading "Rs. 400" [level=2]
- paragraph: Men Tshirt
- text:  Add to cart
- list:
  - listitem:
    - link " View Product":
      - /url: /product_details/2
- img "ecommerce website products"
- heading "Rs. 1000" [level=2]
- paragraph: Sleeveless Dress
- text:  Add to cart
- heading "Rs. 1000" [level=2]
- paragraph: Sleeveless Dress
- text:  Add to cart
- list:
  - listitem:
    - link " View Product":
      - /url: /product_details/3
- img "ecommerce website products"
- heading "Rs. 1500" [level=2]
- paragraph: Stylish Dress
- text:  Add to cart
- heading "Rs. 1500" [level=2]
- paragraph: Stylish Dress
- text:  Add to cart
- list:
  - listitem:
    - link " View Product":
      - /url: /product_details/4
- img "ecommerce website products"
- heading "Rs. 600" [level=2]
- paragraph: Winter Top
- text:  Add to cart
- heading "Rs. 600" [level=2]
- paragraph: Winter Top
- text:  Add to cart
- list:
  - listitem:
    - link " View Product":
      - /url: /product_details/5
- img "ecommerce website products"
- heading "Rs. 400" [level=2]
- paragraph: Summer White Top
- text:  Add to cart
- heading "Rs. 400" [level=2]
- paragraph: Summer White Top
- text:  Add to cart
- list:
  - listitem:
    - link " View Product":
      - /url: /product_details/6
- img "ecommerce website products"
- heading "Rs. 1000" [level=2]
- paragraph: Madame Top For Women
- text:  Add to cart
- heading "Rs. 1000" [level=2]
- paragraph: Madame Top For Women
- text:  Add to cart
- list:
  - listitem:
    - link " View Product":
      - /url: /product_details/7
- img "ecommerce website products"
- heading "Rs. 700" [level=2]
- paragraph: Fancy Green Top
- text:  Add to cart
- heading "Rs. 700" [level=2]
- paragraph: Fancy Green Top
- text:  Add to cart
- list:
  - listitem:
    - link " View Product":
      - /url: /product_details/8
- img "ecommerce website products"
- heading "Rs. 499" [level=2]
- paragraph: Sleeves Printed Top - White
- text:  Add to cart
- heading "Rs. 499" [level=2]
- paragraph: Sleeves Printed Top - White
- text:  Add to cart
- list:
  - listitem:
    - link " View Product":
      - /url: /product_details/11
- img "ecommerce website products"
- heading "Rs. 359" [level=2]
- paragraph: Half Sleeves Top Schiffli Detailing - Pink
- text:  Add to cart
- heading "Rs. 359" [level=2]
- paragraph: Half Sleeves Top Schiffli Detailing - Pink
- text:  Add to cart
- list:
  - listitem:
    - link " View Product":
      - /url: /product_details/12
- img "ecommerce website products"
- heading "Rs. 278" [level=2]
- paragraph: Frozen Tops For Kids
- text:  Add to cart
- heading "Rs. 278" [level=2]
- paragraph: Frozen Tops For Kids
- text:  Add to cart
- list:
  - listitem:
    - link " View Product":
      - /url: /product_details/13
- img "ecommerce website products"
- heading "Rs. 679" [level=2]
- paragraph: Full Sleeves Top Cherry - Pink
- text:  Add to cart
- heading "Rs. 679" [level=2]
- paragraph: Full Sleeves Top Cherry - Pink
- text:  Add to cart
- list:
  - listitem:
    - link " View Product":
      - /url: /product_details/14
- img "ecommerce website products"
- heading "Rs. 315" [level=2]
- paragraph: Printed Off Shoulder Top - White
- text:  Add to cart
- heading "Rs. 315" [level=2]
- paragraph: Printed Off Shoulder Top - White
- text:  Add to cart
- list:
  - listitem:
    - link " View Product":
      - /url: /product_details/15
- img "ecommerce website products"
- heading "Rs. 478" [level=2]
- paragraph: Sleeves Top and Short - Blue & Pink
- text:  Add to cart
- heading "Rs. 478" [level=2]
- paragraph: Sleeves Top and Short - Blue & Pink
- text:  Add to cart
- list:
  - listitem:
    - link " View Product":
      - /url: /product_details/16
- img "ecommerce website products"
- heading "Rs. 1200" [level=2]
- paragraph: Little Girls Mr. Panda Shirt
- text:  Add to cart
- heading "Rs. 1200" [level=2]
- paragraph: Little Girls Mr. Panda Shirt
- text:  Add to cart
- list:
  - listitem:
    - link " View Product":
      - /url: /product_details/18
- img "ecommerce website products"
- heading "Rs. 1050" [level=2]
- paragraph: Sleeveless Unicorn Patch Gown - Pink
- text:  Add to cart
- heading "Rs. 1050" [level=2]
- paragraph: Sleeveless Unicorn Patch Gown - Pink
- text:  Add to cart
- list:
  - listitem:
    - link " View Product":
      - /url: /product_details/19
- img "ecommerce website products"
- heading "Rs. 1190" [level=2]
- paragraph: Cotton Mull Embroidered Dress
- text:  Add to cart
- heading "Rs. 1190" [level=2]
- paragraph: Cotton Mull Embroidered Dress
- text:  Add to cart
- list:
  - listitem:
    - link " View Product":
      - /url: /product_details/20
- img "ecommerce website products"
- heading "Rs. 1530" [level=2]
- paragraph: Blue Cotton Indie Mickey Dress
- text:  Add to cart
- heading "Rs. 1530" [level=2]
- paragraph: Blue Cotton Indie Mickey Dress
- text:  Add to cart
- list:
  - listitem:
    - link " View Product":
      - /url: /product_details/21
- img "ecommerce website products"
- heading "Rs. 1600" [level=2]
- paragraph: Long Maxi Tulle Fancy Dress Up Outfits -Pink
- text:  Add to cart
- heading "Rs. 1600" [level=2]
- paragraph: Long Maxi Tulle Fancy Dress Up Outfits -Pink
- text:  Add to cart
- list:
  - listitem:
    - link " View Product":
      - /url: /product_details/22
- img "ecommerce website products"
- heading "Rs. 1100" [level=2]
- paragraph: Sleeveless Unicorn Print Fit & Flare Net Dress - Multi
- text:  Add to cart
- heading "Rs. 1100" [level=2]
- paragraph: Sleeveless Unicorn Print Fit & Flare Net Dress - Multi
- text:  Add to cart
- list:
  - listitem:
    - link " View Product":
      - /url: /product_details/23
- img "ecommerce website products"
- heading "Rs. 849" [level=2]
- paragraph: Colour Blocked Shirt – Sky Blue
- text:  Add to cart
- heading "Rs. 849" [level=2]
- paragraph: Colour Blocked Shirt – Sky Blue
- text:  Add to cart
- list:
  - listitem:
    - link " View Product":
      - /url: /product_details/24
- img "ecommerce website products"
- heading "Rs. 1299" [level=2]
- paragraph: Pure Cotton V-Neck T-Shirt
- text:  Add to cart
- heading "Rs. 1299" [level=2]
- paragraph: Pure Cotton V-Neck T-Shirt
- text:  Add to cart
- list:
  - listitem:
    - link " View Product":
      - /url: /product_details/28
- img "ecommerce website products"
- heading "Rs. 1000" [level=2]
- paragraph: Green Side Placket Detail T-Shirt
- text:  Add to cart
- heading "Rs. 1000" [level=2]
- paragraph: Green Side Placket Detail T-Shirt
- text:  Add to cart
- list:
  - listitem:
    - link " View Product":
      - /url: /product_details/29
- img "ecommerce website products"
- heading "Rs. 1500" [level=2]
- paragraph: Premium Polo T-Shirts
- text:  Add to cart
- heading "Rs. 1500" [level=2]
- paragraph: Premium Polo T-Shirts
- text:  Add to cart
- list:
  - listitem:
    - link " View Product":
      - /url: /product_details/30
- img "ecommerce website products"
- heading "Rs. 850" [level=2]
- paragraph: Pure Cotton Neon Green Tshirt
- text:  Add to cart
- heading "Rs. 850" [level=2]
- paragraph: Pure Cotton Neon Green Tshirt
- text:  Add to cart
- list:
  - listitem:
    - link " View Product":
      - /url: /product_details/31
- img "ecommerce website products"
- heading "Rs. 799" [level=2]
- paragraph: Soft Stretch Jeans
- text:  Add to cart
- heading "Rs. 799" [level=2]
- paragraph: Soft Stretch Jeans
- text:  Add to cart
- list:
  - listitem:
    - link " View Product":
      - /url: /product_details/33
- img "ecommerce website products"
- heading "Rs. 1200" [level=2]
- paragraph: Regular Fit Straight Jeans
- text:  Add to cart
- heading "Rs. 1200" [level=2]
- paragraph: Regular Fit Straight Jeans
- text:  Add to cart
- list:
  - listitem:
    - link " View Product":
      - /url: /product_details/35
- img "ecommerce website products"
- heading "Rs. 1400" [level=2]
- paragraph: Grunt Blue Slim Fit Jeans
- text:  Add to cart
- heading "Rs. 1400" [level=2]
- paragraph: Grunt Blue Slim Fit Jeans
- text:  Add to cart
- list:
  - listitem:
    - link " View Product":
      - /url: /product_details/37
- img "ecommerce website products"
- heading "Rs. 2300" [level=2]
- paragraph: Rose Pink Embroidered Maxi Dress
- text:  Add to cart
- heading "Rs. 2300" [level=2]
- paragraph: Rose Pink Embroidered Maxi Dress
- text:  Add to cart
- list:
  - listitem:
    - link " View Product":
      - /url: /product_details/38
- img "ecommerce website products"
- heading "Rs. 3000" [level=2]
- paragraph: Cotton Silk Hand Block Print Saree
- text:  Add to cart
- heading "Rs. 3000" [level=2]
- paragraph: Cotton Silk Hand Block Print Saree
- text:  Add to cart
- list:
  - listitem:
    - link " View Product":
      - /url: /product_details/39
- img "ecommerce website products"
- heading "Rs. 3500" [level=2]
- paragraph: Rust Red Linen Saree
- text:  Add to cart
- heading "Rs. 3500" [level=2]
- paragraph: Rust Red Linen Saree
- text:  Add to cart
- list:
  - listitem:
    - link " View Product":
      - /url: /product_details/40
- img "ecommerce website products"
- heading "Rs. 5000" [level=2]
- paragraph: Beautiful Peacock Blue Cotton Linen Saree
- text:  Add to cart
- heading "Rs. 5000" [level=2]
- paragraph: Beautiful Peacock Blue Cotton Linen Saree
- text:  Add to cart
- list:
  - listitem:
    - link " View Product":
      - /url: /product_details/41
- img "ecommerce website products"
- heading "Rs. 1400" [level=2]
- paragraph: Lace Top For Women
- text:  Add to cart
- heading "Rs. 1400" [level=2]
- paragraph: Lace Top For Women
- text:  Add to cart
- list:
  - listitem:
    - link " View Product":
      - /url: /product_details/42
- img "ecommerce website products"
- heading "Rs. 1389" [level=2]
- paragraph: GRAPHIC DESIGN MEN T SHIRT - BLUE
- text:  Add to cart
- heading "Rs. 1389" [level=2]
- paragraph: GRAPHIC DESIGN MEN T SHIRT - BLUE
- text:  Add to cart
- list:
  - listitem:
    - link " View Product":
      - /url: /product_details/43
- heading "recommended items" [level=2]
- img "ecommerce website products"
- heading "Rs. 1500" [level=2]
- paragraph: Stylish Dress
- text:  Add to cart
- img "ecommerce website products"
- heading "Rs. 600" [level=2]
- paragraph: Winter Top
- text:  Add to cart
- img "ecommerce website products"
- heading "Rs. 400" [level=2]
- paragraph: Summer White Top
- text:  Add to cart
- link "":
  - /url: "#recommended-item-carousel"
- link "":
  - /url: "#recommended-item-carousel"
- insertion
- contentinfo:
  - heading "Subscription" [level=2]
  - textbox "Your email address"
  - button ""
  - paragraph: Get the most recent updates from our site and be updated your self...
  - paragraph: Copyright © 2021 All rights reserved
```

# Test source

```ts
  1  | import { test, expect } from './fixtures';
  2  | import { loadSignupData } from '../data-loader/dataprovider';
  3  | 
  4  | const userRecords = loadSignupData();
  5  | 
  6  | test.describe('Automation Exercise - Login Tests', () => {
  7  | 
  8  |   // 1. Data-Driven Positive Tests (Valid credentials from your data)
  9  |   for (const record of userRecords) {
  10 |     test(`Successful Login and Logout for user: ${record.name}`, async ({ loginPage }) => {
  11 |       await loginPage.navigate();
> 12 |       await expect(loginPage.loginHeader).toBeVisible();
     |                                           ^ Error: expect(locator).toBeVisible() failed
  13 |       await loginPage.clickMainLoginButton();
  14 | 
  15 |       // Submit login form and intercept network response
  16 |       const response = await loginPage.login(record.email, String(record.password));
  17 |       
  18 |       // API verification: Check if login form redirection context is healthy
  19 |       expect(response.status()).toBe(200);
  20 | 
  21 |       // UI verification
  22 |       await expect(loginPage.page.locator(`text=Logged in as ${record.name}`)).toBeVisible();
  23 | 
  24 |       // Perform Logout
  25 |       await loginPage.logoutLink.click();
  26 |       await expect(loginPage.loginHeader).toBeVisible();
  27 |     });
  28 |   }
  29 | 
  30 |   // 2. Negative Test: Invalid Credentials
  31 |   test('Should display error message with incorrect password', async ({ loginPage }) => {
  32 |     await loginPage.navigate();
  33 |     
  34 |     await loginPage.login('wrong_user@test.com', 'FakePassword123');
  35 | 
  36 |     // UI assertion verifying the specific validation error block appears
  37 |     await expect(loginPage.errorMessage).toBeVisible();
  38 |   });
  39 | 
  40 |   // 3. Multi-Page Interaction Test (Login -> Navigation)
  41 |   test('Should navigate between login page and home via navigation menu', async ({ loginPage, signupPage }) => {
  42 |     await loginPage.navigate();
  43 |     
  44 |     // Switch contexts using signup components inside the login test file safely
  45 |     await signupPage.navigate(); 
  46 |     await expect(loginPage.page).toHaveTitle(/Automation Exercise/);
  47 |   });
  48 | });
```