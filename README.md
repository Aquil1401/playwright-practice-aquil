# GITHUB BADGES

![Playwright](https://img.shields.io/badge/Playwright-Automation-green)
![TypeScript](https://img.shields.io/badge/TypeScript-Strong-blue)
![POM](https://img.shields.io/badge/Design-POM-orange)
![Status](https://img.shields.io/badge/Status-Interview%20Ready-brightgreen)

## This framework is designed and maintained by **Md Aquil** for interview preparation and real-world automation use cases.


# Playwright Automation Framework (POM)

A scalable and maintainable UI automation framework built using **Playwright + TypeScript**, following **Page Object Model (POM)** with separated **locators**, **test data**, and **environment-based sensitive configuration**.

---

## 🚀 Why this Framework?

- Designed for **real-world automation projects**
- Clean separation of concerns:
  - Locators
  - Test data
  - Page actions
  - Tests
- Secure handling of credentials using **ENV variables**
- Easy to maintain when UI changes
- Suitable for **mid-level to senior-level interviews**

---

## 🛠 Tech Stack

- **Playwright**
- **TypeScript**
- **Page Object Model (POM)**
- **dotenv (ENV config)**
- **Cross-browser testing**

---

## 📁 Project Structure

```text
playwright-pom-framework/
│
├── tests/              # Test specs
├── pages/              # Page Object classes (actions + assertions)
├── locators/           # Page-wise locators
├── testdata/           # Page-wise test data (non-sensitive)
├── utils/              # ENV handling utilities
├── docs/               # Documentation (design, interview notes)
├── playwright.config.ts
├── .env
└── README.md
```
````

## 🔧 Installation & Setup

## 1️⃣ Clone the repository

git clone https://github.com/yourusername/playwright-pom-framework.git
cd playwright-pom-framework

## 2️⃣ Install dependencies

npm install

## 3️⃣ Configure environment variables

Create a .env file in the root directory:

USERNAME=your_username
PASSWORD=your_password

## 4️⃣ Run tests

npx playwright test

## 📚 Documentation

[Framework Architecture](docs/architecture.md)
[HR / Interview Round](docs/hr-round.md)
[Cypress vs Playwright](docs/cypress-vs-playwright.md)
[Resume Points](docs/resume-points.md)
[Mock Interview Questions](docs/mock-interview.md)
[Playwright Interview Notes](docs/interview-notes.md)
[Why Playwright](docs/why-playwright.md)

## ▶️ Playwright Commands

Run Tests
npx playwright test # Headless mode
npx playwright test --headed # Headed mode
npx playwright test --ui # UI mode

## Targeted Execution

npx playwright test tests/login.spec.ts
npx playwright test -g "Login"
npx playwright test --project=chromium

## Debugging

npx playwright test --debug
npx playwright test --workers=1
npx playwright test --retries=2

## 🐞 Reports & Debugging

npx playwright show-report
npx playwright test --trace on
npx playwright show-trace trace.zip

## Failure Artifacts (Auto Configured)

Screenshot → on failure
Video → retained on failure
Trace → captured on first retry
Configured via (playwright.config.ts)

## 🤝 Contributing

Contributions are welcome.
Feel free to open an issue or submit a pull request.

## 👤 Author

**Md Aquil**
QA Automation Engineer | Playwright | Cypress | TypeScript

- Designed and developed this Playwright automation framework from scratch
- Focused on real-world scalability, maintainability, and interview readiness
- Actively maintaining and improving the framework

GitHub: https://github.com/Aquil1401/playwright-practice-aquil


## 📄 License

This project is licensed under the MIT License.