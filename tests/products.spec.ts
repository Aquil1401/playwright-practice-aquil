import { test } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { ProductsPage } from "../pages/ProductsPage";
import { productData } from "../testdata/products.data";

test.describe("Products Tests", () => {

  test.beforeEach(async ({ page }) => {
    const login = new LoginPage(page);
    await login.navigate();
    await login.loginWithEnvCredentials();
    await login.verifyLoginSuccess();
  });

  test("Verify products & sorting", async ({ page }) => {
    const products = new ProductsPage(page);

    await products.verifyProductsCount(productData.productCount);
    await products.sortBy(productData.sortLowToHigh);
    await products.verifySortedLowToHigh();
  });

});
