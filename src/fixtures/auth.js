const { user } = require("../consts/user-data");

module.exports = {
    invalidUser: async ({}, use) => {
        await use({
            email: user.invalidUser.email,
            password: user.invalidUser.password,
        });
    },
};