# Applause Technical Assignment

## Description
Characteristics:

- This project uses Webdriver IO to interect with the broswer.
- Chrome is the default browser.
- Mocha is the defined lib to structure the tests
- This projects uses POM to separate the different layers
- This project uses Allure for reporting

## What you need?
- Latest Stable [NodeJs](https://nodejs.org/en/download/package-manager) version

## Init the project
```bash
# Clone the repository
git clone git@github.com:diegoCruz1991/applause_test_aut.git

# Navigate into the directory
cd applause_test_aut

# Install dependencies
npm install

# Run the tests
npm run test

# Generate and open report
npm run allure:generate
npm run allure:open
```

## Importante notes!
- Skyscanner has a CAPTCHA for robots and doesn't allow to automate the page, this test cannot run completely but each CSS selector was tested independently and validated.