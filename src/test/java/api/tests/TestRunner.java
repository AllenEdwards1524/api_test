package api.tests;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import net.serenitybdd.cucumber.CucumberWithSerenity;

@RunWith(CucumberWithSerenity.class)
@CucumberOptions(plugin = { "html:target/cucumber-html-report", "json:target/cucumber.json",
		"junit:target/cucumber-junit-report/allcukes.xml" }, tags = { "@currentWeatherData" }, features = { "feature" })

public class TestRunner {

}
