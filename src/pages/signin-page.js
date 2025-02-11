import { expect } from "@playwright/test";
import { validationMessage } from "../consts/validation-message";

const BasePage = require('./base-page');

export class SignInPage extends BasePage {
    constructor(page) {
        super(page);
        this.page = page;
        this.emailInput = page.locator('input[placeholder="Enter email"]');
        this.passwordInput = page.locator("input[type='password']");
        this.signInBtn = page.locator("button.mat-focus-indicator");
        this.errorMessage = page.locator("ngp-info-block[color='error']");
        this.backToHomePage = page.locator("mat-icon[data-mat-icon-name='icons/arrow-left']");
    }

    async fillSignInForm(email, password) {
        await this.emailInput.fill(email);
        await this.passwordInput.fill(password);
    }

    async submitForm() {
        await this.signInBtn.click();
    }

    async backToHome() {
        await this.backToHomePage.click();
    }

    async isSignInButtonEnabled() {
        await expect(this.signInBtn).toBeEnabled();
    }

    async isErrorMessageDisplayed() {
        const errorMessageText = await this.errorMessage.textContent();

        await expect(this.errorMessage).toBeVisible();
        expect(errorMessageText.trim()).toEqual(validationMessage.invalidEmailOrPassword);
    }
}

module.exports = SignInPage;

