const { test } = require("@playwright/test");
const { HomePage } = require("../pages/HomePage");
const { DynamicLoadingPage } = require("../pages/DynamicLoadingPage");
const { DynamicExample2Page } = require("../pages/DynamicExample2Page");

test("Dynamic loading example 2", async ({ page }) => {
  const home = new HomePage(page);
  const dynamic = new DynamicLoadingPage(page);
  const example2 = new DynamicExample2Page(page);

  await home.open();
  await home.goToDynamicLoading();

  await dynamic.expectLoaded();
  await dynamic.openExample2();

  await example2.startAndWait();
});