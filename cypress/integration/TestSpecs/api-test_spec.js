/// <reference types="cypress" />

describe('Dummy REST API', () => {
    Cypress.config('baseUrl', 'http://dummy.restapiexample.com/api/v1')

    it('should retrieve employee list', () => {
        cy.request('GET', '/employees').then((response) => {
            expect(response).to.have.property('status', 200)
            expect(response.body).to.not.be.null
            expect(response.body.data).to.have.length(24)
        })
    })

    it('should add a new employee', () => {
        const item = { "name": "test", "salary": "123", "age": "23" }
        cy.request('POST', '/create', item)
            .its('body')
            .its('data')
            .should('include', { name: "test" })
    })

    it('should update a given employee', () => {
        const item = { "name": "test2" }
        cy.request('PUT', '/update/1', item)
            .its('status')
            .should('eq', 200)
    })
})