import { Page, expect } from "@playwright/test";
import { productsLocators } from "../locators/products.locators";

export class ProductsPage {
  constructor(private page: Page) {}

  async verifyProductsCount(expected: number) {
    await expect(
      this.page.locator(productsLocators.inventoryItem)
    ).toHaveCount(expected);
  }

  async sortBy(value: string) {
    await this.page
      .locator(productsLocators.sortDropdown)
      .selectOption(value);
  }

  async verifySortedLowToHigh() {
    const prices = await this.page
      .locator(productsLocators.inventoryPrice)
      .allTextContents();

    const nums = prices.map(p => Number(p.replace("$", "")));
    const sorted = [...nums].sort((a, b) => a - b);

    expect(nums).toEqual(sorted);
  }
}
