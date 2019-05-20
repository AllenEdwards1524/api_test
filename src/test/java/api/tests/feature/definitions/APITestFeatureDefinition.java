package api.tests.feature.definitions;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

import api.tests.APITestImplementation;

public class APITestFeatureDefinition {

    @When("^I provide \"([^\"]*)\" and \"([^\"]*)\" with \"([^\"]*)\"$")
    public void getCurrentWeatherData(String lat, String lon, String key) throws Exception {
        APITestImplementation c = APITestImplementation.getInstance();
        c.getCurrentWeather(lat, lon, key);
    }

    @Then("^I get response code (\\d+)$")
    public void getResponseCode(int responseCode) {
        APITestImplementation c = APITestImplementation.getInstance();
        c.validateResponseCode(responseCode);
    }
    
    @Then("^Response field state code in response$")
    public void validateStateCode() throws Exception {
        APITestImplementation c = APITestImplementation.getInstance();
        c.validateStateCode();
    }
    
    @When("^I provide \"([^\"]*)\" with \"([^\"]*)\"$")
    public void getForecastWeatherData(String postalCode, String key) throws Exception {
        APITestImplementation c = APITestImplementation.getInstance();
        c.getForecastWeather(postalCode, key);
    }
    
    @Then("^Response field timestamp_utc and weather in response$")
    public void validateForecastWeather() throws Exception {
        APITestImplementation c = APITestImplementation.getInstance();
        c.validate3HourlyForecastResponseFields();
    }
}