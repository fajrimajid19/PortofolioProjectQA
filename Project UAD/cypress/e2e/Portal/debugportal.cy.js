import 'cypress-file-upload';
    
    it('Testing Portal UAD', function() {
        cy.visit('https://portal.uad.ac.id/login')

        //Loginform
        cy.get(':nth-child(1) > .input-icon > .form-control').type('1800018300')
        cy.get(':nth-child(2) > .input-icon > .form-control').type('1800018300')
        cy.get('.form-actions > .btn').click()
        cy.contains('Kemahasiswaan').click()
        cy.contains('Prestasi Mahasiswa').click()
        cy.get(':nth-child(1) > [nowrap="nowrap"] > .btn-warning').click()
        
        //UploadFile form
        const filePath= 'fajar.pdf'
        cy.get('#file_prestasi', { timeout: 10000 })
        .attachFile(filePath, {subjectType: 'drag-n-drop'}).debug()
        
        //Submit
        cy.get('.green', { timeout: 10000 }).click()

    })