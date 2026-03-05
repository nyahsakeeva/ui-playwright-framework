const { test } = require("@playwright/test");
const { HomePage } = require("../pages/HomePage");
const { LoginPage } = require("../pages/LoginPage");
const { SecureAreaPage } = require("../pages/SecureAreaPage");

test("Login success + logout", async ({ page }) => {
  const home = new HomePage(page);
  const login = new LoginPage(page);
  const secure = new SecureAreaPage(page);

  await home.open();
  await home.goToFormAuth();

  await login.expectLoaded();
  await login.login("tomsmith", "SuperSecretPassword!");
  await login.expectSuccess();

  await secure.expectLoaded();
  await secure.logout();
  await secure.expectLoggedOut();
});
