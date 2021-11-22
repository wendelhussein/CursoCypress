///<reference types = "cypress" />

//const { stub } = require("cypress/types/sinon")

describe('Work with iFrame', () => {
    // before(() => {
    //     cy.visit('https://wcaquino.me/cypress/componentes.html')
    // })//end of before

    // beforeEach(() => {
    //     cy.reload()
    // })//end of beforeEach

    it('Deve preencher campo de texto', () => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
        cy.get('#frame1').then(iframe => {
            const body = iframe.contents().find('body')
            cy.wrap(body).find('#tfield')
                .type('Funciona?')
                .should('have.value', 'Funciona?')
        })//end of then
    })//end of Deve preencher campo de texto

    it('Deve testar frame diretamente', () => {
        cy.visit('https://wcaquino.me/cypress/frame.html')
        cy.get('#tfield').type('Digita frame')
            .should('have.value', 'Digita frame')
        cy.get('#otherButton').click()
        cy.on('window:alert', msg => {
            expect(msg).to.be.equal('Click OK!')
        })//end of window:alert
    })//end of Deve preencher campo de texto
})//end of Work with iFrame