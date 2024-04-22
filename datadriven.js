describe('Data Driven', function () {
    //part of before hook
    before(function(){
       //access fixture data
       cy.fixture('example2').then(function(signInData){
          this.signInData = signInData
       })
    })
    // test case
    it('Test Case1', function (){
       // launch URL
       cy.visit("https://www.linkedin.com/")
       //data driven from fixture
       cy.get('#session_key ')
       .type(this.signInData.email)
       // The text to be typed into the DOM element.
       cy.get('#session_password').type(this.signInData.password)
    });
 });