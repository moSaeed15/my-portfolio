import { test, expect } from '@playwright/test';

test('Github redirect works as expected', async ({ page }) => {
  await page.goto('https://mosaeed15.com/');

  await page.goto('https://github.com/moSaeed15/cogniverse');

  expect(page.url()).toBe('https://github.com/moSaeed15/cogniverse');

  await page.goBack();

  expect(page.url()).toBe('https://mosaeed15.com/');
});
