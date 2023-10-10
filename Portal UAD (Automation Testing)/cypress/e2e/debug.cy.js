describe('Debug or Stop', () => {

    it('Debug', function () {
        cy.visit('https://automationintesting.online/#/')
        cy.get('.col-2 > .btn').should('have.text', 'Let me hack!')
        cy.get('#name').clear()
        cy.get('#name').type('My Name')
        cy.get('#email').clear()
        cy.get('#email').type('My Email')
        cy.get('#phone').clear()
        cy.get('#phone').type('My Phone')
        cy.get('#subject').clear()
        cy.get('#subject').type('No Subject')
        cy.get('#subject').click()
        cy.get('#description').click()
        cy.get('#description').type('Debugging by Muhamad Fajri Majid')
        cy.get('#submitContact').click().debug ()
        cy.pause()
        cy.get('.contact > :nth-child(3) > :nth-child(3)').should('be.Visible')

    })
})