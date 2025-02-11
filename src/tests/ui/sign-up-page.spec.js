const { test } = require('../../fixtures/index');
const { expect } = require('@playwright/test');

test.describe('Sign-up page', () => {
    test('All elements should be presented on page', async ({ homePage, signUpPage}) => {
        await homePage.open();
        await homePage.clickOpenAccountBtn();

        await signUpPage.isLogoVisible();
        await signUpPage.isLeftSliderItemTitlesCorrect();
        await signUpPage.isLeftSliderItemDescriptionsCorrect();
        await signUpPage.isHeaderItemsAvailable();
        await signUpPage.isInputFieldsDisplayed(2);
        await signUpPage.isRequirementItemsDisplayed();
        await signUpPage.isCreateAccountButtonDisplayed();
        await signUpPage.isSwitchToCreateBusinessAccountBtnDisplayed();
        await signUpPage.isFooterDisplayed();

        await expect(signUpPage.authContent).toHaveScreenshot('auth-content.png');
    });
});