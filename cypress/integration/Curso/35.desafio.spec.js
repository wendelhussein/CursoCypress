///<reference types = "cypress" />

describe('Desafio', () => {
    before(() => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
    })//end of before

    beforeEach(() => {
        cy.reload()
    })//end of beforeEach

    it('Validando Mensagens', () => {
        const stub = cy.stub().as('Alerta')
        cy.on('window:alert', stub)
        cy.get('#formCadastrar').click()
            .then(() =>
                expect(stub.getCall(0))
                    .to.be.calledWith('Nome eh obrigatorio'))
        cy.get('#formNome').type('Nome')
        cy.get('#formCadastrar').click()
            .then(() =>
                expect(stub.getCall(1))
                    .to.be.calledWith('Sobrenome eh obrigatorio'))
        cy.get('[data-cy=dataSobrenome]').type('Sobrenome')
        cy.get('#formCadastrar').click()
            .then(() =>
                expect(stub.getCall(2))
                    .to.be.calledWith('Sexo eh obrigatorio'))
        cy.get('#formSexoMasc').click()
        cy.get('#formCadastrar').click()
        cy.get('#resultado > :nth-child(1)').should('have.text', 'Cadastrado!')
        cy.get('#descNome > span').should('have.text', 'Nome')
        cy.get('#descSobrenome > span').should('have.text', 'Sobrenome')
        cy.get('#descSexo > span').should('have.text', 'Masculino')
    })//end of Validando Mensagens
})//end of Desafio