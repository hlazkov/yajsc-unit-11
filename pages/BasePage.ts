import { Page } from "@playwright/test";

export abstract class BasePage {
    page: Page;
    hiddenSecret: string;
    constructor(page: Page) {
        this.page = page;
        console.log('SuperClass Constructor is called');
        this.hiddenSecret = "shhshhh!!";
    }

    abstract navigate(): Promise<any>;
}