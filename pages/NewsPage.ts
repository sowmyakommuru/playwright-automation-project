import { Page, Locator, expect } from '@playwright/test';
export class NewsPage {
    readonly page: Page;
   // readonly openNewAccountLink: Locator;
    readonly pageHeader: Locator;

    constructor(page: Page) {
        this.page = page;
        // Locator for the side navigation menu link
        //this.openNewAccountLink = page.locator('a:has-text("Open New Account")');
        // Locator for the structural title header on the resulting page
        this.pageHeader = page.locator('h1.title');
    }

    async VerifyPageHeaderText(expectedText: string) {
       // await this.openNewAccountLink.click();
       await expect(this.pageHeader).toBeVisible();
    
       await expect(this.pageHeader).toContainText(expectedText);}
}