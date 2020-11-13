/// <reference types="cypress" />

describe('Filtering TODOs', () => {
    beforeEach(() => {
        cy.visit('http://todomvc.com/examples/vanilla-es6/')

        cy.get('.new-todo', { timeout: 6000 }).type("Clean room{enter}")
        cy.get('.new-todo').type("Learn JavaScript{enter}")
        cy.get('.new-todo').type("Use Cypress{enter}")

        cy.get('.todo-list li:nth-child(2) .toggle').click()
    })

    it('should filter "Active" TODOs', () => {
        cy.contains('Active').click()

        cy.get('.todo-list li').contains('Cypress').click();

        cy.get('.todo-list li').should('have.length', 2)

        cy.screenshot('First step')
    })

    it('should filter "Completed" TODOs', () => {
        cy.contains('Completed').click()

        cy.get('.todo-list li').should('have.length', 1)
    })

    it('should filter "All" TODOs', () => {
        cy.contains('All').click()

        cy.get('.todo-list li').should('have.length', 3)

        cy.screenshot("Final step")
    })

})