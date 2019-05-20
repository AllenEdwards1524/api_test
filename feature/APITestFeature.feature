Feature: Get Weather Data

@all @currentWeatherData 
Scenario Outline: As a user I want to get current weather data 
	When I provide "<lat>" and "<lon>" with "<key>" 
	Then I get response code <responseCode> 
	And Response field state code in response
	
	Examples: 
		| responseCode | lat       |lon        |key                             |
		|          200 | 40.730610 |-73.935242 |57d9bd3c24a3419886df6c45b651b04c|
		
@all @3hourlyWeatherData 
Scenario Outline: As a user I want to get 3Hourly weather data forecast
	When I provide "<postalCode>" with "<key>" 
	Then I get response code <responseCode> 
	And Response field timestamp_utc and weather in response
	
	Examples: 
		| responseCode | postalCode |key                             |
		|          200 | 28546      |57d9bd3c24a3419886df6c45b651b04c|