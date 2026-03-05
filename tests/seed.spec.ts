import { test, expect } from '@playwright/test';

test.describe('Test group', () => {
  test('seed', async ({ page }) => {
    // generate code here.
  await page.goto("/");
  await expect(page.getByRole("heading", { name: "Welcome to the-internet" })).toBeVisible();
  });

  
});

