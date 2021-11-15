package com.vytrack.stepdefs;

import com.vytrack.pages.BasePage;
import com.vytrack.pages.LoginPage;
import com.vytrack.utilities.BrowserUtils;
import com.vytrack.utilities.ConfigurationReader;
import com.vytrack.utilities.Driver;
import io.cucumber.java.en.*;
import org.junit.Assert;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;

public class LoginStepDefs {

    LoginPage loginPage=new LoginPage();
BasePage basePage=new BasePage();
    @Given("user on the login page")
    public void the_user_on_the_login_page() {
     //   String url =ConfigurationReader.get("url");
        Driver.get().get(ConfigurationReader.get("url"));
    }
   @Given("user types the valid {string} and {string}")
    public void user_types_the_valid_and(String username, String password) {
        loginPage.userName.sendKeys(username);
        loginPage.passWord.sendKeys(password);}
   @Given("user types the valid {string} and {string} as a driver")
   public void user_types_the_valid_and_as_a_driver(String string, String string2) {
      loginPage.userName.sendKeys(ConfigurationReader.get("driver_username"));
        loginPage.passWord.sendKeys(ConfigurationReader.get("driver_password"));
    }
    @Given("user click to login button")
    public void user_click_to_login_button() {
       loginPage.lognButton.click();
    }
    @Given("verify the page {string}")
    public void verify_the_page(String title) {
        Assert.assertEquals("verify page subtitle ", title,basePage.pageTitle.getText());

    }
    @Given("verify the username {string}")
    public void verify_the_username(String expectedUsername) {
        Assert.assertEquals(expectedUsername,basePage.username.getText());
    }
    @Given("verify error massage on the login Page")
    public void verify_error_massage_on_the_login_Page() {
       Assert.assertTrue("error massage is dislayed",loginPage.invalidAlertMessage.isDisplayed());
    }
    @Given("the password should not be displayed")
    public void the_password_should_not_be_displayed() {
        System.out.println("loginPage.userName.getAttribute(\"value\") = " + loginPage.userName.getAttribute("value"));
        System.out.println("loginPage.passWord.getAttribute(\"value\") = " + loginPage.passWord.getAttribute("value"));

    }
    @Given("the user should click on the {string} link")
    public void the_user_should_click_on_the_link(String string) {
        loginPage.forgetPasswordButton.click();
    }

    @Given("verify user on the {string} page")
    public void verify_user_on_the_page(String string) {
        Assert.assertEquals("Forgot Password",loginPage.forgetPasswordPage.getText());
    }
    @Given("user can able to click on Remember me on this computer button")
    public void user_can_able_to_click_on_button() throws InterruptedException {
        JavascriptExecutor jse=(JavascriptExecutor)Driver.get();
    jse.executeScript("arguments[0].click();",loginPage.rememberMeCheckBox);
        Thread.sleep(4000);
        Assert.assertTrue(loginPage.rememberMeCheckBox.isSelected());
    }
    @Given("the user click on the {string}")
    public void the_user_click_on_the_and_use_the_keybord(String string) {
       loginPage.userName.click();
    }
    @Given("the user types the username as a truck driver and hit the Enter button and the user types the password and hit the Enter button")
    public void the_user_types_the_username_as_a_truck_driver_and_hit_the_Enter_button() throws InterruptedException {
       loginPage.userName.sendKeys(ConfigurationReader.get("driver_username")+Keys.ENTER+ "UserUser123" + Keys.ENTER);
     //Thread.sleep(5000);
       //   loginPage.userName.sendKeys(Keys.ENTER);
       // loginPage.passWord.sendKeys(ConfigurationReader.get("driver_password")+ Keys.ENTER);
    }



}
