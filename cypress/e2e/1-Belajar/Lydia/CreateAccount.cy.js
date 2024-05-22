// TC-01 Create Account menggunakan username dan password valid - POSITIVE 
  it('TC - 01 Create Account Menggunakan Username dan Password Valid POSITIVE', function() {
    cy.visit('https://magento.softwaretestingboard.com');
    cy.get('.panel > .header > :nth-child(3) > a').should("be.visible").should("contain", "Create an Account").click();
    cy.get('#firstname').type('Coba2');
    cy.get('#lastname').type('apaaja');      
    cy.get('#email_address').type('cobaa999@gmail.com');
    cy.get('#password').type('coba123456@');
    cy.get('#password-confirmation').type('coba123456@');
    cy.get('#form-validate > .actions-toolbar > div.primary > .action > span').click().should("be.visible").should("contain", "Create an Account"); //cek tulisan create account
    cy.get('.message-success').should("be.visible").should("contain", "Thank you for registering with Main Website Store"); //Exspected result 
    cy.get('#maincontent').should("be.visible").should("contain", "My Account"); // beralih ke halaman My Account 
  });

const { func } = require("assert-plus");


  // Hook Pre-Condition Masuk Kehalaman Create Account 
  describe("User Masuk Ke Halaman Create Account", () => {
    beforeEach(() => {
      cy.visit('https://magento.softwaretestingboard.com');
      cy.clearAllCookies();
    ;})

    // // afterEach(() => {
    //   cy.clearCookies();
    // });
  

  // TC - 02 User Create Account tanpa memasukan password dan muncul error notif - NEGATIVE 
  it('TC - 02 Create Account tanpa memasukan password', function() {
    cy.get(".panel > .header > :nth-child(3) > a").should("be.visible").should("contain", "Create an Account").click();
    cy.get('#firstname').type('coba2');
    cy.get('#lastname').type('apaja');
    cy.get('#email_address').type('coba111412113@gmail.com');
    cy.get('#form-validate > .actions-toolbar > div.primary > .action > span').click();
    cy.get('#password-error').should("be.visible").should("contain", "This is a required field"); //Menampilkan pesan password 
  });

  // TC - 03 User Create Account tanpa memasukan email muncul Notif error  - NEGATIVE
  it('TC-03 TC - 03 User Create Account tanpa memasukan email muncul Notif error', function(){
      cy.get('.panel > .header > :nth-child(3) > a').click();
      cy.get('#password').type('coba12345678@');
      cy.get('#password-confirmation').type('coba12345678@');
      cy.get('#form-validate > .actions-toolbar > div.primary > .action > span').click();
      cy.get('#email_address-error').should("be.visible").should("contain", "This is a required field");
  });

  // TC - 04 User Create Account menggunakan Invalid Email - NEGATIVE 
  it('TC-04 User Create Account Menggunakan Invalid Email', function(){
    cy.get('.panel > .header > :nth-child(3) > a').click();
    cy.get('#email_address').type('cobacoba@ppppp');
    cy.get('#password').type('abcd1234@');
    cy.get('#password-confirmation').type('abcd1234@');
    cy.get('#form-validate > .actions-toolbar > div.primary > .action > span').click();
    cy.wait(5000);
    cy.get('#email_address-error').should("be.visible").should("contain", "Please enter a valid email address (Ex: johndoe@domain.com).");
  });

  // TC-05 Username Create Account menggunakan password tidak sesuai dengan required only huruf - NEGATIVE
  it('TC-05 User Create Account menggnakan password huruf', function(){
    cy.get('.panel > .header > :nth-child(3) > a').click();
    cy.get('#email_address').type('coba1221134612271@gamil.com');
    cy.get('#password').type('lydia');
    cy.get('#password-confirmation').type('lydia');
    cy.get('#form-validate > .actions-toolbar > div.primary > .action > span').click();
    cy.get('#password-error').should("be.visible").should("contain", "Minimum length of this field must be equal or greater than 8 symbols. Leading and trailing spaces will be ignored.");
  });

  // TC-06 Username create account memasukan password dengan angka menampilkan pesan error - NEGATIVE
  it('TC-06 User create account memasukan password dengan angka', function(){
    cy.get('.panel > .header > :nth-child(3) > a').click();
    cy.get('#firstname').type('cobacoba');
    cy.get('#lastname').type('apaaja');
    cy.get('#email_address').type('coba1111112@gmail.com');
    cy.get('#password').type('1234567890');
    cy.get('#password-confirmation').type('1234567890');
    cy.get('#form-validate > .actions-toolbar > div.primary > .action > span').click();
    cy.get('#password-error').should("be.visible").should("contain", "Minimum of different classes of characters in password is 3. Classes of characters: Lower Case, Upper Case, Digits, Special Characters.");
  });


  //  TC-07 User Create account memasukan password dengan symbol - NEGATIVE
  it('TC-07 User Ceate account memasukan password dengan symbol', function(){
    cy.get('.panel > .header > :nth-child(3) > a').click();
    cy.get('#firstname').type('cobacoba');
    cy.get('#lastname').type('apaaja');
    cy.get('#email_address').type('coba2122111@gmail.com');
    cy.get('#password').type('!!!!!!!');
    cy.get('#password-confirmation').type('!!!!!!!');
    cy.get('#form-validate > .actions-toolbar > div.primary > .action > span').click();
    cy.get('#password-error').should("be.visible").should("contain", "Minimum length of this field must be equal or greater than 8 symbols. Leading and trailing spaces will be ignored.");
  });

  
  // TC-08 User Tidak Diperbolehkan mendaftarkan akun dengan email yang terdaftar - NEGATIVE
  it('TC-08 User Tidak Bisa mendaftarkan account dengan email yang sudah terdaftar', function(){
    cy.get('.panel.wrapper > .panel').click();
    cy.get('.panel > .header > :nth-child(3) > a').click();
    cy.get('#form-validate > .account > :nth-child(3)').click();
    cy.get('#firstname').type('cobacoba');
    cy.get('#lastname').type('apaaja');
    cy.get('#email_address').type('coba2122111@gmail.com');
    cy.get('#password').type('coba123456@');
    cy.get('#password-confirmation').type('coba123456@');
    cy.get('#form-validate > .actions-toolbar > div.primary > .action > span').click();
    cy.get('.message-error').should("be.visible").should("contain", "There is already an account with this email address. If you are sure that it is your email address, click here to get your password and access your account.");
  });

  // TC-09 User Tidak tidak bisa mendaftarkan email yang tidak ada domainnya - NEGATIVE
  it('TC-09 User tidak bisa mendaftarkan email yang tidak ada domainnya', function(){
    cy.get('.panel > .header > :nth-child(3) > a').click();
    cy.get('#firstname').type('cobacoba');
    cy.get('#lastname').type('apaaja');
    cy.get('#email_address').clear('coba21221@');
    cy.get('#email_address').type('coba21221@');
    cy.get('#password').type('coba123456@');
    cy.get('#password-confirmation').type('coba123456@');
    cy.get('#form-validate > .actions-toolbar > div.primary > .action > span').click();
    cy.get('#email_address-error').should("be.visible").should("contain", "Please enter a valid email address (Ex: johndoe@domain.com).");
  });

  // TC-10 User tidak dapat login jika semua kolom kosong 
  it("TC-10 User tidak dapat login jika semua kolom kosong", function(){
    cy.get('.panel > .header > :nth-child(3) > a').click();
    cy.get('#form-validate > .actions-toolbar > div.primary > .action > span').click();
    cy.wait(5000);
    cy.get('#firstname-error').should("be.visible").should("contain", "This is a required field.");
  });

  // TC-11 User masukin password kategori lemah 
  it("TC-11 User masukin password kategori lemah", function(){
    cy.get('.panel > .header > :nth-child(3) > a').click();
    cy.get('#firstname').type('cobacoba');
    cy.get('#lastname').type('belajar');
    cy.get('#email_address').type('cobabelajar@gmail.com');
    cy.get('#password').type('abc123');
    cy.get('#password-confirmation').type('abc123');
    cy.get('#form-validate > .actions-toolbar > div.primary > .action > span').click();
    cy.get('#password-strength-meter').should("be.visible").should("contain", "Password Strength: Weak");
    cy.get('#password-error').should("be.visible").should("contain", "Minimum length of this field must be equal or greater than 8 symbols. Leading and trailing spaces will be ignored.");
  });

  // TC-12 User tidak memasukan email muncul notif error 
  it("TC-12 User tidak memasukan email muncul notif error ", function(){
      cy.get('.panel > .header > :nth-child(3) > a').click();
      cy.get('#firstname').type('coba');
      cy.get('#lastname').type('belajar');
      cy.get('#password').type('cobabelajar123456@');
      cy.get('#password-confirmation').type('cobabelajar123456@');
      cy.get('#form-validate > .actions-toolbar > div.primary > .action > span').click();
      cy.get('#email_address-error').should("be.visible").should("contain", "This is a required field.");
  });

  // TC-13 User tidak memasukan first name 
  it("TC-13 User tidak memasukan first name", function(){
    cy.get('.panel > .header > :nth-child(3) > a').click();
    cy.get('#lastname').type('belajar');
    cy.get('#email_address').type('cobabelajar1@gmail.com');
    cy.get('#password').type('coba123456@');
    cy.get('#password-confirmation').type('coba123456@');
    cy.get('#form-validate > .actions-toolbar > div.primary > .action > span').click();
    cy.get('#firstname-error').should("be.visible").should("contain", "This is a required field.");
  });

    // TC-14 User tidak memasukan last name 
    it("TC-14 User tidak memasukan first name", function(){
      cy.get('.panel > .header > :nth-child(3) > a').click();
      cy.get('#firstname').type('coba');
      cy.get('#email_address').type('cobabelajar1@gmail.com');
      cy.get('#password').type('coba123456@');
      cy.get('#password-confirmation').type('coba123456@');
      cy.get('#form-validate > .actions-toolbar > div.primary > .action > span').click();
      cy.get('#firstname-error').should("be.visible").should("contain", "This is a required field.");
    });




});
