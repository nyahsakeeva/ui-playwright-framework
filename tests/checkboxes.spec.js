const { test } = require("@playwright/test");
const { HomePage } = require("../pages/HomePage");
const { CheckboxesPage } = require("../pages/CheckboxesPage");

test("Checkboxes can be toggled", async ({ page }) => {
  const home = new HomePage(page);
  const checkboxes = new CheckboxesPage(page);

  await home.open();
  await home.goToCheckboxes();

  await checkboxes.expectLoaded();

  await checkboxes.setCheckbox1(true);
  await checkboxes.expectCheckbox1(true);

  await checkboxes.setCheckbox2(false);
  await checkboxes.expectCheckbox2(false);
});