const { expect } = require("@playwright/test");
const { BasePage } = require("./BasePage");

class DynamicLoadingPage extends BasePage {
  constructor(page) {
    super(page);

    this.heading = page.getByRole("heading", { name: "Dynamically Loaded Page Elements" });
    this.example2Link = page.getByRole("link", { name: "Example 2: Element rendered after the fact" });
  }

  async expectLoaded() {
    await expect(this.heading).toBeVisible();
  }

  async openExample2() {
    await this.example2Link.click();
  }
}

module.exports = { DynamicLoadingPage };