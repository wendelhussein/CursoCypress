///<reference types = "cypress" />

describe('Alerts', () => {
    before(() => {
        cy.visit('http://demo.automationtesting.in/Alerts.html')
    })//end of before

    beforeEach(() => {
        cy.reload()
    })//end of beforeEach

    it('Alert with OK', () => {
        cy.get('#OKTab > .btn').click()
        cy.on('window:alert', msg => {
            expect(msg).to.be.equal('I am an alert box!')
        })//end of cy.on alert
    })//end of Alert with OK

    it('Alert with OK & Cancel OK', () => {
        cy.get(':nth-child(2) > .analystic').click()
        cy.get('#CancelTab > .btn').click()
        
        cy.on('window:confim', msg => {
            expect(msg).to.be.equal('Confirm Simples')
        })//end of cy.on confirm
        
        cy.on('window:alert', msg => {
            expect(msg).to.be.equal('Confirmado')
        })//end of cy.on alert
    })//end of Alert with OK & Cancel

    it.only('Alert with OK & Cancel Cancel', () => {
        cy.get(':nth-child(2) > .analystic').click()
        cy.get('#CancelTab > .btn').click()

        cy.on('window:confim', msg => {
            expect(msg).to.be.equal('Press a Button !')
            return false
        })//end of cy.on confirm
        
        cy.get('#demo').should('have.text', 'You Pressed Cancel')

    })//end of Alert with OK & Cancel

    it('Alert with Textbox', () => {
        
    })//end of Alert with Textbox
})//end of Alerts