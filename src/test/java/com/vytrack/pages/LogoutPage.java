package com.vytrack.pages;

import com.vytrack.utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class LogoutPage {

    public LogoutPage(){
        PageFactory.initElements(Driver.get(), this);}
    @FindBy(xpath = "//*[@class='no-hash']")
    public WebElement logOutButton;

    @FindBy(tagName = "h2")
    public WebElement loginPage;

    }
