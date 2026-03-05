const { expect } = require("@playwright/test");
const { BasePage } = require("./BasePage");

class DynamicExample2Page extends BasePage {
  constructor(page) {
    super(page);

    this.heading = page.getByRole("heading", { name: "Dynamically Loaded Page Elements" });
    this.startBtn = page.getByRole("button", { name: "Start" });
    this.finishText = page.locator("#finish");
  }

  async startAndWait() {
    await this.startBtn.click();
    await expect(this.finishText).toContainText("Hello World!", { timeout: 15000 });
  }
}

module.exports = { DynamicExample2Page };