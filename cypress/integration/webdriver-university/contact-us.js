/// <reference types="Cypress" />

describe("Test contact us form", () => {
    it("should be able to submit a successful submission via contact us form", () => {
        cy.visit("https://www.webdriveruniversity.com/")
        cy.get('#contact-us').invoke('removeAttr', 'target').click({form: true})
        cy.document().should('have.property', 'charset').and('eq','UTF-8');
        cy.title().should('include', 'WebDriver | Contact Us');
        cy.url().should('include', 'Contact-Us');
        cy.get('[name="first_name"]').type("Kumar");
        cy.get('[name="last_name"]').type("Sushobhan");
        cy.get('[name="email"]').type("sushobhanworld@gmail.com");
        cy.get('textarea.feedback-input').type("Learning Cypress");
        cy.get('[type="submit"]').click();
        cy.get('h1').should('have.text', 'Thank You for your Message!')
    });
})