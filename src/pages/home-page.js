const BasePage = require('./base-page');

export class HomePage extends BasePage {
    constructor(page) {
        super(page);
        this.page = page
        this.root = page.locator("section.cards-main-baner")
        this.openAccountButton = page.locator('.cards-main-baner__button[href$="sign-up"]');
        this.loginBtn = page.locator('a[data-action="logIn"][class*="secondary"]');
    }

    async open() {
        await this.openPage(process.env.BASE_URL);
        await this.root.waitFor({ state : 'visible' })
    }

    async clickOpenAccountBtn() {
        await this.openAccountButton.click();
        await this.openAccountButton.waitFor({ state: 'hidden' });
    }

    async clickLoginBtn() {
        await this.loginBtn.click();
    }
}

module.exports = HomePage;
