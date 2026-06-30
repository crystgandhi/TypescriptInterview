import{test, expect} from '@playwright/test';

test('FileUpload', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');
    //await page.locator('#singleFileInput').setInputFiles('./Kitten.jpg');
    await page.locator('#multipleFilesInput').setInputFiles([
  './Kitten.jpg',
  './dog.jpg'
]);
    await page.getByRole('button', {name:'Upload Multiple Files'}).click();
    await page.screenshot({path:'screenshots/kitten.png', fullPage:true});
    
});