import 'cypress-file-upload'
describe('fileupload', function () {
    // test case
    it('fileupload', function (){
       //file to be uploaded path in project folder
       const p = '319946.webp'
       // launch URL
       cy.visit("https://the-internet.herokuapp.com/upload")
       //upload file with attachFile
       cy.get('#file-upload').attachFile(p)
       //click on upload
       cy.get('#file-submit').click()
       //verify uploaded file
       cy.get('#uploaded-files').contains('319946')
    });
 });