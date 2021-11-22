///<reference types = "cypress" />

describe('Cypress basics', () => {
    it('Should visit a page and assert title', () => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')

        //cy.pause()

        cy.title().should('be.equal', 'Campo de Treinamento')
        cy.title().should('contain', 'Campo')

        //mesmo método acima mas com maior legibilidade
        cy.title()
            .should('be.equal', 'Campo de Treinamento')
            .and('contain', 'Campo')

            //TO DO imprimir title no console (log)
            //TO DO escrever o title em um campo de texto
    })//end of visit and assert

    it('Should find and interact with an element', () => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')

        cy.get('#buttonSimple')
            .should('have.value', 'Clique Me!')
            .click()
            .should('have.value', 'Obrigado!')
    })//end of find and interact
})//end of Cypress basics