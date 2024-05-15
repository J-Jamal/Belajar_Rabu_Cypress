/// <reference types="cypress" />

import Navigation from "../../../../support/PageObject/Navigation";

const submit = Navigation.getSubmit();

describe('User Registration', () => {
  beforeEach(()=> {
    Navigation.visitHomepage();
    cy.clearAllCookies;
    cy.contains("Create an Account").click();
    cy.clearAllCookies;
  });

  it('TC-1_Registrasi akun (POSITIVE)', () => {
    /* ==== Generated with Cypress Studio ==== */
    cy.get('.panel > .header > :nth-child(3) > a').click();
    cy.get('#firstname').type('Sheila');
    cy.get('#lastname').type('Delvi');
    cy.get('#email_address').type('sheila@gmail.com');
    cy.get('#password').type('Hadi1234');
    cy.get('#password-confirmation').type('Hadi1234');
    cy.get('#form-validate > .actions-toolbar > div.primary > .action > span').click();
    cy.get('.message-success').should("be.visible")
    .should("contain", "Thank you for registering with Main Website Store.");
    /* ==== End Cypress Studio ==== */
  });

  it('TC-2_Registrasi akun dengan input huruf besar, kecil dan symbol (POSITIVE)', () => {
    /* ==== Generated with Cypress Studio ==== */
    cy.get('.panel > .header > :nth-child(3) > a').click();
    cy.get('#firstname').type('Fitriyah');
    cy.get('#lastname').type('Maulida');
    cy.get('#email_address').type('fitriyah@gmail.com');
    cy.get('#password').type('Hadi!@#$');
    cy.get('#password-confirmation').type('Hadi!@#$');
    cy.get('#form-validate > .actions-toolbar > div.primary > .action > span').click();
    cy.get('.message-success').should("be.visible")
    .should("contain", "Thank you for registering with Main Website Store.");
    /* ==== End Cypress Studio ==== */
  });

  it('TC-3_Registrasi akun dengan input huruf besar, kecil dan angka (POSITIVE)', () => {
    /* ==== Generated with Cypress Studio ==== */
    cy.get('.panel > .header > :nth-child(3) > a').click();
    cy.get('#firstname').type('Vierga');
    cy.get('#lastname').type('Melvine');
    cy.get('#email_address').type('vierga@gmail.com');
    cy.get('#password').type('Vaganza1');
    cy.get('#password-confirmation').type('Vaganza1');
    cy.get('#form-validate > .actions-toolbar > div.primary > .action > span').click();
    cy.get('.message-success').should("be.visible")
    .should("contain", "Thank you for registering with Main Website Store.");
    /* ==== End Cypress Studio ==== */
  });

  it('TC-4_Registrasi akun dengan email yang sama (NEGATIVE)', () => {
    /* ==== Generated with Cypress Studio ==== */
    cy.get('.panel > .header > :nth-child(3) > a').click();
    cy.get('#firstname').type('Sheila');
    cy.get('#lastname').type('Delvi');
    cy.get('#email_address').type('sheila@gmail.com');
    cy.get('#password').type('Hadi1234');
    cy.get('#password-confirmation').type('Hadi1234');
    cy.get('#form-validate > .actions-toolbar > div.primary > .action > span').click();
    cy.get(".confirmation > .control").should("be.visible")
    .should("contain", "There is already an account with this email address. If you are sure that it is your email address, click here to get your password and access your account.");
    /* ==== End Cypress Studio ==== */
  });

  it('TC-5_Registrasi akun dengan invalid email (NEGATIVE)', () => {
    /* ==== Generated with Cypress Studio ==== */
    cy.get('.panel > .header > :nth-child(3) > a').click();
    cy.get('#firstname').type('Naila');
    cy.get('#lastname').type('Andani');
    cy.get('#email_address').type('naila@');
    cy.get('#password').type('Hadi1234');
    cy.get('#password-confirmation').type('Hadi1234');
    cy.get('#form-validate > .actions-toolbar > div.primary > .action > span').click();
    cy.get(".confirmation > .control").should("be.visible")
    .should("contain", "Please enter a valid email address (Ex: johndoe@domain.com).");
    /* ==== End Cypress Studio ==== */
  });

  it('TC-6_Registrasi akun tanpa input nama (NEGATIVE)', () => {
    /* ==== Generated with Cypress Studio ==== */
    cy.get('.panel > .header > :nth-child(3) > a').click();
    cy.get('#firstname').click();
    cy.get('#lastname').type('Shela');
    cy.get('#email_address').type('shela@gmail.com');
    cy.get('#password').type('Mantan1234');
    cy.get('#password-confirmation').type('Mantan1234');
    cy.get('#form-validate > .actions-toolbar > div.primary > .action > span').click();
    cy.get(".confirmation > .control").should("be.visible")
    .should("contain", "This is a required field.");
    /* ==== End Cypress Studio ==== */
  });

  it('TC-7_Registrasi akun tanpa input nama belakang (NEGATIVE)', () => {
    /* ==== Generated with Cypress Studio ==== */
    cy.get('.panel > .header > :nth-child(3) > a').click();
    cy.get('#firstname').type('Dewi');
    cy.get('#lastname').click();
    cy.get('#email_address').type('dewi@gmail.com');
    cy.get('#password').type('Mantan1234');
    cy.get('#password-confirmation').type('Mantan1234');
    cy.get('#form-validate > .actions-toolbar > div.primary > .action > span').click();
    cy.get(".confirmation > .control").should("be.visible")
    .should("contain", "This is a required field.");
    /* ==== End Cypress Studio ==== */
  });

  it('TC-8_Registrasi akun tanpa input password (NEGATIVE)', () => {
    /* ==== Generated with Cypress Studio ==== */
    cy.get('.panel > .header > :nth-child(3) > a').click();
    cy.get('#firstname').type('Mantan');
    cy.get('#lastname').type('Mantan');
    cy.get('#email_address').type('mantan2@gmail.com');
    cy.get('#password').click();
    cy.get('#password-confirmation').type('Mantan1234');
    cy.get('#form-validate > .actions-toolbar > div.primary > .action > span').click();
    cy.get(".confirmation > .control").should("be.visible")
    .should("contain", "This is a required field.");
    /* ==== End Cypress Studio ==== */
  });

  it('TC-9_Registrasi akun dengan input password hanya angka (NEGATIVE)', () => {
    /* ==== Generated with Cypress Studio ==== */
    cy.get('.panel > .header > :nth-child(3) > a').click();
    cy.get('#firstname').type('Mantan');
    cy.get('#lastname').type('Mantan');
    cy.get('#email_address').type('mantan3@gmail.com');
    cy.get('#password').type('12345678');
    cy.get('#password-confirmation').type('12345678');
    cy.get('#form-validate > .actions-toolbar > div.primary > .action > span').click();
    cy.get(".confirmation > .control").should("be.visible")
    .should("contain", "Minimum of different classes of characters in password is 3. Classes of characters: Lower Case, Upper Case, Digits, Special Characters.");
    /* ==== End Cypress Studio ==== */
  });

  it('TC-10_Registrasi akun dengan input password hanya huruf (NEGATIVE)', () => {
    /* ==== Generated with Cypress Studio ==== */
    cy.get('.panel > .header > :nth-child(3) > a').click();
    cy.get('#firstname').type('Mantan');
    cy.get('#lastname').type('Mantan');
    cy.get('#email_address').type('mantan4@gmail.com');
    cy.get('#password').type('hadigantengpokoknya');
    cy.get('#password-confirmation').type('hadigantengpokoknya');
    cy.get('#form-validate > .actions-toolbar > div.primary > .action > span').click();
    cy.get(".confirmation > .control").should("be.visible")
    .should("contain", "Minimum of different classes of characters in password is 3. Classes of characters: Lower Case, Upper Case, Digits, Special Characters.");
    /* ==== End Cypress Studio ==== */
  });

  it('TC-11_Registrasi akun dengan input password hanya symbol (NEGATIVE)', () => {
    /* ==== Generated with Cypress Studio ==== */
    cy.get('.panel > .header > :nth-child(3) > a').click();
    cy.get('#firstname').type('Mantan');
    cy.get('#lastname').type('Mantan');
    cy.get('#email_address').type('mantan5@gmail.com');
    cy.get('#password').type('!@#$%^&*(');
    cy.get('#password-confirmation').type('!@#$%^&*(');
    cy.get('#form-validate > .actions-toolbar > div.primary > .action > span').click();
    cy.get(".confirmation > .control").should("be.visible")
    .should("contain", "Minimum of different classes of characters in password is 3. Classes of characters: Lower Case, Upper Case, Digits, Special Characters.");
    /* ==== End Cypress Studio ==== */
  });

  it('TC-12_Registrasi akun dengan input password semua huruf kecil dan angka (NEGATIVE)', () => {
    /* ==== Generated with Cypress Studio ==== */
    cy.get('.panel > .header > :nth-child(3) > a').click();
    cy.get('#firstname').type('Mantan');
    cy.get('#lastname').type('Mantan');
    cy.get('#email_address').type('mantan5@gmail.com');
    cy.get('#password').type('hadi1234');
    cy.get('#password-confirmation').type('hadi1234');
    cy.get('#form-validate > .actions-toolbar > div.primary > .action > span').click();
    cy.get(".confirmation > .control").should("be.visible")
    .should("contain", "Minimum of different classes of characters in password is 3. Classes of characters: Lower Case, Upper Case, Digits, Special Characters.");
    /* ==== End Cypress Studio ==== */
  });

  it('TC-13_Registrasi akun dengan input password semua huruf besar dan angka (NEGATIVE)', () => {
    /* ==== Generated with Cypress Studio ==== */
    cy.get('.panel > .header > :nth-child(3) > a').click();
    cy.get('#firstname').type('Mantan');
    cy.get('#lastname').type('Mantan');
    cy.get('#email_address').type('mantan5@gmail.com');
    cy.get('#password').type('HADI1234');
    cy.get('#password-confirmation').type('HADI1234');
    cy.get('#form-validate > .actions-toolbar > div.primary > .action > span').click();
    cy.get(".confirmation > .control").should("be.visible")
    .should("contain", "Minimum of different classes of characters in password is 3. Classes of characters: Lower Case, Upper Case, Digits, Special Characters.");
    /* ==== End Cypress Studio ==== */
  });

  it('TC-14_Registrasi akun dengan input password semua huruf kecil dan symbol (NEGATIVE)', () => {
    /* ==== Generated with Cypress Studio ==== */
    cy.get('.panel > .header > :nth-child(3) > a').click();
    cy.get('#firstname').type('Mantan');
    cy.get('#lastname').type('Mantan');
    cy.get('#email_address').type('mantan5@gmail.com');
    cy.get('#password').type('hadi!@#$');
    cy.get('#password-confirmation').type('hadi!@#$');
    cy.get('#form-validate > .actions-toolbar > div.primary > .action > span').click();
    cy.get(".confirmation > .control").should("be.visible")
    .should("contain", "Minimum of different classes of characters in password is 3. Classes of characters: Lower Case, Upper Case, Digits, Special Characters.");
    /* ==== End Cypress Studio ==== */
  });

  it('TC-15_Registrasi akun dengan input password semua huruf besar dan symbol (NEGATIVE)', () => {
    /* ==== Generated with Cypress Studio ==== */
    cy.get('.panel > .header > :nth-child(3) > a').click();
    cy.get('#firstname').type('Mantan');
    cy.get('#lastname').type('Mantan');
    cy.get('#email_address').type('mantan5@gmail.com');
    cy.get('#password').type('HADI!@#$');
    cy.get('#password-confirmation').type('HADI!@#$');
    cy.get('#form-validate > .actions-toolbar > div.primary > .action > span').click();
    cy.get(".confirmation > .control").should("be.visible")
    .should("contain", "Minimum of different classes of characters in password is 3. Classes of characters: Lower Case, Upper Case, Digits, Special Characters.");
    /* ==== End Cypress Studio ==== */
  });

  it('TC-16_Registrasi akun dengan input password semua angka dan symbol (NEGATIVE)', () => {
    /* ==== Generated with Cypress Studio ==== */
    cy.get('.panel > .header > :nth-child(3) > a').click();
    cy.get('#firstname').type('Mantan');
    cy.get('#lastname').type('Mantan');
    cy.get('#email_address').type('mantan5@gmail.com');
    cy.get('#password').type('1234!@#$');
    cy.get('#password-confirmation').type('1234!@#$');
    cy.get('#form-validate > .actions-toolbar > div.primary > .action > span').click();
    cy.get(".confirmation > .control").should("be.visible")
    .should("contain", "Minimum of different classes of characters in password is 3. Classes of characters: Lower Case, Upper Case, Digits, Special Characters.");
    /* ==== End Cypress Studio ==== */
  });
})