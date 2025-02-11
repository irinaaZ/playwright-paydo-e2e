class BasePage {
    constructor(page) {
        this.page = page
    }

    async openPage(url) {
        await this.page.goto(url);
        await this.page.waitForURL(url);
    }
}

module.exports = BasePage;
