describe('FT', () => {
    it('Berhasil Daftar Akun Baru', () => {
    
        const randomEmail = `test${Math.floor(Math.random() * 100000)}@example.com`;    
        cy.visit('https://magento.softwaretestingboard.com');
        cy.get('.panel > .header > :nth-child(3) > a').should("be.visible").should("contain","Create an Account").click(); // assertion 1
        cy.get('#firstname').type('Test03');
        cy.get('#lastname').type('Coba');
        cy.get('#email_address').type(randomEmail);
        cy.get('#password').type('coba123##');
        cy.get('#password-confirmation').type('coba123##');
        cy.get('#form-validate > .actions-toolbar > div.primary > .action > span').click();
        cy.get('.message-success').should('be.visible').should('contain','Thank you for registering with Main Website Store.'); // assertion 2
    })
    it('Tidak Bisa Daftar dengan Akun Yang Sama', () => { 
        cy.visit('https://magento.softwaretestingboard.com');
        cy.get('.panel > .header > :nth-child(3) > a').should("be.visible").should("contain","Create an Account").click(); // assertion 1
        cy.get('#firstname').type('Test03');
        cy.get('#lastname').type('Coba');
        cy.get('#email_address').type('cutwalipoltek@gmail.com');
        cy.get('#password').type('coba123##');
        cy.get('#password-confirmation').type('coba123##');
        cy.get('#form-validate > .actions-toolbar > div.primary > .action > span').click();
        cy.get('.message-error > div').should('be.visible').should('contain','There is already an account with this email address. If you are sure that it is your email address, click here to get your password and access your account.'); // assertion 2
    })
    it('Validasi Mandatory Field pada form register', () => { 
        cy.visit('https://magento.softwaretestingboard.com');
        cy.get('.panel > .header > :nth-child(3) > a').should("be.visible").should("contain","Create an Account").click(); // assertion 1
        cy.get('#form-validate > .actions-toolbar > div.primary > .action > span').click();
        cy.get('#firstname-error').should('be.visible').should('contain','This is a required field.'); // assertion 2
        cy.get('#lastname-error').should('be.visible').should('contain','This is a required field.'); // assertion 3
    })
    it('Validasi password harus sama antara dengan confirm passowrd', () => { 
        const randomEmail = `test${Math.floor(Math.random() * 100000)}@example.com`;    
        cy.visit('https://magento.softwaretestingboard.com');
        cy.get('.panel > .header > :nth-child(3) > a').should("be.visible").should("contain","Create an Account").click(); // assertion 1
        cy.get('#firstname').type('Test03');
        cy.get('#lastname').type('Coba');
        cy.get('#email_address').type(randomEmail);
        cy.get('#password').type('coba123##');
        cy.get('#password-confirmation').type('coba123#@');
        cy.get('#form-validate > .actions-toolbar > div.primary > .action > span').click();
        cy.get('#password-confirmation-error').should('be.visible').should('contain','Please enter the same value again'); // assertion 2
        
    })

    it('Validasi Format Email', () => { 
        const randomEmail = `test${Math.floor(Math.random() * 100000)}`;    
        cy.visit('https://magento.softwaretestingboard.com');
        cy.get('.panel > .header > :nth-child(3) > a').should("be.visible").should("contain","Create an Account").click(); // assertion 1
        cy.get('#firstname').type('Test03');
        cy.get('#lastname').type('Coba');
        cy.get('#email_address').type(randomEmail);
        cy.get('#password').type('coba123##');
        cy.get('#password-confirmation').type('coba123##');
        cy.get('#form-validate > .actions-toolbar > div.primary > .action > span').click();
        cy.get('#email_address-error').should('be.visible').should('contain','Please enter a valid email address'); // assertion 2
    })

})