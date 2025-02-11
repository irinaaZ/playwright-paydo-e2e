import { expect } from "@playwright/test";
import { leftSliderItem } from "../consts/left-slider-item";
import { validationMessage } from "../consts/validation-message";

const BasePage = require('./base-page');

export class SignupPage extends BasePage {
    constructor(page) {
        super(page);
        this.page = page
        this.root = page.locator("auth-root.ng-star-inserted");
        this.authContent = page.locator('[class*="auth-content"]');
        this.logo = page.locator("img[alt='Paydo logo']");
        this.subLogo = page.locator("div[class*='account-type']");
        this.leftSliderItemTitles = page.locator("ngp-gallery-slider-item-title > div");
        this.leftSliderItemDescriptions = page.locator("ngp-gallery-slider-item-description");
        this.backToHomePage = page.locator("mat-icon[data-mat-icon-name='icons/arrow-left']");
        this.signInBtn = page.locator("a[href$='sign-in']");
        this.emailInput = page.locator("input[data-placeholder$='email']");
        this.passwordInputs = page.locator("input[type='password']");
        this.requirementItems = page.locator("ngp-field-requirements-item");
        this.eyeIcons = page.locator("mat-icon[data-mat-icon-name='icons/eye-on']");
        this.createAccount = page.locator("div[formfooter] button");
        this.switchToBusinessAccountBtn = page.locator("a[href$='sign-up']");
        this.footer = page.locator("auth-footer p");
        this.termsOfUse = page.locator("auth-footer p a");
    }

    async isLogoVisible() {
        await expect(this.logo).toBeVisible();
        await expect(this.subLogo).toBeVisible();
    }

    async isLeftSliderItemTitlesCorrect() {
        const elements = await this.leftSliderItemTitles.elementHandles();
        const texts = await Promise.all(elements.map(async element => {
            return await element.innerText();
        }));

        expect(texts).toEqual([
            leftSliderItem.individualIbans.title,
            leftSliderItem.issuingCards.title,
            leftSliderItem.payWithPaydoAccount.title,
        ])
    }

    async isLeftSliderItemDescriptionsCorrect() {
        const elements = await this.leftSliderItemDescriptions.elementHandles();
        const texts = await Promise.all(elements.map(async element => {
            return await element.innerText();
        }));

        expect(texts).toEqual([
            leftSliderItem.payWithPaydoAccount.description,
            leftSliderItem.individualIbans.description,
            leftSliderItem.issuingCards.description,
        ]);
    }

    async isHeaderItemsAvailable() {
        await expect(this.backToHomePage).toBeVisible();
        await expect(this.signInBtn).toBeVisible();
    }

    async isInputFieldsDisplayed(expectedCount) {
        await expect(this.emailInput).toBeVisible();

        const passwordFields = await this.passwordInputs.elementHandles();
        expect(passwordFields.length).toBe(expectedCount);

        const eyes = await this.eyeIcons.elementHandles();
        expect(eyes.length).toBe(expectedCount);
    }

    async isRequirementItemsDisplayed() {
        const elements = await this.requirementItems.elementHandles();
        const texts = await Promise.all(elements.map(async element => {
            return await element.innerText();
        }));
        const expectedTexts = [
            validationMessage.min8Characters,
            validationMessage.lowercaseLetter,
            validationMessage.uppercaseLetter,
            validationMessage.oneNumber,
        ];

        expect(texts).toEqual(expectedTexts);
        expect(texts.length).toEqual(expectedTexts.length);
    }

    async isCreateAccountButtonDisplayed() {
        await expect(this.createAccount).toBeVisible();
        await expect(this.createAccount).toBeDisabled();
    }

    async isSwitchToCreateBusinessAccountBtnDisplayed() {
        await expect(this.switchToBusinessAccountBtn).toBeVisible();
    }

    async isFooterDisplayed() {
        await expect(this.footer).toBeVisible();
        await expect(this.termsOfUse).toBeVisible();
        expect(await this.footer.innerText()).toEqual(validationMessage.footerConfirm);
    }
}

module.exports = SignupPage;
