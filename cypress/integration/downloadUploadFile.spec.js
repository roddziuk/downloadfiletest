describe('File upload and download tests', () => {

    beforeEach(() => {
        cy.visit('https://filebin.net/')
    })

    it('Upload file and download it in Zip format', () => {
        cy.get('#fileField').attachFile('TestFile1.jpg')
        cy.contains('This bin contains 1 file',).should('be.visible')
        cy.get('.fa-cloud-download').click()
        cy.contains('Zip').invoke('attr', 'href').then(downloadLink => {
            cy.log(downloadLink)
            cy.downloadFile(downloadLink, 'mydownloads/zipFiles', 'TestFile1_downloadedFromCypress.zip')
            cy.readFile('mydownloads/zipFiles/TestFile1_downloadedFromCypress.zip')
        })
    })

    it('Upload file and download it in Tar format', () => {
        cy.get('#fileField').attachFile('TestFile2.jpg')
        cy.contains('This bin contains 1 file',).should('be.visible')
        cy.get('.fa-cloud-download').click()
        cy.contains('Tar').invoke('attr', 'href').then(downloadLink => {
            cy.log(downloadLink)
            cy.downloadFile(downloadLink, 'mydownloads/tarFiles', 'TestFile2_downloadedFromCypress.tar')
            cy.readFile('mydownloads/tarFiles/TestFile2_downloadedFromCypress.tar')
        })
    })

})