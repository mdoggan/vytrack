package com.vytrack.pages;

import com.vytrack.utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class BasePage {
    public BasePage() {
        PageFactory.initElements(Driver.get(), this);
    }

    @FindBy (className = "oro-subtitle")
    public WebElement pageTitle;

    @FindBy(css = "#user-menu > a")
    public WebElement username;




}
