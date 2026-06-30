import { test, expect, Frame } from '@playwright/test';

test('Frame Examples', async ({ page }) => {

    await page.goto('https://practice.expandtesting.com/iframe');

    const firstFrame: Frame | null = page.frame('mce_0_ifr');

    await firstFrame?.locator('#tinymce').fill('Hello');

   await page
    .frameLocator('#email-subscribe')
    .locator('#email')
    .fill('asdf@getMaxListeners.com');
});


