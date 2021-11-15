$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/login.feature");
formatter.feature({
  "name": "US-001-Login Functionality with Cucumber",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.scenarioOutline({
  "name": "1-login with valid credantials information",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@INN-847"
    }
  ]
});
formatter.step({
  "name": "user types the valid \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "* "
});
formatter.step({
  "name": "user click to login button",
  "keyword": "* "
});
formatter.step({
  "name": "verify the page \"\u003cPage\u003e\"",
  "keyword": "* "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "Page"
      ]
    },
    {
      "cells": [
        "user10",
        "UserUser123",
        "Quick Launchpad"
      ]
    },
    {
      "cells": [
        "salesmanager101",
        "UserUser123",
        "Dashboard"
      ]
    },
    {
      "cells": [
        "storemanager85",
        "UserUser123",
        "Dashboard"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user on the login page",
  "keyword": "* "
});
formatter.match({
  "location": "com.vytrack.stepdefs.LoginStepDefs.the_user_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "1-login with valid credantials information",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@wip"
    },
    {
      "name": "@INN-847"
    }
  ]
});
formatter.step({
  "name": "user types the valid \"user10\" and \"UserUser123\"",
  "keyword": "* "
});
formatter.match({
  "location": "com.vytrack.stepdefs.LoginStepDefs.user_types_the_valid_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click to login button",
  "keyword": "* "
});
formatter.match({
  "location": "com.vytrack.stepdefs.LoginStepDefs.user_click_to_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the page \"Quick Launchpad\"",
  "keyword": "* "
});
formatter.match({
  "location": "com.vytrack.stepdefs.LoginStepDefs.verify_the_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user on the login page",
  "keyword": "* "
});
formatter.match({
  "location": "com.vytrack.stepdefs.LoginStepDefs.the_user_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "1-login with valid credantials information",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@wip"
    },
    {
      "name": "@INN-847"
    }
  ]
});
formatter.step({
  "name": "user types the valid \"salesmanager101\" and \"UserUser123\"",
  "keyword": "* "
});
formatter.match({
  "location": "com.vytrack.stepdefs.LoginStepDefs.user_types_the_valid_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click to login button",
  "keyword": "* "
});
formatter.match({
  "location": "com.vytrack.stepdefs.LoginStepDefs.user_click_to_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the page \"Dashboard\"",
  "keyword": "* "
});
formatter.match({
  "location": "com.vytrack.stepdefs.LoginStepDefs.verify_the_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user on the login page",
  "keyword": "* "
});
formatter.match({
  "location": "com.vytrack.stepdefs.LoginStepDefs.the_user_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "1-login with valid credantials information",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@wip"
    },
    {
      "name": "@INN-847"
    }
  ]
});
formatter.step({
  "name": "user types the valid \"storemanager85\" and \"UserUser123\"",
  "keyword": "* "
});
formatter.match({
  "location": "com.vytrack.stepdefs.LoginStepDefs.user_types_the_valid_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click to login button",
  "keyword": "* "
});
formatter.match({
  "location": "com.vytrack.stepdefs.LoginStepDefs.user_click_to_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the page \"Dashboard\"",
  "keyword": "* "
});
formatter.match({
  "location": "com.vytrack.stepdefs.LoginStepDefs.verify_the_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "2-The user try to login with invalid credantials information",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@INN-848"
    }
  ]
});
formatter.step({
  "name": "user types the valid \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "* "
});
formatter.step({
  "name": "user click to login button",
  "keyword": "* "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "user23",
        "password"
      ]
    },
    {
      "cells": [
        "user10000",
        "UserUser123"
      ]
    },
    {
      "cells": [
        "user",
        "user"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user on the login page",
  "keyword": "* "
});
formatter.match({
  "location": "com.vytrack.stepdefs.LoginStepDefs.the_user_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "2-The user try to login with invalid credantials information",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@wip"
    },
    {
      "name": "@INN-848"
    }
  ]
});
formatter.step({
  "name": "user types the valid \"user23\" and \"password\"",
  "keyword": "* "
});
formatter.match({
  "location": "com.vytrack.stepdefs.LoginStepDefs.user_types_the_valid_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click to login button",
  "keyword": "* "
});
formatter.match({
  "location": "com.vytrack.stepdefs.LoginStepDefs.user_click_to_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user on the login page",
  "keyword": "* "
});
formatter.match({
  "location": "com.vytrack.stepdefs.LoginStepDefs.the_user_on_the_login_page()"
});
