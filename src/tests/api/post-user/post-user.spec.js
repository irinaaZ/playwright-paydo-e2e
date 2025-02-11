const { test, expect } = require('@playwright/test');
const { requestData } = require("./data");

const newUser = requestData.newUser;

test.describe('/user', () => {
    test('POST /user with valid data should create a new user', async ({ request }) => {
        const response = await request.post(requestData.url, { data: newUser });
        expect(response.status()).toBe(201);

        const responseData = await response.json();
        expect(responseData).toHaveProperty('user_id');
        expect(responseData.username).toBe(newUser.username);
    });
});
