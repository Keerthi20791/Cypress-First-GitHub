/// <reference types="Cypress" />
import {Given,When, Then, And} from "cypress-cucumber-preprocessor/steps";


Given("User open the browser",()=> {
    cy.log("Opening the chrome browser")
})

When("User enters the url of the website",()=>{
    cy.visit("www.google.com")
})

And("User checks tht title of the page",()=>{
    // const titlevalue = cy.title();
    cy.title().should('include','Google')
    cy.title().then((title)=>{
        cy.log('ttile of page -> '+title)
        title.match('/Google/')
      })
})

Then("User verfies the url has a text",()=>{
    cy.url().should('include','google')
    cy.url().then((url)=>{
        cy.log('url of page -> '+url)
      })
})