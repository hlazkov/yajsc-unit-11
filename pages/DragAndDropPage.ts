import { BasePage } from "./BasePage";
import { Locator, Page } from "@playwright/test";
import { DashboardCard } from "./DashBoardCardFragment";

enum DashboardCardNames {
    dragAndDrop = "Drag & Drop",
    dynamicElements = "Dynamic Elements",
    fileOperations = "File Operations",
}

export class dragAndDropPage extends BasePage {
    dropZone: Locator;
    cardProgress: Locator;
    constructor(page: Page) {
        super(page);
        this.dropZone = this.page.locator("#drop-zone");
        this.cardProgress = this.page.locator(".card", { hasText: "Progress"});
    }

    getDraggableItemToDrag(index: number): Locator {
        return this.page.locator(`#item-${index}`);
    }

    async navigate() {
        return this.page.goto('/drag-and-drop');
    }
}
