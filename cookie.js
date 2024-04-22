describe('Tutorialspoint Test', function () {
    // test case
    it('Cookie', function (){
       // launch the application
       cy.visit("https://accounts.google.com");
       // enable cookie logging
       Cypress.Cookies.debug(true)
       //set cookie
       cy.setCookie('cookie1', 'value1')
       //get cookie by name and verify value
       cy.getCookie('cookie1').should('have.property', 'value', 'value1')
       //clear cookie by name
       cy.clearCookie('cookie')
       //get all cookies
       cy.getCookies()
       //clear all cookies
       cy.clearCookies()
       //verify no cookies
       cy.getCookies().should('be.empty')
    });
 });