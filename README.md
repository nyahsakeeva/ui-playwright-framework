# Playwright UI Automation Framework

## Overview

This project is an **end-to-end UI automation framework built with Playwright and JavaScript**.
It demonstrates modern test automation practices including:

* Page Object Model (POM)
* Cross-browser testing
* GitHub Actions CI integration
* HTML test reporting
* File uploads, dynamic waits, forms, and UI interactions

The tests are written against the public demo application:

https://the-internet.herokuapp.com/

This site is widely used for practicing and demonstrating automation testing scenarios.

---

# Tech Stack

**Language**

* JavaScript (Node.js)

**Automation Framework**

* Playwright

**Test Runner**

* Playwright Test

**CI/CD**

* GitHub Actions

**Reporting**

* Playwright HTML Reporter

---

# Project Structure

```
.
├── pages/
│   ├── BasePage.js
│   ├── HomePage.js
│   ├── LoginPage.js
│   ├── SecureAreaPage.js
│   ├── CheckboxesPage.js
│   ├── DropdownPage.js
│   ├── DynamicLoadingPage.js
│   ├── DynamicExample2Page.js
│   └── FileUploadPage.js
│
├── tests/
│   ├── login.spec.js
│   ├── checkboxes.spec.js
│   ├── dropdown.spec.js
│   ├── dynamicLoading.spec.js
│   └── fileUpload.spec.js
│
├── fixtures/
│   └── sample.txt
│
├── playwright.config.js
├── package.json
└── README.md
```

---

# Page Object Model (POM)

This framework follows the **Page Object Model design pattern**.

Each page of the application is represented by a class inside the `pages/` directory.

Responsibilities:

**Page Classes**

* store locators
* implement reusable UI actions
* encapsulate page behavior

**Test Files**

* contain test logic
* call page methods
* perform assertions

This separation improves:

* maintainability
* readability
* scalability

---

# Installation

Clone the repository:

```
git clone https://github.com/YOUR_USERNAME/playwright-automation.git
cd playwright-automation
```

Install dependencies:

```
npm install
```

Install Playwright browsers:

```
npx playwright install chromium firefox
```

---

# Running Tests

Run all tests:

```
npx playwright test
```

Run tests in headed mode (see browser):

```
npx playwright test --headed
```

Run with slow motion (for debugging):

```
npx playwright test --headed --slow-mo=500
```

Run a specific test file:

```
npx playwright test tests/login.spec.js
```

---

# Test Report

After tests run, generate and open the HTML report:

```
npx playwright show-report
```

The report includes:

* test results
* screenshots
* traces
* videos (for failed tests)

---

# Continuous Integration

This project uses **GitHub Actions** to run automated tests on every push.

Workflow file:

```
.github/workflows/playwright.yml
```

Pipeline steps:

1. Checkout repository
2. Install Node dependencies
3. Install Playwright browsers
4. Execute test suite
5. Upload HTML test report and artifacts

Artifacts include:

* HTML test report
* screenshots
* videos
* traces

---

# Example Test Scenarios

The test suite covers multiple UI scenarios including:

* Login authentication
* Checkbox interactions
* Dropdown selection
* Dynamic content loading
* File upload functionality

---

# Useful Commands

Run tests with UI runner:

```
npx playwright test --ui
```

Run tests in one browser:

```
npx playwright test --project=chromium
```

Run tests sequentially:

```
npx playwright test --workers=1
```


