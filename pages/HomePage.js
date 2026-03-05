const { expect } = require("@playwright/test");
const { BasePage } = require("./BasePage");

class HomePage extends BasePage {
  constructor(page) {
    super(page);

    this.heading = page.getByRole("heading", { name: "Welcome to the-internet" });
    this.formAuthLink = page.getByRole("link", { name: "Form Authentication" });
    this.checkboxesLink = page.getByRole("link", { name: "Checkboxes" });
    this.dropdownLink = page.getByRole("link", { name: "Dropdown" });
    this.dynamicLoadingLink = page.getByRole("link", { name: "Dynamic Loading" });
    this.fileUploadLink = page.getByRole("link", { name: "File Upload" });
  }

  async open() {
    await this.page.goto("/");
    await expect(this.heading).toBeVisible();
  }

  async goToFormAuth() {
    await this.formAuthLink.click();
  }

  async goToCheckboxes() {
    await this.checkboxesLink.click();
  }

  async goToDropdown() {
    await this.dropdownLink.click();
  }

  async goToDynamicLoading() {
    await this.dynamicLoadingLink.click();
  }

  async goToFileUpload() {
    await this.fileUploadLink.click();
  }
}

module.exports = { HomePage };