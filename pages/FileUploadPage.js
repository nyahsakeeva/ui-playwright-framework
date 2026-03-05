const { expect } = require("@playwright/test");
const path = require("path");
const { BasePage } = require("./BasePage");

class FileUploadPage extends BasePage {
  constructor(page) {
    super(page);

    this.heading = page.getByRole("heading", { name: "File Uploader" });
    this.fileInput = page.locator("#file-upload");
    this.uploadBtn = page.locator("#file-submit");
    this.uploadedFiles = page.locator("#uploaded-files");
  }

  async expectLoaded() {
    await expect(this.heading).toBeVisible();
  }

  async uploadFixtureFile(fileName) {
    // expects a file in ./fixtures/
    const filePath = path.resolve(process.cwd(), "fixtures", fileName);
    await this.fileInput.setInputFiles(filePath);
    await this.uploadBtn.click();
  }

  async expectUploadedFile(fileName) {
    await expect(this.uploadedFiles).toContainText(fileName);
  }
}

module.exports = { FileUploadPage };