Feature: Demo test

   Scenario: Verify Home Page load
      Given I Launch Home page
      Then I verify home page load

   Scenario: Search a Product
      Given I Launch Home page
      And I search a Product "Olivia 1/4 Zip Light Jacket"
      Then I verify product "Olivia 1/4 Zip Light Jacket" displayed

   Scenario: User can Sign In
      Given I Launch Home page
      And I click SignIn Link
      And I sign in with user: "testerqa@mailinator.com" and password: "123!@#qweQWE"
      Then I verify welcome text displayed