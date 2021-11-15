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
  "status": "skipped"
});
formatter.step({
  "name": "user on the login page",
  "keyword": "* "
});
formatter.match({
  "location": "com.vytrack.stepdefs.LoginStepDefs.the_user_on_the_login_page()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.step({
  "name": "user click to login button",
  "keyword": "* "
});
formatter.match({
  "location": "com.vytrack.stepdefs.LoginStepDefs.user_click_to_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "verify the page \"Quick Launchpad\"",
  "keyword": "* "
});
formatter.match({
  "location": "com.vytrack.stepdefs.LoginStepDefs.verify_the_page(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "skipped"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "skipped"
});
formatter.step({
  "name": "user on the login page",
  "keyword": "* "
});
formatter.match({
  "location": "com.vytrack.stepdefs.LoginStepDefs.the_user_on_the_login_page()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.step({
  "name": "user click to login button",
  "keyword": "* "
});
formatter.match({
  "location": "com.vytrack.stepdefs.LoginStepDefs.user_click_to_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "verify the page \"Dashboard\"",
  "keyword": "* "
});
formatter.match({
  "location": "com.vytrack.stepdefs.LoginStepDefs.verify_the_page(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "skipped"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "skipped"
});
formatter.step({
  "name": "user on the login page",
  "keyword": "* "
});
formatter.match({
  "location": "com.vytrack.stepdefs.LoginStepDefs.the_user_on_the_login_page()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.step({
  "name": "user click to login button",
  "keyword": "* "
});
formatter.match({
  "location": "com.vytrack.stepdefs.LoginStepDefs.user_click_to_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "verify the page \"Dashboard\"",
  "keyword": "* "
});
formatter.match({
  "location": "com.vytrack.stepdefs.LoginStepDefs.verify_the_page(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.step({
  "name": "user on the login page",
  "keyword": "* "
});
formatter.match({
  "location": "com.vytrack.stepdefs.LoginStepDefs.the_user_on_the_login_page()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.step({
  "name": "user click to login button",
  "keyword": "* "
});
formatter.match({
  "location": "com.vytrack.stepdefs.LoginStepDefs.user_click_to_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "skipped"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "skipped"
});
formatter.step({
  "name": "user on the login page",
  "keyword": "* "
});
formatter.match({
  "location": "com.vytrack.stepdefs.LoginStepDefs.the_user_on_the_login_page()"
});
formatter.result({
  "status": "skipped"
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
  "name": "user types the valid \"user10000\" and \"UserUser123\"",
  "keyword": "* "
});
formatter.match({
  "location": "com.vytrack.stepdefs.LoginStepDefs.user_types_the_valid_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click to login button",
  "keyword": "* "
});
formatter.match({
  "location": "com.vytrack.stepdefs.LoginStepDefs.user_click_to_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "skipped"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "skipped"
});
formatter.step({
  "name": "user on the login page",
  "keyword": "* "
});
formatter.match({
  "location": "com.vytrack.stepdefs.LoginStepDefs.the_user_on_the_login_page()"
});
formatter.result({
  "status": "skipped"
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
  "name": "user types the valid \"user\" and \"user\"",
  "keyword": "* "
});
formatter.match({
  "location": "com.vytrack.stepdefs.LoginStepDefs.user_types_the_valid_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click to login button",
  "keyword": "* "
});
formatter.match({
  "location": "com.vytrack.stepdefs.LoginStepDefs.user_click_to_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "skipped"
});
formatter.scenarioOutline({
  "name": "3- All users can see their own usernames in profile menu",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@INN-849"
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
  "name": "verify the username \"\u003cname\u003e\"",
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
        "name"
      ]
    },
    {
      "cells": [
        "user10",
        "UserUser123",
        "John Doe"
      ]
    },
    {
      "cells": [
        "salesmanager101",
        "UserUser123",
        "John Doe"
      ]
    },
    {
      "cells": [
        "storemanager85",
        "UserUser123",
        "John Doe"
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
  "status": "skipped"
});
formatter.step({
  "name": "user on the login page",
  "keyword": "* "
});
formatter.match({
  "location": "com.vytrack.stepdefs.LoginStepDefs.the_user_on_the_login_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "3- All users can see their own usernames in profile menu",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@wip"
    },
    {
      "name": "@INN-849"
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
  "status": "skipped"
});
formatter.step({
  "name": "user click to login button",
  "keyword": "* "
});
formatter.match({
  "location": "com.vytrack.stepdefs.LoginStepDefs.user_click_to_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "verify the username \"John Doe\"",
  "keyword": "* "
});
formatter.match({
  "location": "com.vytrack.stepdefs.LoginStepDefs.verify_the_username(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "skipped"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "skipped"
});
formatter.step({
  "name": "user on the login page",
  "keyword": "* "
});
formatter.match({
  "location": "com.vytrack.stepdefs.LoginStepDefs.the_user_on_the_login_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "3- All users can see their own usernames in profile menu",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@wip"
    },
    {
      "name": "@INN-849"
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
  "status": "skipped"
});
formatter.step({
  "name": "user click to login button",
  "keyword": "* "
});
formatter.match({
  "location": "com.vytrack.stepdefs.LoginStepDefs.user_click_to_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "verify the username \"John Doe\"",
  "keyword": "* "
});
formatter.match({
  "location": "com.vytrack.stepdefs.LoginStepDefs.verify_the_username(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "skipped"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "skipped"
});
formatter.step({
  "name": "user on the login page",
  "keyword": "* "
});
formatter.match({
  "location": "com.vytrack.stepdefs.LoginStepDefs.the_user_on_the_login_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "3- All users can see their own usernames in profile menu",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@wip"
    },
    {
      "name": "@INN-849"
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
  "status": "skipped"
});
formatter.step({
  "name": "user click to login button",
  "keyword": "* "
});
formatter.match({
  "location": "com.vytrack.stepdefs.LoginStepDefs.user_click_to_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "verify the username \"John Doe\"",
  "keyword": "* "
});
formatter.match({
  "location": "com.vytrack.stepdefs.LoginStepDefs.verify_the_username(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "skipped"
});
formatter.scenarioOutline({
  "name": "4- \"Invalid username or password.\" error message should be displayed for invalid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@INN-850"
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
  "name": "verify error massage on the login Page",
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
  "status": "skipped"
});
formatter.step({
  "name": "user on the login page",
  "keyword": "* "
});
formatter.match({
  "location": "com.vytrack.stepdefs.LoginStepDefs.the_user_on_the_login_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "4- \"Invalid username or password.\" error message should be displayed for invalid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@wip"
    },
    {
      "name": "@INN-850"
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
  "status": "skipped"
});
formatter.step({
  "name": "user click to login button",
  "keyword": "* "
});
formatter.match({
  "location": "com.vytrack.stepdefs.LoginStepDefs.user_click_to_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "verify error massage on the login Page",
  "keyword": "* "
});
formatter.match({
  "location": "com.vytrack.stepdefs.LoginStepDefs.verify_error_massage_on_the_login_Page()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "skipped"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "skipped"
});
formatter.step({
  "name": "user on the login page",
  "keyword": "* "
});
formatter.match({
  "location": "com.vytrack.stepdefs.LoginStepDefs.the_user_on_the_login_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "4- \"Invalid username or password.\" error message should be displayed for invalid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@wip"
    },
    {
      "name": "@INN-850"
    }
  ]
});
formatter.step({
  "name": "user types the valid \"user10000\" and \"UserUser123\"",
  "keyword": "* "
});
formatter.match({
  "location": "com.vytrack.stepdefs.LoginStepDefs.user_types_the_valid_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click to login button",
  "keyword": "* "
});
formatter.match({
  "location": "com.vytrack.stepdefs.LoginStepDefs.user_click_to_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "verify error massage on the login Page",
  "keyword": "* "
});
formatter.match({
  "location": "com.vytrack.stepdefs.LoginStepDefs.verify_error_massage_on_the_login_Page()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "skipped"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "skipped"
});
formatter.step({
  "name": "user on the login page",
  "keyword": "* "
});
formatter.match({
  "location": "com.vytrack.stepdefs.LoginStepDefs.the_user_on_the_login_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "4- \"Invalid username or password.\" error message should be displayed for invalid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@wip"
    },
    {
      "name": "@INN-850"
    }
  ]
});
formatter.step({
  "name": "user types the valid \"user\" and \"user\"",
  "keyword": "* "
});
formatter.match({
  "location": "com.vytrack.stepdefs.LoginStepDefs.user_types_the_valid_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click to login button",
  "keyword": "* "
});
formatter.match({
  "location": "com.vytrack.stepdefs.LoginStepDefs.user_click_to_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "verify error massage on the login Page",
  "keyword": "* "
});
formatter.match({
  "location": "com.vytrack.stepdefs.LoginStepDefs.verify_error_massage_on_the_login_Page()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "skipped"
});
formatter.scenarioOutline({
  "name": "5- User should see the password in bullet signs by default",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@INN-851"
    }
  ]
});
formatter.step({
  "name": "user types the valid \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "* "
});
formatter.step({
  "name": "the password should not be displayed",
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
        "passwordyy"
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
  "status": "skipped"
});
formatter.step({
  "name": "user on the login page",
  "keyword": "* "
});
formatter.match({
  "location": "com.vytrack.stepdefs.LoginStepDefs.the_user_on_the_login_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "5- User should see the password in bullet signs by default",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@wip"
    },
    {
      "name": "@INN-851"
    }
  ]
});
formatter.step({
  "name": "user types the valid \"user23\" and \"passwordyy\"",
  "keyword": "* "
});
formatter.match({
  "location": "com.vytrack.stepdefs.LoginStepDefs.user_types_the_valid_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the password should not be displayed",
  "keyword": "* "
});
formatter.match({
  "location": "com.vytrack.stepdefs.LoginStepDefs.the_password_should_not_be_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "skipped"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "skipped"
});
formatter.step({
  "name": "user on the login page",
  "keyword": "* "
});
formatter.match({
  "location": "com.vytrack.stepdefs.LoginStepDefs.the_user_on_the_login_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "5- User should see the password in bullet signs by default",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@wip"
    },
    {
      "name": "@INN-851"
    }
  ]
});
formatter.step({
  "name": "user types the valid \"user10000\" and \"UserUser123\"",
  "keyword": "* "
});
formatter.match({
  "location": "com.vytrack.stepdefs.LoginStepDefs.user_types_the_valid_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the password should not be displayed",
  "keyword": "* "
});
formatter.match({
  "location": "com.vytrack.stepdefs.LoginStepDefs.the_password_should_not_be_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "skipped"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "skipped"
});
formatter.step({
  "name": "user on the login page",
  "keyword": "* "
});
formatter.match({
  "location": "com.vytrack.stepdefs.LoginStepDefs.the_user_on_the_login_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "5- User should see the password in bullet signs by default",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@wip"
    },
    {
      "name": "@INN-851"
    }
  ]
});
formatter.step({
  "name": "user types the valid \"user\" and \"user\"",
  "keyword": "* "
});
formatter.match({
  "location": "com.vytrack.stepdefs.LoginStepDefs.user_types_the_valid_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the password should not be displayed",
  "keyword": "* "
});
formatter.match({
  "location": "com.vytrack.stepdefs.LoginStepDefs.the_password_should_not_be_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "skipped"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "skipped"
});
formatter.step({
  "name": "user on the login page",
  "keyword": "* "
});
formatter.match({
  "location": "com.vytrack.stepdefs.LoginStepDefs.the_user_on_the_login_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "6-User land on the ‘Forgot Password’ page after clicking on the \"Forgot your password?\" link",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@wip"
    },
    {
      "name": "@INN-852"
    }
  ]
});
formatter.step({
  "name": "the user should click on the \"Forgot your password?\" link",
  "keyword": "* "
});
formatter.match({
  "location": "com.vytrack.stepdefs.LoginStepDefs.the_user_should_click_on_the_link(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "verify user on the \"Forgot Password\" page",
  "keyword": "* "
});
formatter.match({
  "location": "com.vytrack.stepdefs.LoginStepDefs.verify_user_on_the_page(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "skipped"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "skipped"
});
formatter.step({
  "name": "user on the login page",
  "keyword": "* "
});
formatter.match({
  "location": "com.vytrack.stepdefs.LoginStepDefs.the_user_on_the_login_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "7- User can see \"Remember me on this computer\" link on the login page and it should be clickable",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@wip"
    },
    {
      "name": "@INN-853"
    }
  ]
});
formatter.step({
  "name": "user can able to click on Remember me on this computer button",
  "keyword": "* "
});
formatter.match({
  "location": "com.vytrack.stepdefs.LoginStepDefs.user_can_able_to_click_on_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "skipped"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "skipped"
});
formatter.step({
  "name": "user on the login page",
  "keyword": "* "
});
formatter.match({
  "location": "com.vytrack.stepdefs.LoginStepDefs.the_user_on_the_login_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "8- Verify that user can use \"Enter\" key from their keyboard on the login page",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@wip"
    },
    {
      "name": "@INN-854"
    },
    {
      "name": "@wip"
    }
  ]
});
formatter.step({
  "name": "the user click on the \"user input box\"",
  "keyword": "* "
});
formatter.match({
  "location": "com.vytrack.stepdefs.LoginStepDefs.the_user_click_on_the_and_use_the_keybord(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the user types the username as a truck driver and hit the Enter button and the user types the password and hit the Enter button",
  "keyword": "* "
});
formatter.match({
  "location": "com.vytrack.stepdefs.LoginStepDefs.the_user_types_the_username_as_a_truck_driver_and_hit_the_Enter_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "skipped"
});
formatter.uri("file:src/test/resources/features/logout.feature");
formatter.feature({
  "name": "Logout Functionality with Cucumber",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "skipped"
});
formatter.step({
  "name": "user on the login page",
  "keyword": "* "
});
formatter.match({
  "location": "com.vytrack.stepdefs.LoginStepDefs.the_user_on_the_login_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user types the valid \"username\" and \"password\" as a driver",
  "keyword": "* "
});
formatter.match({
  "location": "com.vytrack.stepdefs.LoginStepDefs.user_types_the_valid_and_as_a_driver(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click to login button",
  "keyword": "* "
});
formatter.match({
  "location": "com.vytrack.stepdefs.LoginStepDefs.user_click_to_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "1- User can log out by using log out button inside profile info and ends up in login page.",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@INN-857"
    }
  ]
});
formatter.step({
  "name": "user click to username",
  "keyword": "* "
});
formatter.match({
  "location": "com.vytrack.stepdefs.LogoutDtepDefs.user_click_to_username()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click to LogOutButton",
  "keyword": "* "
});
formatter.match({
  "location": "com.vytrack.stepdefs.LogoutDtepDefs.user_click_to_LogOutButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "verify user on the login page",
  "keyword": "* "
});
formatter.match({
  "location": "com.vytrack.stepdefs.LogoutDtepDefs.verify_user_on_the_login_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "skipped"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "skipped"
});
formatter.step({
  "name": "user on the login page",
  "keyword": "* "
});
formatter.match({
  "location": "com.vytrack.stepdefs.LoginStepDefs.the_user_on_the_login_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user types the valid \"username\" and \"password\" as a driver",
  "keyword": "* "
});
formatter.match({
  "location": "com.vytrack.stepdefs.LoginStepDefs.user_types_the_valid_and_as_a_driver(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click to login button",
  "keyword": "* "
});
formatter.match({
  "location": "com.vytrack.stepdefs.LoginStepDefs.user_click_to_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "2- The user can not go to the home page again by clicking the step back button after successfully logged out",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@INN-858"
    }
  ]
});
formatter.step({
  "name": "user click to username",
  "keyword": "* "
});
formatter.match({
  "location": "com.vytrack.stepdefs.LogoutDtepDefs.user_click_to_username()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click to LogOutButton",
  "keyword": "* "
});
formatter.match({
  "location": "com.vytrack.stepdefs.LogoutDtepDefs.user_click_to_LogOutButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click on the step back button",
  "keyword": "* "
});
formatter.match({
  "location": "com.vytrack.stepdefs.LogoutDtepDefs.user_click_on_the_step_back_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "verify user on the login page",
  "keyword": "* "
});
formatter.match({
  "location": "com.vytrack.stepdefs.LogoutDtepDefs.verify_user_on_the_login_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "skipped"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "skipped"
});
formatter.step({
  "name": "user on the login page",
  "keyword": "* "
});
formatter.match({
  "location": "com.vytrack.stepdefs.LoginStepDefs.the_user_on_the_login_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user types the valid \"username\" and \"password\" as a driver",
  "keyword": "* "
});
formatter.match({
  "location": "com.vytrack.stepdefs.LoginStepDefs.user_types_the_valid_and_as_a_driver(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user click to login button",
  "keyword": "* "
});
formatter.match({
  "location": "com.vytrack.stepdefs.LoginStepDefs.user_click_to_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "3- The user must be logged out if the user close the open tab",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@INN-859"
    }
  ]
});
formatter.step({
  "name": "user close the all tab",
  "keyword": "* "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user on the login page",
  "keyword": "* "
});
formatter.match({
  "location": "com.vytrack.stepdefs.LoginStepDefs.the_user_on_the_login_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user verify on the login page",
  "keyword": "* "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "status": "skipped"
});
});