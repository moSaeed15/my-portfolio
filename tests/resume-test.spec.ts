import { test, expect } from '@playwright/test';

test('Resume button works as expected', async ({ page }) => {
  await page.goto('https://mosaeed15.com/');
  const page1Promise = page.waitForEvent('popup');

  await page.getByRole('button', { name: 'My Resume' }).click();
  //return to previous page

  const page1 = await page1Promise;

  //return from popup
  await page1.close();
  await expect(page).toHaveURL('https://mosaeed15.com/');
});
