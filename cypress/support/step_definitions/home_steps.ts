import { When, Then } from "cypress-cucumber-preprocessor/steps";
import HomePage from "../../pageobjects/HomePage";

const homePage = new HomePage;

Then("I verify home page load", () => {
  homePage.verifySearchFieldDisplayed();
  cy.request("GET", "https://magento.softwaretestingboard.com/").then((response) => {
    expect(response.status).to.eq(200)
  })

  When("I search a Product {string}", (name: string) => {
    homePage.searchProduct(name);
  })

  Then("I verify product {string} displayed", (name: string) => {
    homePage.verifyProductSearchResultDisplayed(name);
  })

  When("I click SignIn Link", () => {
    cy.get(homePage.signInLink).click();;
  })

  When("I sign in with user: {string} and password: {string}", (user: string, pwd: string) => {
    homePage.signInUser(user, pwd);
  })

  Then("I verify welcome text displayed", () => {
    cy.get(homePage.welcomeText).should('be.visible');
  })

});
