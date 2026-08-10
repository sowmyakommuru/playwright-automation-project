import { Page, Locator, expect } from '@playwright/test';

export class CartPage {
  readonly page: Page;
  readonly cartLink: Locator;
  readonly cartRows: Locator;

  constructor(page: Page) {
    this.page = page;
    this.cartLink = page.locator('a[href="/view_cart"]');
    this.cartRows = page.locator('#cart_info_table tbody tr'); // Used for cart summary page
  }

  async navigateToCart() {
    await this.cartLink.first().click();
    await expect(this.page).toHaveURL(/.*view_cart/);
  }

  /**
   * Dynamically adds any product to the cart by its displayed name string
   * Matches the exact layout shown in your HTML DevTools screenshot!
   */
  async addProductToCartByName(productName: string) {
    // 1. Target the specific product card wrapper containing the matching <p> text name
    const productCard = this.page.locator(`.features_items .col-sm-4`, {
      has: this.page.locator(`p:text("${productName}")`)
    }).first();

    // 2. Isolate and click the "Add to cart" anchor button within that specific card overlay context
    const addToCartBtn = productCard.locator('a.add-to-cart').first();
    await addToCartBtn.click();
    
    // 3. Close the modal success pop-up cleanly
    const continueShoppingBtn = this.page.locator('button:text("Continue Shopping")');
    await continueShoppingBtn.waitFor({ state: 'visible' });
    await continueShoppingBtn.click();
  }

  /**
   * Verifies if a product name appears in the cart grid summary view
   * Uses paragraph/row targeting based on the active DOM page
   */
  async verifyProductInCart(productName: string) {
    // Looks inside the cart view rows for the specific text match
    const cartProductLocator = this.page.locator(`#cart_info_table td.cart_description a:text("${productName}")`);
    await expect(cartProductLocator).toBeVisible();
  }
}