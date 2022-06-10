/// <reference types="Cypress" />

describe("Verifying checkbixes via Webdriver uni", () => {
    it("Check and validate checkbox", () => {
        cy.visit("https://www.webdriveruniversity.com/")
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force: true})
        //cy.get('#checkboxes > :nth-child(1) > input').check()
        //cy.get('#checkboxes > :nth-child(1) > input').check().should('be.checked')
        //cy.get('#checkboxes > :nth-child(1) > input').check().should('not.be.checked')

        cy.get('#checkboxes > :nth-child(1) > input').as('options-1')
        cy.get('@option-1').check();
        cy.get('@option-1').check().should('be.checked')
    });
})