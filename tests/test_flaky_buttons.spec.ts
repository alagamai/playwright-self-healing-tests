import { test, expect } from '@playwright/test';

test('STRICT MODE FAIL – Flaky Button', async ({ page }) => {
  await page.goto('http://localhost:8000/');

  // THIS WILL FAIL EVERY TIME:
  const flakyButtons = page.locator('text=Flaky Button');
  const count = await flakyButtons.count();
  for (let i = 0; i < count; i++) {
    await flakyButtons.nth(i).click();
  }

});