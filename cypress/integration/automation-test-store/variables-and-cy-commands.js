/// <reference types="Cypress" />

describe("Verifying variables, cypress commands and jquery commands", () => {
    it("Navigating to specific product pages", () => {
        cy.visit("https://www.automationteststore.com/")
        //cy.get("a[href*='product/category&path='").contains("Skincare").click()
        cy.get("a[href*='product/category&path='").contains("Makeup").click()

        //const header = cy.xpath("//h1/span[text()='Makeup']")
        // const header = cy.get("h1 .maintext)");
        // cy.log(header.text())

        // Use promise
        cy.get("h1 .maintext").then(($headerText) => {
            const headerText = $headerText.text()
            cy.log("Found header text: " + headerText)
            expect(headerText).is.eq("Makeup")
        })
    });

    it.only("Validate properties of ContactUs page", () => {
        cy.visit("https://automationteststore.com/index.php?rt=content/contact")
        // Using cypress commands and chaining


        // Jquery approach
        cy.xpath("//*[contains(text(),'First name')]").then(($firstNameText) => {
            expect($firstNameText.text()).to.contains('First name')

            // Embedded commands (Closure)
            cy.get('#field_11').then(fnText => {
                cy.log(fnText.text())
                cy.log(fnText)
            })
        })
    })
})