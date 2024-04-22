describe('Tutorialspoint Test', function () {
    // test case
    it("Prompt Alert", function () {
       //URL launch
       cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
       //handling prompt alert
       cy.window().then(function(p){
          //stubbing prompt window
          cy.stub(p, "prompt").returns("Tutorialspoint");
          // click on Click for JS Prompt button
          cy.get(':nth-child(3) > button').click()
          // verify application message on clicking on OK
          cy.get('#result').contains('You entered: Tutorialspoint')
       });
    });
 });   