/// <reference types="Cypress" />

describe("Alias and invoke", () => {
    it("Validate a specific hair care product", () => {
        cy.visit("https://www.automationteststore.com/")
        cy.get("a[href*='product/category&path='").contains("Hair Care").click()

        cy.get(".fixed_wrapper .prdocutname").eq(0).invoke('text').as('productThumbnail')
        cy.get('@productThumbnail').its('length').should('be.greaterThan', 5)
        cy.get('@productThumbnail').should('include', 'Seaweed Conditioner')
    });
    it("Validate the number of products with thumbnail and title of Add to cart", () => {
        cy.visit("https://www.automationteststore.com/")
        cy.get(".thumbnail").as('productThumbnail')
        cy.get('@productThumbnail').should('have.length', 16)
        cy.get('@productThumbnail').find('.productcart').invoke('attr', 'title').should('include', 'Add to Cart')
    });
    it("Calculate total of normal and sale products", () => {
        cy.visit("https://www.automationteststore.com/")
        cy.get(".thumbnail").as('productThumbnail')

        cy.get('@productThumbnail').find('.oneprice').invoke('text').as('itemPrice')
        cy.get('@productThumbnail').find('.pricenew').invoke('text').as('saleItemPrice')

        var itemsTotal = 0;
        cy.get('@itemPrice').then($linkText => {
            var itemPriceTotal = 0
            var itemPrice = $linkText.split('$')
            var i;
            for (i = 0; i < itemPrice.length; i) {
                cy.log(itemPrice[i])
                itemPriceTotal = itemPriceTotal + Number(itemPrice[i])
            }
            itemsTotal = itemsTotal + itemPriceTotal;
            cy.log("Non sale price items total : " + itemPriceTotal)
        })
        cy.log("----------------------------------------------------------------")
        cy.get('@saleItemPrice').then(($linkText) => {
            var saleItemPriceTotal = 0
            var saleItemPrice = $linkText.split('$')
            var j;
            for (let j = 0; j < saleItemPrice.length; j++) {
                cy.log(saleItemPrice[j]);
                saleItemPriceTotal = saleItemPriceTotal + Number(saleItemPrice[j])
            }
            itemsTotal = itemsTotal + saleItemPriceTotal;
            cy.log("Sale price items total : " + saleItemPriceTotal)
        })
        cy.log("Net total amount : " + itemsTotal)
    });
    it("hello test", () => {
        cy.log("This is test")
        cy.visit("https://www.automationteststore.com/")
        cy.xpath("//a[contains(@href,'product/category') and contains(text(),'Books')]").click().then(() => {
            cy.get('.maintext').then($linkText => {
                var txt = $linkText.text();
                cy.log(txt)
            });
        });
    });
    it.only("Practise", () => {
        cy.log("This is test")
        cy.visit("https://www.automationteststore.com/")
        cy.xpath("//a[contains(@href,'product/category') and contains(text(),'Books')]").click().then(() => {
            cy.get('.maintext').invoke('text').as('bookText');
            cy.get('@bookText').then($linkText => {
                cy.log($linkText)
            })
        })
    });
});