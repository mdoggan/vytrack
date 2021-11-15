@wip
Feature: US-001-Login Functionality with Cucumber
Background:
  * user on the login page
  @INN-847
  Scenario Outline:1-login with valid credantials information
    * user types the valid "<username>" and "<password>"
    * user click to login button
    * verify the page "<Page>"


    Examples:
      | username        | password    | Page            |
      | user10          | UserUser123 | Quick Launchpad |
      | salesmanager101 | UserUser123 | Dashboard       |
      | storemanager85  | UserUser123 | Dashboard       |

@INN-848
  Scenario Outline:2-The user try to login with invalid credantials information
    * user types the valid "<username>" and "<password>"
    * user click to login button
    Examples:
      | username  | password    |
      | user23    | password    |
      | user10000 | UserUser123 |
      | user      | user        |
@INN-849
  Scenario Outline:3- All users can see their own usernames in profile menu
    * user types the valid "<username>" and "<password>"
    * user click to login button
    * verify the username "<name>"
    Examples:
      | username        | password    | name     |
      | user10          | UserUser123 | John Doe |
      | salesmanager101 | UserUser123 | John Doe |
      | storemanager85  | UserUser123 | John Doe |
@INN-850
  Scenario Outline:4- "Invalid username or password." error message should be displayed for invalid credentials
    * user types the valid "<username>" and "<password>"
    * user click to login button
    * verify error massage on the login Page
    Examples:
      | username  | password    |
      | user23    | password    |
      | user10000 | UserUser123 |
      | user      | user        |
@INN-851
  Scenario Outline:5- User should see the password in bullet signs by default
    * user types the valid "<username>" and "<password>"
    * the password should not be displayed
    Examples:
      | username  | password    |
      | user23    | password    |
      | user10000 | UserUser123 |
      | user      | user        |
@INN-852
  Scenario: 6-User land on the ‘Forgot Password’ page after clicking on the "Forgot your password?" link
    * the user should click on the "Forgot your password?" link
    * verify user on the "Forgot Password" page
@INN-853
  Scenario: 7- User can see "Remember me on this computer" link on the login page and it should be clickable
    * user can able to click on Remember me on this computer button

@INN-854 @wip
  Scenario: 8- Verify that user can use "Enter" key from their keyboard on the login page
    * the user click on the "user input box"
    * the user types the username as a truck driver and hit the Enter button and the user types the password and hit the Enter button
