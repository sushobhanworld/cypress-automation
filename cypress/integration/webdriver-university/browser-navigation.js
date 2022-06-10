/// <reference types="Cypress" />

describe("Validate webdriver univercity hompage links", () => {
    it("Confirm links redirect to the correct pages", () => {
        cy.visit("https://www.webdriveruniversity.com/")
        cy.get('#contact-us').invoke('removeAttr', 'target').click({form: true})
        cy.url().should('include', 'contactus');
        cy.go('back')
        cy.reload()
        cy.url().should('include', 'https://www.webdriveruniversity.com/');
        cy.reload(true) // reload the page without using cache

        cy.go('forward')
        cy.url().should('include', 'contactus');
        cy.go('back')
        cy.get('#login-portal').invoke('removeAttr', 'target').click({form: true})
        cy.url().should('include', 'Login-Portal');
        cy.go('back');
    });
})