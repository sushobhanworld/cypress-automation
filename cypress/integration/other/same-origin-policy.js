/// <reference types="Cypress" />

describe("Cypress web security", () => {
    it("Validate visiting two different domains", () => {
        cy.visit("https://www.webdriveruniversity.com/")
        cy.visit("https://www.automationteststore.com/")
    });
    it("Validate visiting two different domains via user action", () => {
        cy.visit("https://www.webdriveruniversity.com/")
        cy.get('#automation-test-store').invoke('removeAttr', 'target').click();
    });
})