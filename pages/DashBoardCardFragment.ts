import { Locator, Page } from "@playwright/test";

export class DashboardCard {
    button;
    page: Page;
    locator: Locator;
    textArea: Locator;
    constructor(text: string, page: Page) {
        this.page = page;
        this.locator = this.page.locator('.card', {hasText: text});
        this.button = this.locator.locator('.btn', {hasText: "Start Practice"});
        this.textArea = this.locator.locator('.card-content');
    }
}