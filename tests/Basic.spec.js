const { test, expect } = require('@playwright/test');

test(`Verify the page title`, async ({ page }) => {
  await page.goto(`/`);
  console.log(await page.url());
  expect(await page.title()).toContain(`JSONPlaceholder`);
});

