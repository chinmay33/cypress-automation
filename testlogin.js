import loginPage from '../../pageObjects/loginTest'

describe('Login Page', () => {

 beforeEach(function() {
   // executes prior each test within it block
   cy.visit('https://demo.guru99.com/test/newtours/login.php');
})

 it('Verify Login successful', () => {
   const loginObj = new loginPage();
   loginObj.username.type('selenium@qa')
   loginObj.password.type('qa@12345')
   loginObj.submit.click();
   loginObj.successText.should('have.text','Login Successfully');
 })
})