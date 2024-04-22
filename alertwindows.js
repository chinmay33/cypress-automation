describe("Alert Windows",function()
{
    it("Alert Windows",function(){
        // visit to open url
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/") 
        // get to find element and click 
        cy.get('#alertbtn').click()
        cy.get('[value="Confirm"]').click()
        // window:alert
        cy.on('window:alert',(str)=>
        {
            expect(str).to.equal('Hello , share this practice page and share your knowledge')
        })
        cy.on('window:confirm',(str)=>
        {
            expect(str).to.equal('Hello , Are you sure you want to confirm?')
        })
    })

}
)