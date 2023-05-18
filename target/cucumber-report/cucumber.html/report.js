$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("HomePage.feature");
formatter.feature({
  "line": 1,
  "name": "Home Page Test",
  "description": "As a user I want to verify the job search result using different data sets",
  "id": "home-page-test",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 6,
  "name": "User should verify the job search result using different data provided",
  "description": "",
  "id": "home-page-test;user-should-verify-the-job-search-result-using-different-data-provided",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@sanity"
    },
    {
      "line": 5,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I accept cookies",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I enter job title \"\u003cJobTitle\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter Location \"\u003cLocation\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select distance \"\u003cDistance\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click on moreSearchOptionsLink",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter salaryMin \"\u003cSalaryMin\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter salaryMax \"\u003cSalaryMax\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I select salaryType \"\u003cSalary Type\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I select jobType \"\u003cJobType\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click on \u0027Find Jobs\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I  verify the result \"\u003cVerifyMessage\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 19,
  "name": "",
  "description": "",
  "id": "home-page-test;user-should-verify-the-job-search-result-using-different-data-provided;",
  "rows": [
    {
      "cells": [
        "JobTitle",
        "Location",
        "Distance",
        "SalaryMin",
        "SalaryMax",
        "Salary Type",
        "JobType",
        "VerifyMessage"
      ],
      "line": 20,
      "id": "home-page-test;user-should-verify-the-job-search-result-using-different-data-provided;;1"
    },
    {
      "cells": [
        "Tester",
        "Harrow,Greater London",
        "5 miles",
        "30000",
        "600000",
        "Per annum",
        "Permanent",
        "Permanent Tester jobs in Harrow"
      ],
      "line": 21,
      "id": "home-page-test;user-should-verify-the-job-search-result-using-different-data-provided;;2"
    },
    {
      "cells": [
        "QA",
        "Kent",
        "10 miles",
        "25000",
        "500000",
        "Per annum",
        "Permanent",
        "Permanent Qa jobs in Kent"
      ],
      "line": 22,
      "id": "home-page-test;user-should-verify-the-job-search-result-using-different-data-provided;;3"
    },
    {
      "cells": [
        "Nurse",
        "London",
        "5 miles",
        "20000",
        "400000",
        "Per annum",
        "Permanent",
        "Permanent Nurse jobs in London"
      ],
      "line": 23,
      "id": "home-page-test;user-should-verify-the-job-search-result-using-different-data-provided;;4"
    },
    {
      "cells": [
        "Accountant",
        "Harrow,Greater london",
        "10 miles",
        "30000",
        "500000",
        "Per annum",
        "Permanent",
        "Permanent Accountant jobs in Harrow"
      ],
      "line": 24,
      "id": "home-page-test;user-should-verify-the-job-search-result-using-different-data-provided;;5"
    },
    {
      "cells": [
        "Manager",
        "Watford, Hertfordshire",
        "15 miles",
        "20000",
        "300000",
        "Per annum",
        "Permanent",
        "Permanent Manager jobs in Watford"
      ],
      "line": 25,
      "id": "home-page-test;user-should-verify-the-job-search-result-using-different-data-provided;;6"
    },
    {
      "cells": [
        "Test Engineer",
        "Luton",
        "10 miles",
        "30000",
        "600000",
        "Per annum",
        "Permanent",
        "Permanent Test Engineer jobs in Luton"
      ],
      "line": 26,
      "id": "home-page-test;user-should-verify-the-job-search-result-using-different-data-provided;;7"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 7229092301,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "User should verify the job search result using different data provided",
  "description": "",
  "id": "home-page-test;user-should-verify-the-job-search-result-using-different-data-provided;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@regression"
    },
    {
      "line": 5,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I accept cookies",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I enter job title \"Tester\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter Location \"Harrow,Greater London\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select distance \"5 miles\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click on moreSearchOptionsLink",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter salaryMin \"30000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter salaryMax \"600000\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I select salaryType \"Per annum\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I select jobType \"Permanent\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click on \u0027Find Jobs\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I  verify the result \"Permanent Tester jobs in Harrow\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "HomeTestSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 161925200,
  "status": "passed"
});
formatter.match({
  "location": "HomeTestSteps.iAcceptCookies()"
});
formatter.result({
  "duration": 385110500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tester",
      "offset": 19
    }
  ],
  "location": "HomeTestSteps.iEnterJobTitle(String)"
});
formatter.result({
  "duration": 542388801,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Harrow,Greater London",
      "offset": 18
    }
  ],
  "location": "HomeTestSteps.iEnterLocation(String)"
});
formatter.result({
  "duration": 170156201,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5 miles",
      "offset": 19
    }
  ],
  "location": "HomeTestSteps.iSelectDistance(String)"
});
formatter.result({
  "duration": 222611100,
  "status": "passed"
});
formatter.match({
  "location": "HomeTestSteps.iClickOnMoreSearchOptionsLink()"
});
formatter.result({
  "duration": 149535700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "30000",
      "offset": 19
    }
  ],
  "location": "HomeTestSteps.iEnterSalaryMin(String)"
});
formatter.result({
  "duration": 219874000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "600000",
      "offset": 19
    }
  ],
  "location": "HomeTestSteps.iEnterSalaryMax(String)"
});
formatter.result({
  "duration": 127052500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Per annum",
      "offset": 21
    }
  ],
  "location": "HomeTestSteps.iSelectSalaryType(String)"
});
formatter.result({
  "duration": 140964100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Permanent",
      "offset": 18
    }
  ],
  "location": "HomeTestSteps.iSelectJobType(String)"
});
formatter.result({
  "duration": 136069999,
  "status": "passed"
});
formatter.match({
  "location": "HomeTestSteps.iClickOnFindJobsButton()"
});
formatter.result({
  "duration": 153902301,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Permanent Tester jobs in Harrow",
      "offset": 22
    }
  ],
  "location": "HomeTestSteps.iVerifyTheResult(String)"
});
formatter.result({
  "duration": 2827815999,
  "status": "passed"
});
formatter.after({
  "duration": 825185800,
  "status": "passed"
});
formatter.before({
  "duration": 3112683300,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "User should verify the job search result using different data provided",
  "description": "",
  "id": "home-page-test;user-should-verify-the-job-search-result-using-different-data-provided;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@regression"
    },
    {
      "line": 5,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I accept cookies",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I enter job title \"QA\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter Location \"Kent\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select distance \"10 miles\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click on moreSearchOptionsLink",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter salaryMin \"25000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter salaryMax \"500000\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I select salaryType \"Per annum\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I select jobType \"Permanent\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click on \u0027Find Jobs\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I  verify the result \"Permanent Qa jobs in Kent\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "HomeTestSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 45301,
  "status": "passed"
});
formatter.match({
  "location": "HomeTestSteps.iAcceptCookies()"
});
formatter.result({
  "duration": 432759200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "QA",
      "offset": 19
    }
  ],
  "location": "HomeTestSteps.iEnterJobTitle(String)"
});
formatter.result({
  "duration": 699507499,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Kent",
      "offset": 18
    }
  ],
  "location": "HomeTestSteps.iEnterLocation(String)"
});
formatter.result({
  "duration": 196524901,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10 miles",
      "offset": 19
    }
  ],
  "location": "HomeTestSteps.iSelectDistance(String)"
});
formatter.result({
  "duration": 264253599,
  "status": "passed"
});
formatter.match({
  "location": "HomeTestSteps.iClickOnMoreSearchOptionsLink()"
});
formatter.result({
  "duration": 283117701,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "25000",
      "offset": 19
    }
  ],
  "location": "HomeTestSteps.iEnterSalaryMin(String)"
});
formatter.result({
  "duration": 248250500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "500000",
      "offset": 19
    }
  ],
  "location": "HomeTestSteps.iEnterSalaryMax(String)"
});
formatter.result({
  "duration": 150803500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Per annum",
      "offset": 21
    }
  ],
  "location": "HomeTestSteps.iSelectSalaryType(String)"
});
formatter.result({
  "duration": 157798799,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Permanent",
      "offset": 18
    }
  ],
  "location": "HomeTestSteps.iSelectJobType(String)"
});
formatter.result({
  "duration": 155553600,
  "status": "passed"
});
formatter.match({
  "location": "HomeTestSteps.iClickOnFindJobsButton()"
});
formatter.result({
  "duration": 170997000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Permanent Qa jobs in Kent",
      "offset": 22
    }
  ],
  "location": "HomeTestSteps.iVerifyTheResult(String)"
});
formatter.result({
  "duration": 4404997700,
  "status": "passed"
});
formatter.after({
  "duration": 819695799,
  "status": "passed"
});
formatter.before({
  "duration": 4081063901,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "User should verify the job search result using different data provided",
  "description": "",
  "id": "home-page-test;user-should-verify-the-job-search-result-using-different-data-provided;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@regression"
    },
    {
      "line": 5,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I accept cookies",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I enter job title \"Nurse\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter Location \"London\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select distance \"5 miles\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click on moreSearchOptionsLink",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter salaryMin \"20000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter salaryMax \"400000\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I select salaryType \"Per annum\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I select jobType \"Permanent\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click on \u0027Find Jobs\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I  verify the result \"Permanent Nurse jobs in London\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "HomeTestSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 60300,
  "status": "passed"
});
formatter.match({
  "location": "HomeTestSteps.iAcceptCookies()"
});
formatter.result({
  "duration": 393749301,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Nurse",
      "offset": 19
    }
  ],
  "location": "HomeTestSteps.iEnterJobTitle(String)"
});
formatter.result({
  "duration": 634864101,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "London",
      "offset": 18
    }
  ],
  "location": "HomeTestSteps.iEnterLocation(String)"
});
formatter.result({
  "duration": 117306001,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5 miles",
      "offset": 19
    }
  ],
  "location": "HomeTestSteps.iSelectDistance(String)"
});
formatter.result({
  "duration": 204903000,
  "status": "passed"
});
formatter.match({
  "location": "HomeTestSteps.iClickOnMoreSearchOptionsLink()"
});
formatter.result({
  "duration": 214350400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20000",
      "offset": 19
    }
  ],
  "location": "HomeTestSteps.iEnterSalaryMin(String)"
});
formatter.result({
  "duration": 209315101,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400000",
      "offset": 19
    }
  ],
  "location": "HomeTestSteps.iEnterSalaryMax(String)"
});
formatter.result({
  "duration": 128664200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Per annum",
      "offset": 21
    }
  ],
  "location": "HomeTestSteps.iSelectSalaryType(String)"
});
formatter.result({
  "duration": 140100301,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Permanent",
      "offset": 18
    }
  ],
  "location": "HomeTestSteps.iSelectJobType(String)"
});
formatter.result({
  "duration": 168884700,
  "status": "passed"
});
formatter.match({
  "location": "HomeTestSteps.iClickOnFindJobsButton()"
});
formatter.result({
  "duration": 224913900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Permanent Nurse jobs in London",
      "offset": 22
    }
  ],
  "location": "HomeTestSteps.iVerifyTheResult(String)"
});
formatter.result({
  "duration": 4859136199,
  "status": "passed"
});
formatter.after({
  "duration": 753136399,
  "status": "passed"
});
formatter.before({
  "duration": 3778009900,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "User should verify the job search result using different data provided",
  "description": "",
  "id": "home-page-test;user-should-verify-the-job-search-result-using-different-data-provided;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@regression"
    },
    {
      "line": 5,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I accept cookies",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I enter job title \"Accountant\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter Location \"Harrow,Greater london\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select distance \"10 miles\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click on moreSearchOptionsLink",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter salaryMin \"30000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter salaryMax \"500000\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I select salaryType \"Per annum\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I select jobType \"Permanent\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click on \u0027Find Jobs\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I  verify the result \"Permanent Accountant jobs in Harrow\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "HomeTestSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 23699,
  "status": "passed"
});
formatter.match({
  "location": "HomeTestSteps.iAcceptCookies()"
});
formatter.result({
  "duration": 337974201,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Accountant",
      "offset": 19
    }
  ],
  "location": "HomeTestSteps.iEnterJobTitle(String)"
});
formatter.result({
  "duration": 555601200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Harrow,Greater london",
      "offset": 18
    }
  ],
  "location": "HomeTestSteps.iEnterLocation(String)"
});
formatter.result({
  "duration": 150130201,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10 miles",
      "offset": 19
    }
  ],
  "location": "HomeTestSteps.iSelectDistance(String)"
});
formatter.result({
  "duration": 199672899,
  "status": "passed"
});
formatter.match({
  "location": "HomeTestSteps.iClickOnMoreSearchOptionsLink()"
});
formatter.result({
  "duration": 130576900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "30000",
      "offset": 19
    }
  ],
  "location": "HomeTestSteps.iEnterSalaryMin(String)"
});
formatter.result({
  "duration": 209376800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "500000",
      "offset": 19
    }
  ],
  "location": "HomeTestSteps.iEnterSalaryMax(String)"
});
formatter.result({
  "duration": 123273800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Per annum",
      "offset": 21
    }
  ],
  "location": "HomeTestSteps.iSelectSalaryType(String)"
});
formatter.result({
  "duration": 132227301,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Permanent",
      "offset": 18
    }
  ],
  "location": "HomeTestSteps.iSelectJobType(String)"
});
formatter.result({
  "duration": 130256900,
  "status": "passed"
});
formatter.match({
  "location": "HomeTestSteps.iClickOnFindJobsButton()"
});
formatter.result({
  "duration": 148392600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Permanent Accountant jobs in Harrow",
      "offset": 22
    }
  ],
  "location": "HomeTestSteps.iVerifyTheResult(String)"
});
formatter.result({
  "duration": 4906534000,
  "status": "passed"
});
formatter.after({
  "duration": 776852199,
  "status": "passed"
});
formatter.before({
  "duration": 3114454200,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "User should verify the job search result using different data provided",
  "description": "",
  "id": "home-page-test;user-should-verify-the-job-search-result-using-different-data-provided;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@regression"
    },
    {
      "line": 5,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I accept cookies",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I enter job title \"Manager\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter Location \"Watford, Hertfordshire\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select distance \"15 miles\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click on moreSearchOptionsLink",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter salaryMin \"20000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter salaryMax \"300000\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I select salaryType \"Per annum\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I select jobType \"Permanent\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click on \u0027Find Jobs\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I  verify the result \"Permanent Manager jobs in Watford\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "HomeTestSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 22201,
  "status": "passed"
});
formatter.match({
  "location": "HomeTestSteps.iAcceptCookies()"
});
formatter.result({
  "duration": 322241200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Manager",
      "offset": 19
    }
  ],
  "location": "HomeTestSteps.iEnterJobTitle(String)"
});
formatter.result({
  "duration": 609381799,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Watford, Hertfordshire",
      "offset": 18
    }
  ],
  "location": "HomeTestSteps.iEnterLocation(String)"
});
formatter.result({
  "duration": 204910400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "15 miles",
      "offset": 19
    }
  ],
  "location": "HomeTestSteps.iSelectDistance(String)"
});
formatter.result({
  "duration": 110126999,
  "status": "passed"
});
formatter.match({
  "location": "HomeTestSteps.iClickOnMoreSearchOptionsLink()"
});
formatter.result({
  "duration": 264842901,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20000",
      "offset": 19
    }
  ],
  "location": "HomeTestSteps.iEnterSalaryMin(String)"
});
formatter.result({
  "duration": 150967200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "300000",
      "offset": 19
    }
  ],
  "location": "HomeTestSteps.iEnterSalaryMax(String)"
});
formatter.result({
  "duration": 121770200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Per annum",
      "offset": 21
    }
  ],
  "location": "HomeTestSteps.iSelectSalaryType(String)"
});
formatter.result({
  "duration": 150755901,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Permanent",
      "offset": 18
    }
  ],
  "location": "HomeTestSteps.iSelectJobType(String)"
});
formatter.result({
  "duration": 132399800,
  "status": "passed"
});
formatter.match({
  "location": "HomeTestSteps.iClickOnFindJobsButton()"
});
formatter.result({
  "duration": 159672700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Permanent Manager jobs in Watford",
      "offset": 22
    }
  ],
  "location": "HomeTestSteps.iVerifyTheResult(String)"
});
formatter.result({
  "duration": 5121331300,
  "status": "passed"
});
formatter.after({
  "duration": 805750700,
  "status": "passed"
});
formatter.before({
  "duration": 2738274500,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "User should verify the job search result using different data provided",
  "description": "",
  "id": "home-page-test;user-should-verify-the-job-search-result-using-different-data-provided;;7",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@regression"
    },
    {
      "line": 5,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I accept cookies",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I enter job title \"Test Engineer\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter Location \"Luton\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select distance \"10 miles\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click on moreSearchOptionsLink",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter salaryMin \"30000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter salaryMax \"600000\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I select salaryType \"Per annum\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I select jobType \"Permanent\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click on \u0027Find Jobs\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I  verify the result \"Permanent Test Engineer jobs in Luton\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "HomeTestSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 24700,
  "status": "passed"
});
formatter.match({
  "location": "HomeTestSteps.iAcceptCookies()"
});
formatter.result({
  "duration": 384787600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test Engineer",
      "offset": 19
    }
  ],
  "location": "HomeTestSteps.iEnterJobTitle(String)"
});
formatter.result({
  "duration": 490020099,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Luton",
      "offset": 18
    }
  ],
  "location": "HomeTestSteps.iEnterLocation(String)"
});
formatter.result({
  "duration": 228057501,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10 miles",
      "offset": 19
    }
  ],
  "location": "HomeTestSteps.iSelectDistance(String)"
});
formatter.result({
  "duration": 208941199,
  "status": "passed"
});
formatter.match({
  "location": "HomeTestSteps.iClickOnMoreSearchOptionsLink()"
});
formatter.result({
  "duration": 144451799,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "30000",
      "offset": 19
    }
  ],
  "location": "HomeTestSteps.iEnterSalaryMin(String)"
});
formatter.result({
  "duration": 243584101,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "600000",
      "offset": 19
    }
  ],
  "location": "HomeTestSteps.iEnterSalaryMax(String)"
});
formatter.result({
  "duration": 121402700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Per annum",
      "offset": 21
    }
  ],
  "location": "HomeTestSteps.iSelectSalaryType(String)"
});
formatter.result({
  "duration": 126148300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Permanent",
      "offset": 18
    }
  ],
  "location": "HomeTestSteps.iSelectJobType(String)"
});
formatter.result({
  "duration": 124385900,
  "status": "passed"
});
formatter.match({
  "location": "HomeTestSteps.iClickOnFindJobsButton()"
});
formatter.result({
  "duration": 150480400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Permanent Test Engineer jobs in Luton",
      "offset": 22
    }
  ],
  "location": "HomeTestSteps.iVerifyTheResult(String)"
});
formatter.result({
  "duration": 5002338300,
  "status": "passed"
});
formatter.after({
  "duration": 803139200,
  "status": "passed"
});
});