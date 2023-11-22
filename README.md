# Cypress Automated Tests for Google Search

This repository contains automated tests for Google Search using Cypress.

## Setup and Execution

Follow these steps to set up and execute the automated tests:

```
git clone https://github.com/lucasfop/beontech
cd beontech
npm install
npx cypress open
```
This will open the Cypress Test Runner. Click on google_search_spec.js to execute the tests in a real browser.

Prerequisites

Node.js and npm: Make sure you have Node.js and npm installed on your machine. You can download them from https://nodejs.org/.
Supported Browser: Ensure you have a supported browser installed (e.g., Chrome) for Cypress to run.
Test Design

**Valid Search Test**
**Description**: Simulates a valid search on Google.
**Steps**:
  Visit Google Search.
  Enter a search query.
  Press Enter.
  Verify that search results are displayed.
**Assumptions**: Assumes that Google Search's structure remains consistent.


**Search Result Navigation Test**
**Description**: Simulates clicking on a search result and verifies the redirection.
**Steps**:
  Visit Google Search.
  Enter a search query.
  Press Enter.
  Click on the first search result.
  Verify that the current URL matches the expected result URL.
**Assumptions**: Assumes the first search result is clickable and the URL structure remains consistent.
