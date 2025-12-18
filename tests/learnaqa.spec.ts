import { test, expect } from '@playwright/test';
import { dragAndDropPage } from '../pages/DragAndDropPage';

test('open https://www.learnaqa.info/', async ({ page }) => {
    await page.goto('/dashboard');
    await page
        .locator('.card', { hasText: 'Drag and Drop' })
        .locator('.btn', { hasText: 'Start Practice' })
        .click();

    for (let i = 1; i <= 4; i++) {
        await page.locator(`#item-${i}`).dragTo(page.locator('#drop-zone'));
    }

    await expect(page.locator('.card', { hasText: "Progress" })).toContainText("Items moved: 4 / 4");
});

test('drag and drop items', async ({ page }) => {
    const dndPage = new dragAndDropPage(page);
    await dndPage.navigate();

    for (let i = 1; i <= 4; i++) {
        await dndPage.getDraggableItemToDrag(i).dragTo(dndPage.dropZone);
    }

    await expect(dndPage.cardProgress).toContainText("Items moved: 4 / 4");
});