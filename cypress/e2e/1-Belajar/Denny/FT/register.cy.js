/// <reference types = "cypress" />

const message = require("../../../../fixtures/data/messageData.json");
const account = require("../../../../fixtures/data/account.json");
const user = require("../../../../fixtures/data/userData.json");
const { pages } = require("../PageObject/navigation");
const { register } = require("../PageObject/registerPage");
const { should } = require("chai");

const getPages = pages();
const dataRegister = register();

describe("Test suite Create Account", () => {
  beforeEach(() => {
    cy.clearAllCookies();
    cy.clearAllLocalStorage();
    getPages.visitHome();
    cy.contains("Create an Account").click();
  });

  describe("POSITIVE", () => {
    it("valid user name & password", () => {
      cy.get(account.first).type(user.validUser.firstName);
      cy.get(account.last).type(user.validUser.lastName);
      cy.get(account.email).type(`${dataRegister.randomEmail}@gmail.com`);
      cy.get(account.paswd).type(user.validUser.password);
      cy.get(account.paswdConfirm).type(
        user.validUser["password-confirmation"]
      );
      cy.get(getPages.getSubmit()).click();
      cy.get(".message-success").should("contain", message.registerSuccess);
    });
  });

  describe("NEGATIVE", () => {
    it("Empty username & password", () => {
      cy.get(account.first).should("be.empty");
      cy.get(account.last).should("be.empty");
      cy.get(account.email).should("be.empty");
      cy.get(account.paswd).should("be.empty");
      cy.get(account.paswdConfirm).should("be.empty");
      cy.get(getPages.getSubmit()).click();
      cy.get("#maincontent").should("contain", message.registerError1);
    });

    it("Empty username & valid password", () => {
      cy.get(account.email).type(`${dataRegister.randomEmail}@gmail.com`);
      cy.get(account.paswd).type(user.validUser.password);
      cy.get(account.paswdConfirm).type(
        user.validUser["password-confirmation"]
      );
      cy.get(getPages.getSubmit()).click();
      cy.get("#maincontent").should("contain", message.registerError1);
    });

    it("Valid username & empty password", () => {
      cy.get(account.email).type(`${dataRegister.randomEmail}@gmail.com`);
      cy.get(account.first).type(user.validUser.firstName);
      cy.get(account.last).type(user.validUser.lastName);
      cy.get(getPages.getSubmit()).click();
      cy.get("#maincontent").should("contain", message.registerError1);
    });

    it("Create account with the wrong email format", () => {
      cy.get(account.first).type(user.validUser.firstName);
      cy.get(account.last).type(user.validUser.lastName);
      cy.get(account.email).type(dataRegister.randomEmail);
      cy.get(account.paswd).type(user.validUser.password);
      cy.get(account.paswdConfirm).type(
        user.validUser["password-confirmation"]
      );
      cy.get(getPages.getSubmit()).click();
      cy.get("#email_address-error").should("contain", message.InvalidEmail);
    });

    it("Create an account with a password of less than 8 character", () => {
      cy.get(account.first).type(user.invalidUser1.firstName);
      cy.get(account.last).type(user.invalidUser1.lastName);
      cy.get(account.email).type(`${dataRegister.randomEmail}@gmail.com`);
      cy.get(account.paswd).type(user.invalidUser1.password);
      cy.get(account.paswdConfirm).type(
        user.invalidUser1["password-confirmation"]
      );
      cy.get(getPages.getSubmit()).click();
      cy.get("#form-validate > .account").should("contain", message.password1);
    });

    it("Create an account with a password only in lowercase letters", () => {
      cy.get(account.first).type(user.invalidUser2.firstName);
      cy.get(account.last).type(user.invalidUser2.lastName);
      cy.get(account.email).type(`${dataRegister.randomEmail}@gmail.com`);
      cy.get(account.paswd).type(user.invalidUser2.password);
      cy.get(account.paswdConfirm).type(
        user.invalidUser2["password-confirmation"]
      );
      cy.get(getPages.getSubmit()).click();
      cy.get("#form-validate > .account").should("contain", message.password2);
    });

    it("Create an account with a password only in number", () => {
      cy.get(account.first).type(user.invalidUser3.firstName);
      cy.get(account.last).type(user.invalidUser3.lastName);
      cy.get(account.email).type(`${dataRegister.randomEmail}@gmail.com`);
      cy.get(account.paswd).type(user.invalidUser3.password);
      cy.get(account.paswdConfirm).type(
        user.invalidUser3["password-confirmation"]
      );
      cy.get(getPages.getSubmit()).click();
      cy.get("#form-validate > .account").should("contain", message.password2);
    });

    it("Create an account with a password only in special character", () => {
      cy.get(account.first).type(user.invalidUser4.firstName);
      cy.get(account.last).type(user.invalidUser4.lastName);
      cy.get(account.email).type(`${dataRegister.randomEmail}@gmail.com`);
      cy.get(account.paswd).type(user.invalidUser4.password);
      cy.get(account.paswdConfirm).type(
        user.invalidUser4["password-confirmation"]
      );
      cy.get(getPages.getSubmit()).click();
      cy.get("#form-validate > .account").should("contain", message.password2);
    });

    it("Create an account with a password only in number & character", () => {
      cy.get(account.first).type(user.invalidUser5.firstName);
      cy.get(account.last).type(user.invalidUser5.lastName);
      cy.get(account.email).type(`${dataRegister.randomEmail}@gmail.com`);
      cy.get(account.paswd).type(user.invalidUser5.password);
      cy.get(account.paswdConfirm).type(
        user.invalidUser5["password-confirmation"]
      );
      cy.get(getPages.getSubmit()).click();
      cy.get("#form-validate > .account").should("contain", message.password2);
    });

    it("create an account with a password that is not the same as the confirmed password", () => {
      cy.get(account.first).type(user.invalidUser6.firstName);
      cy.get(account.last).type(user.invalidUser6.lastName);
      cy.get(account.email).type(`${dataRegister.randomEmail}@gmail.com`);
      cy.get(account.paswd).type(user.invalidUser6.password);
      cy.get(account.paswdConfirm).type(
        user.invalidUser6["password-confirmation"]
      );
      cy.get(getPages.getSubmit()).click();
      cy.get("#form-validate > .account").should(
        "contain",
        message.passwordConfirmError
      );
    });

    it("Create an account with a password only in number & special character", () => {
      cy.get(account.first).type(user.invalidUser7.firstName);
      cy.get(account.last).type(user.invalidUser7.lastName);
      cy.get(account.email).type(`${dataRegister.randomEmail}@gmail.com`);
      cy.get(account.paswd).type(user.invalidUser7.password);
      cy.get(account.paswdConfirm).type(
        user.invalidUser7["password-confirmation"]
      );
      cy.get(getPages.getSubmit()).click();
      cy.get("#form-validate > .account").should("contain", message.password2);
    });

    it("Create an account with the registered email", () => {
      cy.get(account.first).type(user.validUser.firstName);
      cy.get(account.last).type(user.validUser.lastName);
      cy.get(account.email).type(user.validUser.email);
      cy.get(account.paswd).type(user.validUser.password);
      cy.get(account.paswdConfirm).type(
        user.validUser["password-confirmation"]
      );
      cy.get(getPages.getSubmit()).click();
      cy.get(account.Errormsg).should("contain", message.registerError2);
    });
  });
});
