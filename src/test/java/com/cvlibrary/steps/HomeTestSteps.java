package com.cvlibrary.steps;

import com.cvlibrary.pages.HomePage;
import com.cvlibrary.pages.ResultPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class HomeTestSteps {
    @Given("^I am on homepage$")
    public void iAmOnHomepage() {
    }

    @When("^I accept cookies$")
    public void iAcceptCookies() {
        new HomePage().acceptCookies();
    }
    @And("^I enter job title \"([^\"]*)\"$")
    public void iEnterJobTitle(String JobTitle) {
        new HomePage().enterJobTitle(JobTitle);
    }
    @And("^I enter Location \"([^\"]*)\"$")
    public void iEnterLocation(String Location) {
        new HomePage().enterLocation(Location);
    }
    @And("^I select distance \"([^\"]*)\"$")
    public void iSelectDistance(String Distance)  {
        new HomePage().selectDistance(Distance);
    }
    @And("^I click on moreSearchOptionsLink$")
    public void iClickOnMoreSearchOptionsLink() {
        new HomePage().MoreSearchOptionLink();
    }
    @And("^I enter salaryMin \"([^\"]*)\"$")
    public void iEnterSalaryMin(String SalaryMin)  {
        new HomePage().enterMinSalary(SalaryMin);
    }

    @And("^I enter salaryMax \"([^\"]*)\"$")
    public void iEnterSalaryMax(String SalaryMax)  {
        new HomePage().enterMaxSalary(SalaryMax);
    }

    @And("^I select salaryType \"([^\"]*)\"$")
    public void iSelectSalaryType(String SalaryType)  {
        new HomePage().salaryTypeDropDownLink(SalaryType);
    }

    @And("^I select jobType \"([^\"]*)\"$")
    public void iSelectJobType(String JobType)  {
        new HomePage().jobTypeDropDownLink(JobType);
    }
    @And("^I click on 'Find Jobs' button$")
    public void iClickOnFindJobsButton() {
        new HomePage().findJobsButton();
    }

    @Then("^I  verify the result \"([^\"]*)\"$")
    public void iVerifyTheResult(String VerifyMessage)  {
        new ResultPage().verifytheResult(VerifyMessage);
    }


}
