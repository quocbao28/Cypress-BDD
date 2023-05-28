import { Given, When } from "cypress-cucumber-preprocessor/steps";
import HomePage from "../../pageobjects/HomePage";

const homePage = new HomePage();
Given("I Launch Home page", () => {
	homePage.launchPage();
});


