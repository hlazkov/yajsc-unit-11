import { BasePage } from "./BasePage";
import { Locator, Page } from "@playwright/test";
import { DashboardCard } from "./DashBoardCardFragment";

export enum DashboardCardNames {
    dragAndDrop = "Drag & Drop",
    dynamicElements = "Dynamic Elements",
    fileOperations = "File Operations",
}

export class DashboardPage extends BasePage {
    constructor(page: Page) {
        super(page);
    }

    getCard(cardName: DashboardCardNames): DashboardCard {
        console.log(this.hiddenSecret);
        return new DashboardCard(cardName, this.page);
    }

    async navigate() {
        return this.page.goto('/dashboard');
    }
}
