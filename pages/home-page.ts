import { expect, type Locator, type Page } from "@playwright/test";

export class HomePage{

    readonly page: Page;
    readonly btnGetStarted: Locator;
    readonly title: RegExp;

    constructor(page:Page) {
        this.page = page;
        this.btnGetStarted = page.getByRole('link', { name: 'Get started' });
        this.title = /Playwright/;
    }

    async clickButtonGetStarted() {
        await this.btnGetStarted.click();
    }

    async asserHomePageTittle() {
        await expect(this.page).toHaveTitle(this.title);
    }

}

export default HomePage;