import userData from "../../../../fixtures/data/userData.json";
import Navigation from "../../../../support/PageObject/Navigation.js";
import account from "../../../../fixtures/data/account.json";
import msg from "../../../../fixtures/data/messageData.json";

const randomEmail = `test${Math.floor(Math.random() * 100000)}@example.com`;
const submit = Navigation.getSubmit();

describe("Navigasi ke halaman create account", () => {
  beforeEach(() => {
    cy.clearAllCookies;
    cy.visit('https://magento.softwaretestingboard.com/');
    cy.contains("Create an Account").click();
    cy.clearAllCookies;
  });  
  
    it('TC 1 - Positive TC : Create account dengan semua inputan Sesuai', function() {
      cy.get(account.first).type(userData.validUser.firstName);
      cy.get(account.last).type(userData.validUser.lastName);
      cy.get(account.email).type(userData.invalidUser8.email);
      cy.get(account.paswd).type(userData.validUser.password);
      cy.get(account.paswdConfirm).type(userData.validUser.password);
      cy.get(submit).click();
    });

    //example
    // it('TC 2 - Negative TC : Create account dengan format email salah', function() {
    //   cy.get(account.first).type(userData.invalidUser1.firstName);
    //   cy.get(account.last).type(userData.invalidUser1.lastName);
    //   cy.get(account.email).type(userData.invalidUser1.email);
    //   cy.get(account.paswd).type(userData.invalidUser1.password);
    //   cy.get(account.paswdConfirm).type(userData.invalidUser1.password);
    //   cy.get(submit).click();
    //   cy.get(account.ConfirmError).should("be.visible").should("contain", msg.InvalidEmail);
    // });

    //example 1
    // it('TC 3 - Negative TC : Create account dengan mengisi password kombinasi huruf dan angka saja', function() {
    //   cy.get(account.first).type(userData.invalidUser2.firstName);
    //   cy.get(account.email).type(randomEmail);
    //   cy.get(account.paswd).type(userData.invalidUser5.password);
    //   cy.get(account.paswdConfirm).type(userData.invalidUser5.password);
    //   cy.get(submit).click();
    //   cy.get(msg.password2).should('be.visible');
    // });

    // it('TC 4 - Negative TC : Create account dengan mengisi kombinasi password huruf dan symbol saja', function() {
    //   cy.get(account.first).type(userData.invalidUser3.firstName);
    //   cy.get(account.email).type(randomEmail);
    //   cy.get(account.paswd).type(userData.invalidUser2.password);
    //   cy.get(account.paswdConfirm).type(userData.invalidUser2.password);
    //   cy.get(submit).click();
    //   cy.get(msg.password2).should('be.visible');
    // });

    // it('TC 5 - Negative TC : Create account dengan mengisi kombinasi password angka dan symbol saja', function() {
    //   cy.get(account.first).type(userData.invalidUser4.firstName);
    //   cy.get(account.email).type(randomEmail);
    //   cy.get(account.paswd).type(userData.invalidUser7.password);
    //   cy.get(account.paswdConfirm).type(userData.invalidUser7.password);
    //   cy.get(submit).click();
    //   cy.get(msg.password2).should('be.visible');
    // });

    // it('TC 6 - Negative TC : Create account dengan mengisi kombinasi password huruf, angka dan symbol sebanyak 6 karakter', function() {
    //   cy.get(account.first).type(userData.invalidUser5.firstName);
    //   cy.get(account.email).type(randomEmail);
    //   cy.get(account.paswd).type(userData.invalidUser8.password);
    //   cy.get(account.paswdConfirm).type(userData.invalidUser8.password);
    //   cy.get(submit).click();
    //   cy.get(msg.password2).should('be.visible');
    // });

    // it('TC 7 - Negative TC : Create account dengan mengisi field confirm password yang tidak sama dengan field password', function() {
    //   cy.get(account.first).type(userData.invalidUser6.firstName);
    //   cy.get(account.email).type(randomEmail);
    //   cy.get(account.paswd).type(userData.invalidUser1.password);
    //   cy.get(account.paswdConfirm).type(userData.invalidUser1.password);
    //   cy.get(submit).click();
    //   cy.get(msg.passwordConfirmError).should('be.visible');
    // });

    it('TC 8 - Negative TC : Create account dengan mengosongi field first name', function() {
      cy.get(account.first).type(userData.invalidUser2.lastName);
      cy.get(account.email).type(randomEmail);
      cy.get(account.paswd).type(userData.invalidUser2.password);
      cy.get(account.paswdConfirm).type(userData.invalidUser2.password);
      cy.get(submit).click();
      cy.get('#firstname-error').should('be.visible');
    });

    it('TC 9 - Negative TC : Create account dengan mengosongi field last name', function() {
      cy.get(account.first).type(userData.invalidUser2.firstName);
      cy.get(account.email).type(randomEmail);
      cy.get(account.paswd).type(userData.invalidUser2.password);
      cy.get(account.paswdConfirm).type(userData.invalidUser2.password);
      cy.get(submit).click();
      cy.get('#lastname-error').should('be.visible');
    });

    it('TC 10 - Negative TC : Create account dengan mengosongi email', function() {
      cy.get(account.first).type(userData.invalidUser2.firstName);
      cy.get(account.email).type(userData.invalidUser2.lastName);
      cy.get(account.paswd).type(userData.invalidUser1.password);
      cy.get(account.paswdConfirm).type(userData.invalidUser1.password);
      cy.get(submit).click();
      cy.get('#email_address-error').should('be.visible');
    });
  
    it('TC 11 - Negative TC : Create account tanpa mengisi password', function() {
      cy.get(account.first).type(userData.invalidUser2.firstName);
      cy.get(account.first).type(userData.invalidUser2.lastName);
      cy.get(account.email).type(randomEmail);
      cy.get(account.paswdConfirm).type(userData.invalidUser1.password);
      cy.get(submit).click();
      cy.get('#password-error').should('be.visible');
    });

    it('TC 12- Negative TC : Create account dengan mengosongi konfirmasi password', function() {
      cy.get(account.first).type(userData.invalidUser2.firstName);
      cy.get(account.first).type(userData.invalidUser2.lastName);
      cy.get(account.email).type(randomEmail);
      cy.get(account.paswd).type(userData.invalidUser1.password);
      cy.get(submit).click();
      cy.get('#password-confirmation-error').should('be.visible');
    });

    it('TC 13 - Negative TC : Create account tanpa mengisi field apapun & langsung submit', function() {
      cy.get(submit).click();
      cy.get(msg.registerError1).should('be.visible');
    });

    // it('TC 14 - Negative TC : Create account dengan register akun yang sudah pernah terdaftar', function() {
    //   cy.get(account.first).type(userData.invalidUser8.firstName);
    //   cy.get(account.first).type(userData.invalidUser8.lastName);
    //   cy.get(account.email).type(userData.invalidUser8.email);
    //   cy.get(account.paswd).type(userData.invalidUser1.password);
    //   cy.get(submit).click();
    // });
    
  
  })