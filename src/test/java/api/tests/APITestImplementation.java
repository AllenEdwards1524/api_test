package api.tests;

import java.util.HashMap;
import java.util.Map;
import org.codehaus.jettison.json.JSONArray;
import io.restassured.RestAssured;
import io.restassured.builder.RequestSpecBuilder;
import io.restassured.filter.cookie.CookieFilter;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;
import org.codehaus.jettison.json.JSONObject;

public class APITestImplementation {
	private final Map<String, String> headers = new HashMap<>();
	private final CookieFilter cookieFilter = new CookieFilter();
	private static Response response_restAssured;
	private static APITestImplementation instance = null;

	private APITestImplementation() {
		super();
	}

	public static APITestImplementation getInstance() {
		if (instance == null) {
			instance = new APITestImplementation();
		}
		return instance;
	}

	public void validateResponseCode(int responseCode) {
		response_restAssured.then().assertThat().statusCode(responseCode);
	}

	public void getCurrentWeather(String lat, String lon, String key) {
		RequestSpecification requestSpecification = new RequestSpecBuilder().addHeaders(headers).build();
		RestAssured.enableLoggingOfRequestAndResponseIfValidationFails();
		response_restAssured = RestAssured.given().spec(requestSpecification).filter(cookieFilter)
				.relaxedHTTPSValidation().when().log().all()
				.get("https://api.weatherbit.io/v2.0/current?lat=" + lat + "&lon=" + lon + "&key=" + key).then().log()
				.all().assertThat().extract().response();
	}

	public void validateStateCode() throws Exception {
		JSONObject jsonResponseBody = new JSONObject(response_restAssured.getBody().asString());
		JSONArray data = jsonResponseBody.getJSONArray("data");
		for (int i = 0; i < data.length(); i++) {
			JSONObject dataObject = data.getJSONObject(i);
			String state_code = dataObject.getString("state_code");
			System.out.println("Value of /data/state_code is " + state_code);
			
			JSONObject weather = dataObject.getJSONObject("weather");
			String icon = weather.getString("icon");
			String code = weather.getString("code");
			String description = weather.getString("description");
			System.out.println("Value of /weather/icon is " + icon);
			System.out.println("Value of /weather/code is " + code);
			System.out.println("Value of /weather/description is " + description);
		}
	}

	public void getForecastWeather(String postalCode, String key) {
		RequestSpecification requestSpecification = new RequestSpecBuilder().addHeaders(headers).build();
		RestAssured.enableLoggingOfRequestAndResponseIfValidationFails();
		response_restAssured = RestAssured.given().spec(requestSpecification).filter(cookieFilter)
				.relaxedHTTPSValidation().when().log().all()
				.get("https://api.weatherbit.io/v2.0/forecast/3hourly?postal_code=" + postalCode + "&key=" + key).then()
				.log().all().assertThat().extract().response();
	}

	public void validate3HourlyForecastResponseFields() throws Exception {
		JSONObject jsonResponseBody = new JSONObject(response_restAssured.getBody().asString());
		JSONArray data = jsonResponseBody.getJSONArray("data");
		for (int i = 0; i < data.length(); i++) {
			JSONObject dataObject = data.getJSONObject(i);
			String timestamp_utc = dataObject.getString("timestamp_utc");
			JSONObject weather = dataObject.getJSONObject("weather");
			String icon = weather.getString("icon");
			String code = weather.getString("code");
			String description = weather.getString("description");
			System.out.println("Value of timestamp_utc is " + timestamp_utc);
			System.out.println("Value of /weather/icon is " + icon);
			System.out.println("Value of /weather/code is " + code);
			System.out.println("Value of /weather/description is " + description);
		}
	}

}