import loginPage from '../../pageObjects/loginPage'

describe('Login Test', () => {

 beforeEach(function() {
   // executes prior each test within it block
   cy.visit('https://demo.guru99.com/test/newtours/login.php');
})

 it('Verify Login successful', () => {
   const loginObj = new loginPage();
   loginObj.enterUsername('selenium@qa')
   loginObj.enterPassword('qa@12345')
   loginObj.clickSubmit();
   loginObj.elements.successTxt().should('have.text','Login Successfully');
 })

 it('Verify Login unsuccessful for invalid username/password', () => {
   const loginObj = new loginPage();
   loginObj.enterUsername('selenium')
   loginObj.enterPassword('qa@123')
   loginObj.clickSubmit();
   loginObj.elements.errorTxt().should('contain','Enter your userName and password correct');
 })
})