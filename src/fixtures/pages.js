const HomePage = require('../pages/home-page');
const SignUpPage = require('../pages/signup-page');
const SignInPage = require('../pages/signin-page');

module.exports = {
    homePage: async ({ page }, use) => {
        await use(new HomePage(page));
    },
    signUpPage: async ({ page }, use) => {
        await use(new SignUpPage(page));
    },
    signInPage: async ({ page }, use) => {
        await use(new SignInPage(page));
    },
};
