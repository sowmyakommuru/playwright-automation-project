# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: cart.spec.ts >> Automation Exercise - Shopping Cart Tests >> Should successfully add multiple products and verify them inside the cart view
- Location: tests\cart.spec.ts:12:7

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('#cart_info_table tbody tr').locator('h4 a:text("Men T-Shirt")')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('#cart_info_table tbody tr').locator('h4 a:text("Men T-Shirt")')

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
  - listitem:
    - link "Home":
      - /url: /
  - listitem: Shopping Cart
- text: Proceed To Checkout
- table:
  - rowgroup:
    - row "Item Description Price Quantity Total":
      - cell "Item"
      - cell "Description"
      - cell "Price"
      - cell "Quantity"
      - cell "Total"
      - cell
  - rowgroup:
    - row "Product Image Blue Top Women > Tops Rs. 500 1 Rs. 500 ":
      - cell "Product Image":
        - link "Product Image":
          - /url: ""
          - img "Product Image"
      - cell "Blue Top Women > Tops":
        - heading "Blue Top" [level=4]:
          - link "Blue Top":
            - /url: /product_details/1
        - paragraph: Women > Tops
      - cell "Rs. 500":
        - paragraph: Rs. 500
      - cell "1":
        - button "1"
      - cell "Rs. 500":
        - paragraph: Rs. 500
      - cell ""
    - row "Product Image Men Tshirt Men > Tshirts Rs. 400 1 Rs. 400 ":
      - cell "Product Image":
        - link "Product Image":
          - /url: ""
          - img "Product Image"
      - cell "Men Tshirt Men > Tshirts":
        - heading "Men Tshirt" [level=4]:
          - link "Men Tshirt":
            - /url: /product_details/2
        - paragraph: Men > Tshirts
      - cell "Rs. 400":
        - paragraph: Rs. 400
      - cell "1":
        - button "1"
      - cell "Rs. 400":
        - paragraph: Rs. 400
      - cell ""
- contentinfo:
  - heading "Subscription" [level=2]
  - textbox "Your email address"
  - button ""
  - paragraph: Get the most recent updates from our site and be updated your self...
  - paragraph: Copyright © 2021 All rights reserved
- insertion:
  - heading "These are topics related to the article that might interest you" [level=2]: Discover more
  - link "Manufacturing"
  - link "TV & Video Equipment"
  - link "Economics"
```

# Test source

```ts
  1  | import { Page, Locator, expect } from '@playwright/test';
  2  | 
  3  | export class CartPage {
  4  |   readonly page: Page;
  5  |   readonly cartLink: Locator;
  6  |   readonly cartRows: Locator;
  7  | 
  8  |   constructor(page: Page) {
  9  |     this.page = page;
  10 |     this.cartLink = page.locator('a[href="/view_cart"]');
  11 |     this.cartRows = page.locator('#cart_info_table tbody tr');
  12 |   }
  13 | 
  14 |   async navigateToCart() {
  15 |     await this.cartLink.first().click();
  16 |     await expect(this.page).toHaveURL(/.*view_cart/);
  17 |   }
  18 | 
  19 |   /**
  20 |    * Adds a product to the cart from the main product list by its visible button index
  21 |    * @param productIndex 1-based index of the product item on the page
  22 |    */
  23 |   async addProductToCartByIndex(productIndex: number) {
  24 |     // Target the specific product's overlay "Add to cart" button
  25 |     const addToCartBtn = this.page.locator(`.features_items .col-sm-4`).nth(productIndex - 1).locator('a:text("Add to cart")').first();
  26 |     await addToCartBtn.click();
  27 |     
  28 |     // Handle and close the success popup modal
  29 |     const continueShoppingBtn = this.page.locator('button:text("Continue Shopping")');
  30 |     await continueShoppingBtn.waitFor({ state: 'visible' });
  31 |     await continueShoppingBtn.click();
  32 |   }
  33 | 
  34 |   /**
  35 |    * Verifies if a description text matches any item row present inside the cart grid
  36 |    */
  37 |   async verifyProductInCart(productDescription: string) {
  38 |     const productLocator = this.cartRows.locator(`h4 a:text("${productDescription}")`);
> 39 |     await expect(productLocator).toBeVisible();
     |                                  ^ Error: expect(locator).toBeVisible() failed
  40 |   }
  41 | }
```