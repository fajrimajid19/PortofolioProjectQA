it('Testing Portal UAD', function() {
    cy.visit('https://portal.uad.ac.id/login')
    cy.get(':nth-child(1) > .input-icon > .form-control').type('1800018300')
    cy.get(':nth-child(2) > .input-icon > .form-control').type(' ')
    cy.get('.form-actions > .btn').click()

})