import { test, expect } from './fixtures';

test.describe('Automation Exercise - Shopping Cart Tests', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://automationexercise.com/');
    await expect(page).toHaveTitle(/Automation Exercise/);
  });

  test('Should successfully add multiple products and verify them inside the cart view', async ({ cartPage }) => {
    // Completely readable and text-safe additions
    await cartPage.addProductToCartByName('Blue Top');
    await cartPage.addProductToCartByName('Men Tshirt');

    await cartPage.navigateToCart();

    await cartPage.verifyProductInCart('Blue Top');
    await cartPage.verifyProductInCart('Men Tshirt');
  });

  test('Should verify cart persistence does not reset on structural page reloads', async ({ cartPage, page }) => {
    // This will now target the exact card matching "Sleeveless Dress" no matter where it sits on the grid
    await cartPage.addProductToCartByName('Sleeveless Dress');

    // Simulate browser state reload
    await page.reload();
    
    await cartPage.navigateToCart();
    
    // This assertion will now pass perfectly!
    await cartPage.verifyProductInCart('Sleeveless Dress');
  });
});