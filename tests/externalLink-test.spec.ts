import { test, expect } from '@playwright/test';

test('Github redirect works as expected', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  await page.goto('https://github.com/moSaeed15/cogniverse');

  await page.getByLabel('commits by moSaeed15').click();

  expect(page.url()).toBe('https://github.com/moSaeed15/cogniverse');

  await page.goBack();

  expect(page.url()).toBe('http://localhost:3000/');
});
