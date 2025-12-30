import { test } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { users } from "../testdata/login.text";

test.describe("Login Tests", () => {

  test("Login with valid credentials (ENV)", async ({ page }) => {
    const login = new LoginPage(page);

    await login.navigate();
    await login.loginWithEnvCredentials();
    await login.verifyLoginSuccess();
  });

  test("Login with invalid credentials", async ({ page }) => {
    const login = new LoginPage(page);

    await login.navigate();
    await login.login(
      users.invalidUser.username,
      users.invalidUser.password
    );
    await login.verifyLoginError(users.invalidUser.error);
  });

});
