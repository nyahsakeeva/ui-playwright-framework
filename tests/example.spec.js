const { test, expect } = require('@playwright/test');

test('has title', async ({ page }) => {
  await page.goto('https://demo.realworld.io');
  await expect(page).toHaveTitle(/Conduit/);
});