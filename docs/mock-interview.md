# Mock Interview – Playwright (Real Questions & Answers)

## Q1. Explain your Playwright framework.
I built a Playwright framework using Page Object Model.
Locators, test data, and sensitive credentials are separated.
Tests are clean and readable, and the framework is CI-ready.

---

## Q2. Why did you choose Playwright over Cypress?
Playwright supports true parallel execution, multi-browser testing, and multi-tab handling, which is limited in Cypress.

---

## Q3. How do you handle flaky tests?
I avoid hard waits and rely on Playwright auto-waiting, proper assertions, and trace viewer for debugging.

---

## Q4. How do you debug test failures?
I use headed mode, screenshots, videos, and Playwright trace viewer to replay failures step by step.

---

## Q5. How do you manage test data?
Sensitive data comes from ENV variables.
Non-sensitive test data is stored in page-wise test data files.

---

## Q6. What makes your framework maintainable?
Strict separation of locators, test data, page actions, and tests.
UI changes impact only one file.
