const { test } = require("@playwright/test");
const { HomePage } = require("../pages/HomePage");
const { FileUploadPage } = require("../pages/FileUploadPage");

test("File upload", async ({ page }) => {
  const home = new HomePage(page);
  const upload = new FileUploadPage(page);

  await home.open();
  await home.goToFileUpload();

  await upload.expectLoaded();

  // put any file in ./fixtures/ e.g. sample.txt
  await upload.uploadFixtureFile("sample.txt");
  await upload.expectUploadedFile("sample.txt");
});