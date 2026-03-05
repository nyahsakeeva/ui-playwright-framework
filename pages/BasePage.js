const { expect } = require("@playwright/test");

class BasePage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
  }

  async goto(path) {
    await this.page.goto(path);
  }

  async expectTextVisible(text) {
    await expect(this.page.getByText(text)).toBeVisible();
  }
}

module.exports = { BasePage };