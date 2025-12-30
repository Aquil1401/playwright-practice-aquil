import { Page, expect } from "@playwright/test";
import { loginLocators } from "../locators/login.locators";
import { ENV } from "../utils/env";
import { productsText } from "../testdata/products.text";

export class LoginPage {
  constructor(private page: Page) {}

  async navigate() {
    await this.page.goto(ENV.baseUrl);
  }

  async loginWithEnvCredentials() {
    await this.page.fill(loginLocators.usernameInput, ENV.username);
    await this.page.fill(loginLocators.passwordInput, ENV.password);
    await this.page.click(loginLocators.loginButton);
  }

  async login(username: string, password: string) {
    await this.page.fill(loginLocators.usernameInput, username);
    await this.page.fill(loginLocators.passwordInput, password);
    await this.page.click(loginLocators.loginButton);
  }

  async verifyLoginSuccess() {
    await expect(this.page.locator(loginLocators.title)).toHaveText(productsText.title);
  }

  async verifyLoginError(message: string) {
    await expect(
      this.page.locator(loginLocators.errorMessage)
    ).toHaveText(message);
  }
}
