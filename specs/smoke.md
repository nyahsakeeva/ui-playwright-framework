# Smoke Test Plan

## Application Overview

Smoke tests for core authentication and UI interaction features including form authentication with success and failure scenarios, checkbox toggling, dropdown selection, dynamic loading content, and file upload functionality.

## Test Scenarios

### 1. Form Authentication

**Seed:** `tests/seed.spec.ts`

#### 1.1. Login success + logout

**File:** `tests/auth.success.spec.js`

**Steps:**
  1. Navigate to the home page
    - expect: Page loads with the-internet heading visible
  2. Click on Form Authentication link
    - expect: Login page loads
  3. Enter valid credentials (username: tomsmith, password: SuperSecretPassword!)
    - expect: Credentials are entered in the form
  4. Click the Login button
    - expect: Success message is displayed
    - expect: User is logged in
  5. Click the Logout button
    - expect: User is logged out
    - expect: Login page is displayed

#### 1.2. Login failure with invalid credentials

**File:** `tests/auth.failure.spec.js`

**Steps:**
  1. Navigate to the home page
    - expect: Page loads with the-internet heading visible
  2. Click on Form Authentication link
    - expect: Login page loads
  3. Enter invalid credentials (username: invalid, password: wrong)
    - expect: Credentials are entered in the form
  4. Click the Login button
    - expect: Error message is displayed
    - expect: User remains on login page

### 2. Checkboxes

**Seed:** `tests/seed.spec.ts`

#### 2.1. Checkboxes can be toggled

**File:** `tests/checkboxes.spec.js`

**Steps:**
  1. Navigate to the home page
    - expect: Page loads with the-internet heading visible
  2. Click on Checkboxes link
    - expect: Checkboxes page loads
    - expect: Two checkboxes are visible
  3. Toggle checkbox 1 to checked state
    - expect: Checkbox 1 is now checked
  4. Toggle checkbox 2 to unchecked state
    - expect: Checkbox 2 is now unchecked

### 3. Dropdown

**Seed:** `tests/seed.spec.ts`

#### 3.1. Dropdown selection

**File:** `tests/dropdown.spec.js`

**Steps:**
  1. Navigate to the home page
    - expect: Page loads with the-internet heading visible
  2. Click on Dropdown link
    - expect: Dropdown page loads
    - expect: Dropdown menu is visible
  3. Select option 2 from the dropdown
    - expect: Option 2 is now selected
    - expect: Dropdown displays selected value

### 4. Dynamic Loading

**Seed:** `tests/seed.spec.ts`

#### 4.1. Dynamic loading example 2

**File:** `tests/dynamicLoading.spec.js`

**Steps:**
  1. Navigate to the home page
    - expect: Page loads with the-internet heading visible
  2. Click on Dynamic Loading link
    - expect: Dynamic Loading page loads
    - expect: Navigation to examples is available
  3. Click on Example 2 link
    - expect: Example 2 page loads
  4. Click the Start button
    - expect: Loading indicator appears
    - expect: Content loads dynamically
    - expect: Finish text appears after loading completes

### 5. File Upload

**Seed:** `tests/seed.spec.ts`

#### 5.1. File upload

**File:** `tests/fileUpload.spec.js`

**Steps:**
  1. Navigate to the home page
    - expect: Page loads with the-internet heading visible
  2. Click on File Upload link
    - expect: File Upload page loads
    - expect: File input field is visible
  3. Upload sample.txt file from fixtures
    - expect: File is selected in the input field
  4. Click the Upload button
    - expect: Upload is successful
    - expect: Uploaded filename is displayed
