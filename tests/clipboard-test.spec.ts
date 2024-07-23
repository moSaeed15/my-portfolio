import { test, expect } from '@playwright/test';

test('Main website functionality', async ({ page, context }) => {
  await page.goto('http://localhost:3000/');

  await page.getByRole('button', { name: 'About me' }).click();

  await page.getByText('My Tech Stack', { exact: true }).click();

  await page.getByRole('button', { name: 'Copy my email address' }).click();

  const clipboardText = await page.evaluate(async () => {
    return await navigator.clipboard.readText();
  });

  expect(clipboardText).toContain('mohammed.elsaeed1@gmail.com');

  await page.getByRole('button', { name: 'Email is Copied!' }).click();

  expect(page.url()).toBe('http://localhost:3000/#about');
});
