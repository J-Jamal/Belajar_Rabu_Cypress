// describe("Contoh test cases", () => {
// it("User registrasi", () => {
//   cy.visit("https://magento.softwaretestingboard.com/");
//   /* ==== Generated with Cypress Studio ==== */
//   cy.get(".panel > .header > :nth-child(3) > a").click();
//   cy.get("#firstname").type("Uji3");
//   cy.get("#lastname").type("test3");
//   cy.get("#email_address").type("Ujicoba3@test.com");
//   cy.get("#password").type("test12345678!");
//   cy.get("#password-confirmation").type("test12345678!");
//   cy.get(
//     "#form-validate > .actions-toolbar > div.primary > .action > span"
//   ).click();
//   cy.get(".message-success")
//     .should("be.visible")
//     .should("contain", "Thank you for registering with Main Website Store.");
//   cy.get("#maincontent").should("be.visible").should("contain", "My Account");
//   /* ==== End Cypress Studio ==== */
// });

// import userData from "../../../../fixtures/data/userData.json";
// import Navigation from "../../../../support/PageObject/Navigation";
// import account from "../../../../fixtures/data/account.json";
// import msg from "../../../../fixtures/data/messageData.json";

import userData from "../../../../fixtures/data/userData.json";
import Navigation from "../../../../support/PageObject/Navigation.js";
import account from "../../../../fixtures/data/account.json";
import msg from "../../../../fixtures/data/messageData.json";

// const account = UserLocator.getCustomer();
// const submit = Navigation.visitAccount();

// describe("User Login Test Suite", () => {
//   beforeEach(() => {
//     Navigation.visitAccount();
//     cy.clearCookies();
//   });

it("TC-1_Verifikasi login akun untuk masuk_(POSITIVE)", () => {
  cy.get(account.loginEmailInputSelector).type(userData.validUser.email);
  cy.get(account.loginPasswordInputSelector).type(userData.validUser.password);
  cy.get(
    ".login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2"
  ).click();
  // cy.get(account.successMessageRegist)
  cy.get("#maincontent").should("be.visible").should("contain", "My Account");
});

const account = UserLocator.getCustomer();
const submit = Navigation.loginSubmit();

describe("User Login Test Suite", () => {
  beforeEach(() => {
    Navigation.visitAccount();
    cy.clearAllCookies;
    cy.contains("Sign In").click();
    cy.clearAllCookies;
  });

  it("TC-1_Verifikasi login akun untuk masuk_(POSITIVE)", () => {
    cy.get(account.loginEmailInputSelector).type(userData.validUser.email);
    cy.get(account.loginPasswordInputSelector).type(
      userData.validUser.password
    );
    cy.get(submit).click();
    cy.get("#maincontent").should("be.visible").should("contain", "My Account");
  });
});
