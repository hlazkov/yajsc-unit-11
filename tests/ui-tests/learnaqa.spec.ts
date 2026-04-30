import { test, expect } from '@playwright/test';
import { dragAndDropPage } from '../../pages/DragAndDropPage';
import path from 'path';

test.skip('open https://www.learnaqa.info/', async ({ page }) => {
    await page.goto('/dashboard');
    await page
        .locator('.card', { hasText: 'Drag and Drop' })
        .locator('.btn', { hasText: 'Start Practice' })
        .click();

    for (let i = 1; i <= 4; i++) {
        //....
    }

    // await expect(...).toContainText("Items moved: 4 / 4");
});

test.skip('drag and drop items', async ({ page }) => {
    const dndPage = new dragAndDropPage(page);
    await dndPage.navigate();

    for (let i = 1; i <= 4; i++) {
        await dndPage.getDraggableItemToDrag(i).dragTo(dndPage.dropZone);
    }

    await expect(dndPage.cardProgress).toContainText("Items moved: 4 / 4");
});

/**
 * .nth // .first // last
 * .filter
 * .allTextContent v
 * .all
 * .count
 */

const authFile = path.join(__dirname, '../../playwright/.auth/user.json');

test.use({ storageState: authFile });

test('Cheapest good', async ({ page }) => {
    await page.goto('/inventory.html');
    // await page.getByTestId('username').fill('standard_user');
    // await page.getByTestId('password').fill('secret_sauce');
    // await page.getByTestId('login-button').click();
    
    // await page.getByTestId('title').waitFor({state: 'visible'});

    const pricesLocator = page.getByTestId('inventory-item-price');
    const pricesCount = await pricesLocator.count();
    const pricesAll = await pricesLocator.all();
    const prices = await pricesLocator;

    const cheapGoods = await pricesLocator.filter({hasText: '$9.99'}).textContent();

    const items = await page.getByTestId('inventory-item').all();
    const goods = [];

    for (const item of items) {
        const name = await item.getByTestId('inventory-item-name').textContent();
        const priceAsString = await item.getByTestId('inventory-item-price').textContent();
        const price = Number.parseFloat((priceAsString || ' ').substring(1)) || 0;
        goods.push({name, price});
    }

    const cheapestGood = goods.sort((a,b) => (a.price - b.price) > 0 ? -1 : 1).pop();

    expect(cheapestGood?.name).toEqual('Sauce Labs Onesie');
});

