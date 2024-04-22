describe("PlaceOrder",function()
{
    it("PlaceOrder",function(){
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get('.search-keyword').type('ca')
        cy.wait(2000)
        //selenium get hit url in browser , cypress get acts like findelement of selenium 
        cy.get('.product').should('have.length',5)
        cy.get('.product:visible').should('have.length',4)
        //Parent Child chaining 
        cy.get('.products').as('productLocator')
        cy.get('@productLocator').find('.product').each(($el,index,$list) => {
          const textVeg=$el.find('h4.product-name').text()
          if(textVeg.includes('Cashews')){
           cy.wrap($el).find('button').click()
          }
        })
        cy.get('.cart-icon > img').click()
        // Get the DOM element containing the text. 
        cy.contains('PROCEED TO CHECKOUT').click()
        cy.contains('Place Order').click()    
    })
}
)