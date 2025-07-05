import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

test('check Java page', async ({ page }) => {

  await page.goto('https://playwright.dev');

  await page.getByRole('link', {name: 'Get started'}).click();

  await page.getByRole('button', {name: 'Node.js'}).hover();
  await page.getByLabel('Main', { exact: true }).getByText('Java').click();

  await expect(page).toHaveURL('https://playwright.dev/java/docs/intro');

});