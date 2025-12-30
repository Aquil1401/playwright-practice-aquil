# Playwright Interview Notes (Q&A)

This document contains commonly asked Playwright interview questions with clear, real-world answers.
Prepared from the perspective of a Cypress expert transitioning to Playwright.

---

## 1. What framework architecture have you used?

I used Page Object Model (POM) with a clean separation of concerns.
Tests contain only business flows, page classes contain actions and assertions, locators are maintained separately, and test data is isolated for better maintainability.

---

## 2. Why did you choose Page Object Model?

POM improves readability, reduces duplication, and makes maintenance easier.
If UI changes, only the locator or page file needs an update, not every test.

---

## 3. Why are locators kept in separate files?

Keeping locators separate helps in maintaining the framework easily.
When UI changes, only one file needs modification, which avoids breaking multiple tests.

---

## 4. How do you manage sensitive data like credentials?

Sensitive data such as usernames and passwords are managed using environment variables via `.env` files, which are gitignored to avoid security risks.

---

## 5. Why not keep credentials in test data files?

Test data files are version-controlled and shared across the team.
Credentials should never be exposed in repositories, so ENV variables are the safest option.

---

## 6. What kind of test data goes into test data files?

Only non-sensitive, configurable data like expected text, product counts, sorting options, or error messages go into test data files.

---

## 7. How do you handle common actions like login?

Common actions are abstracted inside page classes and reused using `beforeEach` hooks to avoid repetition and keep tests clean.

---

## 8. How do you ensure tests are independent?

Each test starts with a fresh browser context provided by Playwright fixtures.
No test depends on the execution of another test.

---

## 9. How do you validate sorting functionality?

I extract prices from the UI, convert them into numbers, and compare them with a sorted copy of the same array to validate actual business behavior.

---

## 10. How do you debug failed Playwright tests?

I use headed mode, screenshots, videos, and Playwright’s trace viewer.
Trace viewer is especially helpful to replay each test step visually.

---

## 11. How are screenshots and videos handled?

Screenshots and videos are captured only on failure to optimize storage and make debugging easier.

---

## 12. What is Playwright’s auto-waiting feature?

Playwright automatically waits for elements to be actionable before interacting with them, reducing the need for explicit waits.

---

## 13. How do you handle flaky tests?

I avoid hard waits and rely on Playwright’s auto-waiting, assertions, and proper synchronization points to reduce flakiness.

---

## 14. How do you configure different environments?

Base URL and credentials are controlled via environment variables, allowing easy switching between QA, UAT, and PROD environments.

---

## 15. What browsers are supported in your framework?

The framework supports Chromium, Firefox, and WebKit using Playwright’s project configuration.

---

## 16. How is Playwright different from Cypress?

Playwright supports true parallel execution, multi-browser testing, and multi-tab handling out of the box, which is limited in Cypress.

---

## 17. Why did you move from Cypress to Playwright?

Cypress experience helped in writing clean tests, but Playwright provides better scalability, parallel execution, and CI stability for large test suites.

---

## 18. How do you handle retries in your framework?

Retries are enabled only in CI environments to reduce false failures while keeping local runs fast.

---

## 19. How do you ensure framework scalability?

By keeping strict separation between tests, pages, locators, test data, and configuration, the framework remains scalable and easy to extend.

---

## 20. What kind of assertions do you prefer?

I prefer business-level assertions over simple visibility checks to ensure real functionality validation.

---

## 21. How do you structure your Playwright config?

The config includes baseURL, browser projects, retries, screenshots, video, and trace settings to make the framework CI-ready.

---

## 22. How do you handle negative test scenarios?

Negative flows such as invalid login are validated by asserting exact error messages to ensure correct application behavior.

---

## 23. How do you make your tests readable for new team members?

Tests are kept short and descriptive, while complex logic is abstracted into page objects and utility files.

---

## 24. How do you explain this framework in an interview?

I explain the architecture first, then data separation, security practices, and finally how Playwright features are used for stability and scalability.

---

## 25. What makes this framework interview-ready?

It demonstrates real-world practices like POM, environment handling, maintainability, debugging strategy, and Cypress-to-Playwright migration thinking.
