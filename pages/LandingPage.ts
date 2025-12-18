import { Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class LandingPage extends BasePage {
    dashboardNavButton;
    constructor(page: Page) {
        super(page);
        this.dashboardNavButton = this.page.locator('.btn', {hasText: "Dashboard"});
    }

    async navigate() {
        return this.page.goto('/');
    }
}