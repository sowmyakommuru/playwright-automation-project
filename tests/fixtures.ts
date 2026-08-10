import { test as base } from '@playwright/test';
import { SignupPage } from '../pages/SignUpPage';
import { LoginPage } from '../pages/LoginPage';
import { CartPage } from '../pages/CartPage'; 

type MyFixtures = {
  signupPage: SignupPage;
  loginPage: LoginPage;
  cartPage: CartPage;

};

export const test = base.extend<MyFixtures>({
  signupPage: async ({ page }, use) => {
    await use(new SignupPage(page));
  },
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  cartPage: async ({ page }, use) => {
    await use(new CartPage(page));
  },
});
export { expect } from '@playwright/test';