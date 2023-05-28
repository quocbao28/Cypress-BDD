import BaseAction from "../support/baseAction";

export default class HomePage extends BaseAction {
  public searchField: string;
  public productNameSearchResult: string;
  public signInLink: string;
  public emailField: string;
  public passField: string;
  public signInButton: string;
  public welcomeText: string;

  constructor() {
    super();
    this.searchField = "input#search";
    this.productNameSearchResult = "div.product-item-info div a";
    this.signInLink = "header.page-header li.authorization-link ";
    this.emailField = "input[name='login[username]']";
    this.passField = "input[name='login[password]']";
    this.signInButton = "div.login-container button[type='submit']";
    this.welcomeText = "div[class='panel header'] ul[class='header links'] li[class='greet welcome']";
  }

  launchPage() {
    cy.visit("");

    cy.get('body').should('be.visible');
    return this;
  }

  verifySearchFieldDisplayed() {
    cy.get(this.searchField).should("be.visible");
  }

  searchProduct(name: string) {
    cy.get(this.searchField).type(name);
    cy.get(this.searchField).type('{enter}');
  }

  verifyProductSearchResultDisplayed(name: string) {
    cy.get(this.productNameSearchResult).contains(name).should("be.visible");
  }

  signInUser(user: string, pwd: string) {
    cy.get(this.emailField).type(user);
    cy.get(this.passField).type(pwd);
    cy.get(this.signInButton).click();
  }


};
