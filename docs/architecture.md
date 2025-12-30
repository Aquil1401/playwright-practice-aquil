# Framework Architecture

This project follows Page Object Model (POM) with strict separation of responsibilities.

## Layers
- Tests: Business flows only
- Pages: Actions + assertions
- Locators: UI selectors
- Test Data: Non-sensitive input & expected values
- ENV: Sensitive configuration

## Benefits
- Easy maintenance
- Scalable for large projects
- Clean and readable tests
