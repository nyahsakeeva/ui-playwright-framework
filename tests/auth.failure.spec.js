const { test } = require("@playwright/test");
const { HomePage } = require("../pages/HomePage");
const { LoginPage } = require("../pages/LoginPage");

test("Login failure with invalid credentials", async ({ page }) => {
  const home = new HomePage(page);
  const login = new LoginPage(page);

  await home.open();
  await home.goToFormAuth();

  await login.expectLoaded();
  await login.login("invalid", "wrong");
  await login.expectFailure();
});
