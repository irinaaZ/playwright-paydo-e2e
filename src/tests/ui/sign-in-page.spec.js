const { test } = require('../../fixtures/index');

test.describe('Sign-in page', () => {
    test('Invalid credentials should invoke error message', async ({ homePage, signInPage, invalidUser }) => {
        await homePage.open();
        await homePage.clickLoginBtn();

        await signInPage.fillSignInForm(invalidUser.email, invalidUser.password);
        await signInPage.isSignInButtonEnabled();
        await signInPage.submitForm();
        await signInPage.isErrorMessageDisplayed();
    });
});


