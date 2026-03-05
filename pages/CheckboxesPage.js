const { expect } = require("@playwright/test");
const { BasePage } = require("./BasePage");

class CheckboxesPage extends BasePage {
  constructor(page) {
    super(page);

    this.heading = page.getByRole("heading", { name: "Checkboxes" });
    this.checkbox1 = page.locator('input[type="checkbox"]').nth(0);
    this.checkbox2 = page.locator('input[type="checkbox"]').nth(1);
  }

  async expectLoaded() {
    await expect(this.heading).toBeVisible();
  }

  async setCheckbox1(checked) {
    if (checked) await this.checkbox1.check();
    else await this.checkbox1.uncheck();
  }

  async setCheckbox2(checked) {
    if (checked) await this.checkbox2.check();
    else await this.checkbox2.uncheck();
  }

  async expectCheckbox1(checked) {
    if (checked) await expect(this.checkbox1).toBeChecked();
    else await expect(this.checkbox1).not.toBeChecked();
  }

  async expectCheckbox2(checked) {
    if (checked) await expect(this.checkbox2).toBeChecked();
    else await expect(this.checkbox2).not.toBeChecked();
  }
}

module.exports = { CheckboxesPage };