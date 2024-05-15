// cypress/e2e/signin.cy.js
/// <reference types="cypress" />

import LoginPage from "../../../../support/PageObject/LoginPage.js";
import Navigation from "../../../../support/PageObject/Navigation.js";
import userData from "../../../../fixtures/data/userData.json";
// import { visible } from "ansi-colors";
// import { should } from "chai";
// import msg from "../../../../fixtures/data/messageData.json";

const loginPage = new LoginPage();
const possibleErrorMessages = [
  "The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later.",
  "Invalid Form Key. Please refresh the page.",
  "A login and a password are required.",
]; // Possible error messages

describe("[FT]_Login Functionality Test Suite", () => {
  beforeEach(() => {
    Navigation.visitAccount();
    cy.clearAllCookies();
  });

  // **Positive Test Cases**

  it("TC-1_should allow login with valid credentials", () => {
    loginPage.login(userData.validUser.email, userData.validUser.password);
    cy.get("#maincontent").should("contain", "My Account"); //assertion
  });

  // **Negative Test Cases**

  it("TC-2_should not allow login with an invalid email", () => {
    const wrongEmails = [userData.invalidUser2.email];
    for (let i = 0; i < wrongEmails.length; i++) {
      loginPage.login(wrongEmails[i], userData.validUser.password);
      cy.verifyErrorMessage(possibleErrorMessages); //assertion
      cy.wait(Math.random() * 2000 + 1000);
    }
  });
  it("TC-3_should not allow login with an invalid password", () => {
    const invalidPasswords = [userData.invalidUser1.password];
    for (let i = 0; i < invalidPasswords.length; i++) {
      loginPage.login(userData.validUser.email, invalidPasswords[i]);
      cy.verifyErrorMessage(possibleErrorMessages); //assertion
      cy.wait(Math.random() * 2000 + 1000);
    }
  });

  it("TC-4_should not allow login with empty username and password", () => {
    cy.get("#send2").click();
    cy.verifyErrorMessage(possibleErrorMessages); //assertion
  });

  it("TC-5_should not allow login with whitespace username", () => {
    const username = " ";
    loginPage.login(username, userData.validUser.password);
    cy.verifyErrorMessage(possibleErrorMessages); //assertion
    cy.wait(Math.random() * 4000 + 1000);
  });

  it("TC-6_should not allow login with special characters in username", () => {
    const username = "invalid@username";
    loginPage.login(username, userData.validUser.password);
    cy.verifyErrorMessage(possibleErrorMessages); //assertion
    cy.wait(Math.random() * 4000 + 1000);
  });

  it("TC-7_should not allow login with exceeding password length (if applicable)", () => {
    const exceedingPassword = "longpasswordthatexceedsthelimit";
    loginPage.login(userData.validUser.email, exceedingPassword);
    cy.verifyErrorMessage(possibleErrorMessages); //assertion
    cy.wait(Math.random() * 2000 + 1000);
  });

  it("TC-8_should not allow login with missing characters in password (if applicable)", () => {
    const incompletePasswords = ["passwordwithout@"];
    incompletePasswords.forEach((password) => {
      loginPage.login(userData.validUser.email, password);
      cy.verifyErrorMessage(possibleErrorMessages); //assertion
      cy.wait(Math.random() * 2000 + 1000);
    });
  });

  it("TC-9_should not allow login with SQL injection attempt", () => {
    const sqlInjectionAttempts = [
      "' OR '1'='1",
      "' OR 1=1 --",
      "'; DROP TABLE users; --",
    ];
    sqlInjectionAttempts.forEach((password) => {
      loginPage.login(userData.validUser.email, password);
      cy.verifyErrorMessage(possibleErrorMessages); //assertion
      cy.wait(Math.random() * 2000 + 1000);
    });
  });

  it("TC-10_should not allow login with cross-site scripting (XSS) attempt", () => {
    const xssAttempts = [
      "<script>alert('XSS')</script>",
      "<img src='invalid-image' onerror='alert(\"XSS\")'>",
    ];
    xssAttempts.forEach((password) => {
      loginPage.login(userData.validUser.email, password);
      cy.verifyErrorMessage(possibleErrorMessages); //assertion
      cy.wait(Math.random() * 2000 + 1000);
    });
  });
});
