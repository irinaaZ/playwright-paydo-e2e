Write automation tests using Playwright and JavaScript.

1. Open this page https://paydo.com/, click the Open Account button, and verify
   that all UI elements are present.
2. Open the LogIn page, enter invalid data, and verify the error message.
   error.
3. Write an automated test to check two API methods:
   3.1. Get/user - the method gets user data by user_id and returns
   username(str), age(int)[1-100], user_id
   3.2. Post/user: sends username(str), age(int)[1-100], user_type(boolean). In response,
   user_id, username.
   The project structure should be organized in such a way that it is easy to add new tests and
   expand functionality.
   Other requirements: use of Page Object Pattern, Test Fixtures
