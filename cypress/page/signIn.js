/// <reference types="Cypress" />

class signin{
    // I do the identificaiton of locators
    elements = {
        usernametxt :() =>cy.get("#username"),
        passwordtxt :() =>cy.get("#password"),
        arrowusername :() =>cy.get('#username .css-tlfecz-indicatorContainer'),
        arrowpassword :() =>cy.get('#password .css-tlfecz-indicatorContainer'),
        username :() => cy.get("#username > .css-yk16xz-control > .css-1hwfws3")
            }

// The action ont he locators
            verifyUsernameTextbox(){
                this.elements.usernametxt().should('be.visible').type('demouser')
                this.elements.usernametxt().trigger('keydown')
                this.elements.usernametxt().trigger('click')
            }

            clickArrowUsername(){
                this.elements.arrowusername().should('be.visible')
            }
}
module.exports = new signin();