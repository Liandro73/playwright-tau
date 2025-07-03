import { test, expect, Page } from '@playwright/test';

const URL = 'https://playwright.dev/';

test.beforeEach(async ({page}) => {
  await page.goto(URL);
});

async function clickGetStarted(page:Page) {
  await page.getByRole('link', { name: 'Get started' }).click();
}

test.describe('Playwright website', () => {

  test('has title', async ({ page }) => {
    await expect(page).toHaveTitle(/Playwright/);
  });

  test('get started link', async ({ page }) => {
    clickGetStarted(page);
    await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
  });

  test.only('check Java page', async ({ page }) => {
    clickGetStarted(page);

    await page.getByRole('button', {name: 'Node.js'}).hover();
    await page.getByLabel('Main', { exact: true }).getByText('Java').click();

    await expect(page).toHaveURL('https://playwright.dev/java/docs/intro');
    await expect(page.getByText('INstalling Playwright', { exact: true })).not.toBeVisible();

    const javaDescription = `Playwright is distributed as a set of Maven modules. The easiest way to use it is to add one dependency to your project's pom.xml as described below. If you're not familiar with Maven please refer to its documentation.`;
    await expect(page.getByText(javaDescription)).toBeVisible();

  });
  
});
