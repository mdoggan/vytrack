
Feature:  Logout Functionality with Cucumber
  Background:
    * user on the login page
    * user types the valid "username" and "password" as a driver
    * user click to login button
@INN-857
  Scenario: 1- User can log out by using log out button inside profile info and ends up in login page.
    * user click to username
    * user click to LogOutButton
    * verify user on the login page
@INN-858
  Scenario: 2- The user can not go to the home page again by clicking the step back button after successfully logged out
    * user click to username
    * user click to LogOutButton
    * user click on the step back button
    * verify user on the login page
@INN-859
    Scenario: 3- The user must be logged out if the user close the open tab
