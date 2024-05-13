// describe("Login Test Suite", () => {
//   beforeEach(() => {
//     cy.visit("https://magento.softwaretestingboard.com/");
//     cy.contains("Sign In").click();
//   });
// test
//   it("Verifikasi tidak dapat login dengan user yang tidak terdaftar", () => {
//     cy.contains("Sign In").click();
//     cy.get("#email").type("teamRabutest@test.com");
//     cy.get("#pass").type("test435@1234");
//     cy.get('button[name="send"]').click();

//     // Verifikasi error message
//     cy.get(".message-error > div").should("be.visible");
//     cy.wait(500);
//   });

//   it("Verifikasi tidak dapat login dengan email yang salah ", () => {
//     cy.contains("Sign In").click();
//     cy.get("#email").type("teamRabuuu@test.com");
//     cy.get("#pass").type("test@1234");
//     cy.get('button[name="send"]').click();

//     // Verifikasi error message
//     cy.get(".message-error > div").should("be.visible");
//     cy.wait(500);
//   });

//   it("Verifikasi tidak dapat login dengan password yang salah", () => {
//     cy.contains("Sign In").click();
//     cy.get("#email").type("teamRabu@test.com");
//     cy.get("#pass").type("testing@1234");
//     cy.get('button[name="send"]').click();

//     // Verifikasi error message
//     cy.get(".message-error > div").should("be.visible");
//     cy.wait(500);
//   });
//   // Add more test cases to verify other scenarios related to login.

//   /* ==== Test Created with Cypress Studio ==== */
//   it('Verifikasi berhasil login', function() {
//     /* ==== Generated with Cypress Studio ==== */
//     cy.get('#email').type('teamRabu@test.com');
//     cy.get('#pass').type('test@1234');
//     cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2 > span').click();
//     /* ==== End Cypress Studio ==== */
//   });
// });
import userData from "../../../../fixtures/data/userData.json";  
import Navigation from "../../../../support/PageObject/Navigation";  
import account from "../../../../fixtures/data/account.json";  
import msg from "../../../../fixtures/data/messageData.json";  
  
// const account = UserLocator.getCustomer();  
const submit = Navigation.loginSubmit();  
  
describe("User Login Test Suite", () => { 
  beforeEach(() => {  
    Navigation.visitAccount(); 
    cy.clearAllCookies; 
    cy.contains("Sign In").click(); 
    cy.clearAllCookies; 
    }); 
 
  // it("TC-1_Verifikasi login akun untuk masuk_(POSITIVE)", () => {  
  //   cy.get(account.loginEmailInputSelector).type(userData.validUser.email);  
  //   cy.get(account.loginPasswordInputSelector).type(userData.validUser.password);  
  //   cy.get(submit).click(); 
  //   cy.get("#maincontent").should("be.visible").should("contain", "My Account"); 
  // }); 
  it("TC-2_Verifikasi login akun untuk masuk_(NEGATIVE)", () => {  
    cy.get(account.loginEmailInputSelector).type(userData.invalidUser2.email);  
    cy.get(account.loginPasswordInputSelector).type(userData.invalidUser2.password);  
    cy.get(submit).click(); 
    cy.get(account.LoginError) 
          .should("be.visible") 
          .should(msg.IncorrectLogin); 
  }); 
  // it("TC-3_Verifikasi login akun untuk masuk_(NEGATIVE)", () => {  
  //   cy.get(account.loginEmailInputSelector).type(userData.invalidUser1.email);  
  //   cy.get(account.loginPasswordInputSelector).type(userData.invalidUser1.password);  
  //   cy.get(submit).click(); 
  //   cy.get(account.emailError) 
  //         .should("be.visible") 
  //         .should("contain", msg.emailError); 
  // }); 
});