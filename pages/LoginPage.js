const { expect } = require("@playwright/test");
const { BasePage } = require("./BasePage");

class LoginPage extends BasePage {
  constructor(page) {
    super(page);

    this.heading = page.getByRole("heading", { name: "Login Page" });
    this.username = page.locator("#username");
    this.password = page.locator("#password");
    this.loginBtn = page.getByRole("button", { name: "Login" });
    this.flash = page.locator("#flash");
  }

  async expectLoaded() {
    await expect(this.heading).toBeVisible();
  }

  async login(user, pass) {
    await this.username.fill(user);
    await this.password.fill(pass);
    await this.loginBtn.click();
  }

  async expectSuccess() {
    await expect(this.flash).toContainText("You logged into a secure area!");
  }

  async expectFailure() {
    await expect(this.flash).toBeVisible();
  }
}

module.exports = { LoginPage };