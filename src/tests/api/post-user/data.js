export const requestData = {
    newUser: {
        username: `test_user${Math.random() * 100}`,
        age: 31,
        user_type: true,
    },
    url: process.env.USER_API_URL,
}