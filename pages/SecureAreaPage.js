const { expect } = require("@playwright/test");
const { BasePage } = require("./BasePage");

class SecureAreaPage extends BasePage {
  constructor(page) {
    super(page);

    this.heading = page.getByRole("heading", { name: "Secure Area" });
    this.logoutBtn = page.getByRole("link", { name: "Logout" });
    this.flash = page.locator("#flash");
  }

  async expectLoaded() {
    await expect(this.heading).toBeVisible();
  }

  async logout() {
    await this.logoutBtn.click();
  }

  async expectLoggedOut() {
    await expect(this.flash).toContainText("You logged out of the secure area!");
  }
}

module.exports = { SecureAreaPage };