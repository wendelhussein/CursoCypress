///<reference types = "cypress" />

describe('Work with basic elements', () => {
    before(() => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
    })//end of before
    beforeEach(() => {
        cy.reload()
    })//end of beforeEach

    it('Text', () => {
        cy.get('body').should('contain', 'Cuidado')
        cy.get('span').should('contain', 'Cuidado')
        cy.get('.facilAchar').should('contain', 'Cuidado')
        cy.get('.facilAchar').should('have.text', 'Cuidado onde clica, muitas armadilhas...')
    })//end of Text
    it('Links', () => {
        cy.get('[href="#"]').click()
        cy.get('#resultado').should('have.text', 'Voltou!')
        
        cy.reload()
        cy.get('#resultado').should('not.have.text', 'Voltou!')
        cy.contains('Voltar').click()
        cy.get('#resultado').should('have.text', 'Voltou!')
    })//end of Links
    it('TextFields', () => {
        cy.get('#formNome').type('Cypress Test')
        cy.get('#formNome').should('have.value', 'Cypress Test')

        cy.get('#elementosForm\\:sugestoes')//tem q colocar '\\',  sintaxe
            .type('TextArea')
            .should('have.value', 'TextArea')

        cy.get('#tabelaUsuarios > :nth-child(2) > :nth-child(1) > :nth-child(6) > input')
        .type('Campo1Tabela')

        cy.get('[data-cy=dataSobrenome]')
            .type('Teste12345{backspace}{backspace}')
            .should('have.value', 'Teste123')

        cy.get('#elementosForm\\:sugestoes')
            .clear()
            .type('Erro{selectall}acerto', {delay:100})
            .should('have.value', 'acerto')
    })//end of TextFields

    it('RadioButton', () => {
        cy.get('#formSexoFem')
            .should('not.be.checked')
        cy.get('#formSexoMasc')
            .should('not.be.checked')
        cy.get('#formSexoFem')
            .click()
            .should('be.checked')
        cy.get('#formSexoMasc')
            .should('not.be.checked')

        cy.get("[name='formSexo']").should('have.length', 2)
    })//end of RadioButton

    it('Checkbox', () => {
        cy.get('#formComidaPizza')
            .click()
            .should('be.checked')

        cy.get('[name=formComidaFavorita]').click({multiple: true})//para clicar em todos os checkbox
        cy.get('#formComidaCarne')
            .should('be.checked')
        cy.get('#formComidaFrango')
            .should('be.checked')
        cy.get('#formComidaPizza')
            .should('not.be.checked')//não marcado
        cy.get('#formComidaVegetariana')
            .should('be.checked')
    })//end of Checkbox

    it('Combobox', () => {
        cy.get('[data-test=dataEscolaridade]')
            .select('2o grau completo')
            .should('have.value', '2graucomp')

        cy.get('[data-test=dataEscolaridade]')
            .select('1graucomp')
            .should('have.value', '1graucomp')
        //TO DO validar as opções existentes no combo
    })//end of Combobox

    it('Combo multiplo', () => {
        cy.get('[data-testid=dataEsportes]')
            .select(['natacao', 'Corrida', 'nada'])
        //TO DO validar opções selecionadas do combo multiplo

    })//end of Combo multiplo

    it('Valida Combo', () => {
        cy.get('[data-test=dataEscolaridade] option')
            .should('have.length', 8)
        cy.get('[data-test=dataEscolaridade] option').then($arr => {
            const values = []
            $arr.each(function() {
                values.push(this.innerHTML)
            })//end of arr.each
            expect(values).to.include.members(["Superior", "Mestrado"])
        })//end with array
    })//end of Valida Combo

    it.only('Valida Combo Multiplo', () => {
        cy.get('[data-testid=dataEsportes]')
            .select(['natacao', 'Corrida', 'nada'])//seleciona itens do combo multiplo
        cy.get('[data-testid=dataEsportes]')
            .then($el => {
                expect($el.val()).to.be.deep.equal(['natacao', 'Corrida', 'nada'])
                expect($el.val()).to.have.length(3)
            })//end of 1st then
        cy.get('[data-testid=dataEsportes]')
            .invoke('val').should('eql', ['natacao', 'Corrida', 'nada'])
    })//end of Valida Combo Multiplo
})