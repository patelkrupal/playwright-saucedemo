### Playwright Automation testing using JavaScript

This is an example project demonstrating the automation of Playwright tests using a Page Object design pattern framework.

#### Application Under Test

We are testing the application at https://www.saucedemo.com/, a **React.js** frontend.

- URL: https://www.saucedemo.com/ 
- OS: Windows
 
#### Test Scenarios

```bash
Scenario 1: Login as a standard user, verify the products page, and log out

Description: The user logs into the application, verifies all elements on the products page, and logs out. This is a smoke test.

Test name: TC_01_productPage.test.js
```
 
```bash
Scenario 2: Login as a standard user and complete the checkout workflow

Description: The user logs in, completes the checkout process, and logs out. This is a happy path test.

Test name: TC_02_checkoutWorkflow.test.js
```

```bash
Scenario 3: Login as a standard user to select a product, then login as a performance_glitch_user to complete the checkout

Description: The standard user verifies all necessary buttons, links, and error messages on the pages, and the performance_glitch_user completes the checkout process.

Test name: TC_03_checkoutWithSUandPGU.test.js
```

```bash 
Scenario 4: Login as a problem_user to add an item to the cart, then login as a performance_glitch_user to complete checkout

Description: The problem_user adds an item to the cart but cannot complete the checkout due to a last name error. The performance_glitch_user then logs in and completes the checkout process.

Test name: TC_04_checkoutWithPUandPGU.test.js
```

```bash 
Scenario 5: Login as locked_out_user to verify the error message, then login as performance_glitch_user to add an item, and complete checkout as a standard user

Description: The locked_out_user validates the login error message. The performance_glitch_user adds an item to the cart and logs out, while the standard user completes the checkout process.

Test name: TC_05_checkoutWithPGUandSU.test.js
```

#### Installation

Follow the steps below to install dependencies and run the tests:

1. Clone (or download as a ZIP) the repository to your local machine.
2. Navigate to the project directory in the terminal and run the following commands:

Clone the repository:

```bash
git clone https://github.com/patelkrupal/playwright-saucedemo.git
```

Install dependencies:

```bash
npm install
npx playwright install
```

#### Running the Application

Run tests in parallel on specific browsers:

- Chrome:

```bash
npm run test:chrome
```

- Firefox:

```bash
npm run test:firefox
```

- Safari:

```bash
npm run test:safari
```

- Edge:

```bash
npm run test:edge
```

Run tests in parallel on all supported browsers:

```bash
npm run test
```

#### Playwright Test Report 

To generate an HTML test report:

```bash
npm run test:chrome
```

#### Allure Test Report

To generate an Allure test report:

```bash
1. npm run allure:clean
2. npm run test:chrome
3. npm run allure:report
```

#### Github

- Repository: https://github.com/patelkrupal/playwright-saucedemo.git