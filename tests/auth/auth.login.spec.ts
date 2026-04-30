import { test, expect } from '@playwright/test';
import path from 'path';

process.loadEnvFile();

const user = process.env.USERNAME ?? '';
const pass = process.env.PASSWORD ?? '';

const authFile = path.join(__dirname, '../../playwright/.auth/user.json');

test('auth', async ({ page }) => {
    await page.goto('');
    await page.getByTestId('username').fill(user);
    await page.getByTestId('password').fill(pass);
    
    await page.getByTestId('login-button').click();
    
    await page.getByTestId('title').waitFor({state: 'visible'});

    await page.context().storageState({ path: authFile });
});

// test(sort name ASC () => {});

// test(sort name DESC () => {});

// [
//     {
//         testName: "by Name ASC",
//         sort: (name1, name2) => (....),
//         callback: () => {},
//         sortLocatorPart: 'value="name,asc"'
//     },
//     {
//         testName: "by Name DESC",
//         sort: (name1, name2) => (....),
//         callback: () => {},
//         sortLocatorPart: 'value="name,desc"'
//     },
//     {
//         testName: "by Price ASC",
//         sort: (price1, price2) => (....),
//         callback: (myPage) => {
//             await myPage.element.click();
//         },
//         sortLocatorPart: 'value="price,asc"'
//     },
// ].forEach(testData => 
//     test(`Test if sorting ${testData?.testName} work fine`, (page) => {
//         //...
//         page.locator(testData.sortLocatorPart).click();

//         const names = elements.allTextContent()
//         const sorted = names.sort(testData.sort);

//         await testData.callback();

//         expect(sorted).toEqual(sorted);
//     })
// )