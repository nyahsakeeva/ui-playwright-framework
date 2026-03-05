const { test } = require("@playwright/test");
const { HomePage } = require("../pages/HomePage");
const { DropdownPage } = require("../pages/DropdownPage");

test("Dropdown selection", async ({ page }) => {
  const home = new HomePage(page);
  const dropdown = new DropdownPage(page);

  await home.open();
  await home.goToDropdown();

  await dropdown.expectLoaded();

  await dropdown.selectOption("2");
  await dropdown.expectSelected("2");
});