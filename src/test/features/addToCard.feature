Feature: Products test

Background:
    Given User navigates to the application
    And User click on the login link

Scenario: Login should be success
    And User enter the username as "<username>"
    And User enter the password as "<password>"
    And User click on the login button
    When User search for a "<book>"
    When user add a book to the card
    Then the card badget should get updated

    Examples:
    | username | password  | book            |
    | ortoni   | pass1234$ | Roomies         |
    | ortonikc | pass1234  | The simple wild |
