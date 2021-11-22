///<reference types = "cypress" />

it('An external test...', () => {

})//end of external test

describe('Should group tests...', () => {
    describe('Should group more specific tests...', () => {
        it('A specific test...', () => {

        })//end of specific test
    })//end of desc. specific tests

    describe('Should group more specific tests 2...', () => {
        it('A specific test 2...', () => {

        })//end of specific test
    })//end of group 2

    it('An internal test...', () => {
        
    })//end of internal test
})//end of group