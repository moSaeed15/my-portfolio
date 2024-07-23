import { test, expect } from '@playwright/test';

test('Gallery opens and closes', async ({ page }) => {
  await page.goto('https://mosaeed15.com/');

  await page.getByRole('button', { name: 'View Gallery' }).first().click();
  await page.getByRole('img', { name: 'gallery' }).first().click();
  await page.getByRole('img', { name: 'gallery' }).nth(1).click();
  await page.getByRole('button', { name: '×' }).click();
});
