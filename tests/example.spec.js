// @ts-check
const { test, expect } = require('@playwright/test');

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await page.waitForTimeout(3000);
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
  await page.waitForTimeout(3000);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await page.pause();
  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();
  await page.waitForTimeout(3000);
  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
  await page.locator('[type=button] [name="LOGIN"]')
});

test('Login', async({page})=>{

})