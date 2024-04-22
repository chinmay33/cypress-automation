describe('Tutorialspoint Test', function () {
    // test case
    it('Search from Google should work', function (){
       // launch the application
       cy.visit("https://www.google.com/");
       //custom parent command
       cy.userInput('Java')
    });
 });