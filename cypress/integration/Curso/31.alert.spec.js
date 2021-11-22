///<reference types = "cypress" />

//const { stub } = require("cypress/types/sinon")

describe('Work with alerts', () => {
    before(() => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
    })//end of before

    beforeEach(() => {
        cy.reload()
    })//end of beforeEach

    it('Alert', () => {
        cy.get('#alert').click()
        cy.on('window:alert', msg => {
            console.log(msg)
            expect(msg).to.be.equal('Alert Simples')
        })//end of cy.on alert
    })//end of Alert

    it('Alert com mock', () => {
        const stub = cy.stub().as('Alerta')
        cy.on('window:alert', stub)
        cy.get('#alert').click()
            .then(() => {
                expect(stub.getCall(0))
                    .to.be.calledWith('Alert Simples')
            })//end of then
    })//end of Alert com mock

    it('Confirm', () => {
        cy.get('#confirm').click()
        cy.on('window:confim', msg => {
            expect(msg).to.be.equal('Confirm Simples')
        })//end of cy.on confirm
        
        cy.on('window:alert', msg => {
            expect(msg).to.be.equal('Confirmado')
        })//end of cy.on alert
    })//end of Confirm

    it.only('Deny', () => {
        cy.get('#confirm').click()
        cy.on('window:confim', msg => {
            expect(msg).to.be.equal('Confirm Simples')
            return false
        })//end of cy.on confirm
        
        cy.on('window:alert', msg => {
            expect(msg).to.be.equal('Negado')
        })//end of cy.on alert
    })//end of Confirm

    it('Prompt', () => {
        cy.get('#prompt').click()
        cy.window().then(win => {
            cy.stub(win, 'prompt').returns('42')
        })//end of cy.window

        cy.on('window:confirm', msg => {
            expect(msg).to.be.equal('Era 42?')
        })//end of cy.on --confirm
        
        cy.on('window:alert', msg => {
            expect(msg).to.be.equal(':D')
        })//end of cy.on alert
    })//end of Prompt
})//end of Work with alerts