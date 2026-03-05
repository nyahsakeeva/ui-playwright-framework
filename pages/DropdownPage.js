const { expect } = require("@playwright/test");
const { BasePage } = require("./BasePage");

class DropdownPage extends BasePage {
  constructor(page) {
    super(page);

    this.heading = page.getByRole("heading", { name: "Dropdown List" });
    this.dropdown = page.locator("#dropdown");
  }

  async expectLoaded() {
    await expect(this.heading).toBeVisible();
  }

  async selectOption(value) {
    await this.dropdown.selectOption(value);
  }

  async expectSelected(value) {
    await expect(this.dropdown).toHaveValue(value);
  }
}

module.exports = { DropdownPage };