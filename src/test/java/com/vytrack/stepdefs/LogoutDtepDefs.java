package com.vytrack.stepdefs;

import com.vytrack.pages.BasePage;
import com.vytrack.pages.LoginPage;
import com.vytrack.pages.LogoutPage;
import com.vytrack.utilities.ConfigurationReader;
import com.vytrack.utilities.Driver;
import io.cucumber.java.en.Given;
import org.junit.Assert;

public class LogoutDtepDefs {
    LogoutPage logoutPage=new LogoutPage();
    BasePage basePage=new BasePage();
    @Given("user click to LogOutButton")
    public void user_click_to_LogOutButton() {
        logoutPage.logOutButton.click();
    }

    @Given("verify user on the login page")
    public void verify_user_on_the_login_page() throws InterruptedException {
        Assert.assertEquals("Login",logoutPage.loginPage.getText());
        Thread.sleep(2000);
    }
    @Given("user click to username")
    public void user_click_to_username() throws InterruptedException {
        basePage.username.click();
        Thread.sleep(2000);}

    @Given("user click on the step back button")
    public void user_click_on_the_step_back_button() throws InterruptedException {
        Driver.get().navigate().back();
        //Thread.sleep(2000);
    }
    @Given("user close the all tab")
    public void user_close_the_all_tab() {
      Driver.closeDriver();
    }

    @Given("user verify on the login page")
    public void user_verify_on_the_login_page() {
        String Url="http://qa.intabella.com/user/login";
       Assert.assertEquals(Url,Driver.get().getCurrentUrl());
    }


}
