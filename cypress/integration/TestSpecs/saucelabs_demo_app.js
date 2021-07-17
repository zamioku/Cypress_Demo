/// <reference types="cypress" />

// https://www.saucedemo.com/

describe('Saucelabs Demo app', () => {

    Cypress.config('baseUrl', 'https://www.saucedemo.com')

    it('should be able to login', () => {
        
        const user = 'standard_user'
        const pass = 'secret_sauce'

        cy.visit()

        cy.get('#user-name').type(user)
        cy.get('#password').type(pass)

        cy.get('#login-button').click()
    })
})