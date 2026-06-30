import { test, expect } from '@playwright/test';

test('alerts', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
    /*const dialogPromise=page.waitForEvent('dialog');
    await page.getByRole('button', {name:'Click for JS Alert'}).click();
    const dialog=await dialogPromise;
    await dialog.accept();*/

    page.on('dialog', async dialog => {
        console.log(dialog.message());
        await dialog.accept();
    });
    await page.getByRole('button', { name: 'Click for JS Alert' }).click();

    /*const [dialog] = await Promise.all([
        page.waitForEvent('dialog'),
        page.getByRole('button', { name: 'Click for JS Alert' }).click(),
    ]);
    await dialog.accept();*/
});
