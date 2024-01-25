describe('1 тест', function () {
    it('Проверка, что при поиске теслы в выдаче есть тесла', function () {
         cy.visit('https://login.qa.studio/');
         cy.get('#mail').type('german@dolnikov.ru');
         cy.get('#pass').type('iLoveqastudio1');
         cy.get('#loginButton').click();
         cy.get('#messageHeader').contains('Авторизация прошла успешно');
         cy.get('#exitMessageButton > .exitIcon').should('be.visible');
     })
 
    it('Проверка восстановления пароля', function () {
         cy.visit('https://login.qa.studio/');
         cy.get('#forgotEmailButton').click();
         cy.get('#mailForgot').type('nesti-1998@mail.ru');
         cy.get('#restoreEmailButton').click();
         cy.get('#message').contains('Успешно отправили пароль на e-mail');
         cy.get('#exitMessageButton > .exitIcon').should('be.visible');
     })

     it('Проверка ввода неверного пароля', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio45645');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').contains('Такого логина или пароля нет');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    })

    it('Проверка ввода неверного логина', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('nesti-1998@mail.ru');
        cy.get('#pass').type('iLoveqastudio45645');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').contains('Такого логина или пароля нет');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    })
   
    it('Проверка ввода логина неверного формата', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('germanDolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации');
     })

    it('Проверка ввода логина строчными и заглавными буквами', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('GerMan@Dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').contains('Авторизация прошла успешно');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    })
 })
