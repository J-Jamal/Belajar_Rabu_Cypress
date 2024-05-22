// cypress/e2e/signin.cy.js
// / <reference types="cypress" />

import userData from "../../../../fixtures/data/userData.json";
import Navigation from "../../../../support/PageObject/Navigation.js";
import account from "../../../../fixtures/data/account.json";
import msg from "../../../../fixtures/data/messageData.json";

// const account = UserLocator.getCustomer();
const submit = Navigation.getSubmit();

describe("User Registration Test Suite", () => {
  beforeEach(() => {
    Navigation.visitHomepage();
    cy.clearAllCookies;
    cy.contains("Create an Account").click();
    cy.clearAllCookies;
  });

  it("TC-1_Verifikasi dapat membuat akun untuk masuk_(POSITIVE)", () => {
    const randomEmail = `test${Math.floor(Math.random() * 100000)}@example.com`;
    cy.get(account.first).type(userData.validUser.firstName);
    cy.get(account.last).type(userData.validUser.lastName);
    cy.get(account.email).type(randomEmail);
    cy.get(account.paswd).type(userData.validUser.password, {
      sensitive: true,
    });
    cy.get(account.paswdConfirm).type(userData.validUser.password);
    cy.get(submit).click();
    cy.get(account.successMessageRegist)
      .should("be.visible")
      .should("contain", msg.registerSuccess); //assertion
  });

  it("TC-2_Verifikasi tidak dapat membuat akun untuk masuk dengan invalid email_(NEGATIVE)", () => {
    const randomEmail = `test${Math.floor(Math.random() * 100000)}@example.com`;
    cy.get(account.first).type(userData.invalidUser1.firstName);
    cy.get(account.last).type(userData.invalidUser1.lastName);
    cy.get(account.email).type(randomEmail);
    cy.get(account.paswd).type(userData.invalidUser1.password);
    cy.get(account.paswdConfirm).type("differentpassword");
    cy.get(submit).click();
    cy.get(account.ConfirmError)
      .should("be.visible")
      .should("contain", msg.passwordConfirmError); //assertion
  });

  it("TC-3_Verifikasi tidak dapat membuat akun untuk masuk dengan password hanya huruf_(NEGATIVE)", () => {
    const randomEmail = `test${Math.floor(Math.random() * 100000)}@example.com`;
    cy.get(account.first).type(userData.invalidUser2.firstName);
    cy.get(account.last).type(userData.invalidUser2.lastName);
    cy.get(account.email).type(randomEmail);
    cy.get(account.paswd).type(userData.invalidUser2.password, {
      sensitive: true,
    });
    cy.get(account.paswdConfirm).type(userData.invalidUser2.password);
    cy.get(account.InvalidFormat)
      .should("be.visible")
      .should("contain", msg.password2); //assertion
  });

  it("TC-4_Verifikasi tidak dapat membuat akun untuk masuk dengan password hanya angka_(NEGATIVE)", () => {
    const randomEmail = `test${Math.floor(Math.random() * 100000)}@example.com`;
    cy.get(account.first).type(userData.invalidUser3.firstName);
    cy.get(account.last).type(userData.invalidUser3.lastName);
    cy.get(account.email).type(randomEmail);
    cy.get(account.paswd).type(userData.invalidUser3.password, {
      sensitive: true,
    });
    cy.get(account.paswdConfirm).type(userData.invalidUser3.password, {
      sensitive: true,
    });
    cy.get(submit).click();
    cy.get(account.InvalidFormat)
      .should("be.visible")
      .should("contain", msg.password2); //assertion
  });

  it("TC-5_Verifikasi tidak dapat membuat akun untuk masuk dengan password dengan symbol_(NEGATIVE)", () => {
    const randomEmail = `test${Math.floor(Math.random() * 100000)}@example.com`;
    cy.get(account.first).type(userData.invalidUser4.firstName);
    cy.get(account.last).type(userData.invalidUser4.lastName);
    cy.get(account.email).type(randomEmail);
    cy.get(account.paswd).type(userData.invalidUser4.password, {
      sensitive: true,
    });
    cy.get(account.paswdConfirm).type(userData.invalidUser4.password, {
      sensitive: true,
    });
    cy.get(submit).click();
    cy.get(account.InvalidFormat)
      .should("be.visible")
      .should("contain", msg.password2); //assertion
  });

  it("TC-6_Verifikasi tidak dapat membuat akun untuk masuk dengan password dengan kombinasi huruf dan angka_(NEGATIVE)", () => {
    const randomEmail = `test${Math.floor(Math.random() * 100000)}@example.com`;
    cy.get(account.first).type(userData.invalidUser5.firstName);
    cy.get(account.last).type(userData.invalidUser5.lastName);
    cy.get(account.email).type(randomEmail);
    cy.get(account.paswd).type(userData.invalidUser5.password, {
      sensitive: true,
    });
    cy.get(account.paswdConfirm).type(userData.invalidUser5.password, {
      sensitive: true,
    });
    cy.get(submit).click();
    cy.get(account.InvalidFormat)
      .should("be.visible")
      .should("contain", msg.password2); //assertion
  });

  it("TC-7_Verifikasi tidak dapat membuat akun untuk masuk dengan password dengan kombinasi huruf dan symbol_(NEGATIVE)", () => {
    const randomEmail = `test${Math.floor(Math.random() * 100000)}@example.com`;
    cy.get(account.first).type(userData.invalidUser6.firstName);
    cy.get(account.last).type(userData.invalidUser6.lastName);
    cy.get(account.email).type(randomEmail);
    cy.get(account.paswd).type(userData.invalidUser6.password, {
      sensitive: true,
    });
    cy.get(account.paswdConfirm).type(userData.invalidUser6.password, {
      sensitive: true,
    });
    cy.get(submit).click();
    cy.get(account.InvalidFormat)
      .should("be.visible")
      .should("contain", msg.password1); //assertion
  });

  it("TC-8_Verifikasi tidak dapat membuat akun untuk masuk dengan password dengan kombinasi angka dan symbol_(NEGATIVE)", () => {
    const randomEmail = `test${Math.floor(Math.random() * 100000)}@example.com`;
    cy.get(account.first).type(userData.invalidUser7.firstName);
    cy.get(account.last).type(userData.invalidUser7.lastName);
    cy.get(account.email).type(randomEmail);
    cy.get(account.paswd).type(userData.invalidUser7.password, {
      sensitive: true,
    });
    cy.get(account.paswdConfirm).type(userData.invalidUser7.password, {
      sensitive: true,
    });
    cy.get(submit).click();
    cy.get(account.InvalidFormat)
      .should("be.visible")
      .should("contain", msg.password2); //assertion
  });

  it("TC-9_Verifikasi tidak dapat membuat akun untuk masuk jika semua kolom kosong_(NEGATIVE)", () => {
    cy.get(submit).click();
    cy.get("#form-validate").should("be.visible");
  });

  it("TC-10_Verifikasi tidak dapat membuat akun jika email sudah terdaftar_(NEGATIVE)", () => {
    cy.get(account.first).type(userData.validUser.firstName);
    cy.get(account.last).type(userData.validUser.lastName);
    cy.get(account.email).type(userData.validUser.email);
    cy.get(account.paswd).type(userData.validUser.password, {
      sensitive: true,
    });
    cy.get(account.paswdConfirm).type(userData.validUser.password, {
      sensitive: true,
    });
    cy.get(submit).click();
    cy.get(".message-error")
      .should("be.visible")
      .should("contain", msg.registerError3); //assertion
  });

  it("TC-12_sembarangan_(NEGATIVE)", () => {
    cy.get(account.first).click();
    cy.get(account.last).click();
    cy.get(account.email).click();
    cy.get(account.paswd).click();
    cy.get(account.ConfirmError).click();
    cy.get(submit).click();
    cy.get("#form-validate")
      .should("be.visible")
      .should("contain", msg.registerError1); //assertion
  });

  // Add more test cases for other scenarios related to user registration.
});
