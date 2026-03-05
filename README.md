# Playwright UI Automation Framework

## Overview

This repository contains an end-to-end UI automation framework built with **Playwright and JavaScript (Node.js)**.
The project demonstrates modern automation practices including:

* Page Object Model (POM)
* Cross-browser testing
* GitHub Actions continuous integration
* HTML reporting
* Playwright Agents for AI-assisted test development

The tests target the public demo application used for automation practice:

https://the-internet.herokuapp.com/

This application contains multiple UI components commonly used in automation testing, such as authentication, dropdowns, dynamic content, and file uploads.

---

# Technology Stack

**Language**
JavaScript (Node.js)

**Automation Framework**
Playwright

**Test Runner**
Playwright Test

**Continuous Integration**
GitHub Actions

**Reporting**
Playwright HTML Reporter


# Page Object Model

This framework follows the **Page Object Model (POM)** design pattern.

Each page of the application is represented by a class in the `pages` directory.

### Page Classes

Contain:

* element locators
* reusable UI actions
* page specific logic

### Test Files

Contain:

* test scenarios
* assertions
* calls to page methods

This separation improves readability, maintainability, and scalability.

---

# Installation

Clone the repository:

```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
cd YOUR_REPOSITORY
```

Install dependencies:

```bash
npm install
```

Install Playwright browsers:

```bash
npx playwright install chromium firefox
```

Note: WebKit may not be supported on certain macOS versions.

---

# Running Tests

Run the full test suite:

```bash
npx playwright test
```

Run tests with a visible browser:

```bash
npx playwright test --headed
```

Run tests slowly for debugging:

```bash
npx playwright test --headed --slow-mo=500
```

Run a specific test file:

```bash
npx playwright test tests/login.spec.js
```

Run tests sequentially:

```bash
npx playwright test --workers=1
```

Run tests using the interactive UI runner:

```bash
npx playwright test --ui
```

---

# Test Report

After test execution, open the HTML report:

```bash
npx playwright show-report
```

The report contains:

* test execution results
* screenshots
* traces
* videos for failed tests

---

# Continuous Integration

This repository includes a **GitHub Actions workflow** that automatically runs the test suite.

The workflow is triggered by:

* pushes to the `main` branch
* pull requests targeting the `main` branch
* manual execution from the GitHub Actions interface

Workflow file location:

```
.github/workflows/playwright.yml
```

The pipeline performs the following steps:

1. Checkout the repository
2. Install Node dependencies
3. Install Playwright browsers
4. Execute the automated tests
5. Upload test artifacts

Artifacts include the HTML report, screenshots, traces, and videos.

---

# Playwright Agents

Playwright Agents provide AI-assisted tools for creating and maintaining automated tests.

The agent system includes three components.

### Planner

Creates a structured automation test plan written in Markdown.

### Generator

Generates Playwright test scripts based on the plan.

### Healer

Analyzes failing tests and suggests fixes for unstable locators or synchronization issues.

To initialize agents in this repository:

```bash
npx playwright init-agents --loop=vscode
```

Typical workflow:

1. Create a test plan in the `specs` directory
2. Generate Playwright tests in the `tests` directory
3. Execute the test suite
4. Use the healer agent to stabilize failing tests


