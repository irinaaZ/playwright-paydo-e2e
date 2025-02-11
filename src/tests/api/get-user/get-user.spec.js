const { test, expect } = require('@playwright/test');
const { requestData } = require("./data");

test.describe('/user', () => {
    test('GET /user should return valid user data', async ({ request }) => {
        const response = await request.get(requestData.url, { params: { user_id: requestData.userId } });
        expect(response.status()).toBe(200);

        const responseData = await response.json();
        expect(responseData).toHaveProperty('username');
        expect(responseData).toHaveProperty('age');
        expect(responseData.age).toBeGreaterThanOrEqual(1);
        expect(responseData.age).toBeLessThanOrEqual(100);
        expect(responseData).toHaveProperty('user_id', requestData.userId);
    });
});
