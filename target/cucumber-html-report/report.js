$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("feature/APITestFeature.feature");
formatter.feature({
  "name": "Get Weather Data",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "As a user I want to get current weather data",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@all"
    },
    {
      "name": "@currentWeatherData"
    }
  ]
});
formatter.step({
  "name": "I provide \"\u003clat\u003e\" and \"\u003clon\u003e\" with \"\u003ckey\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "I get response code \u003cresponseCode\u003e",
  "keyword": "Then "
});
formatter.step({
  "name": "Response field state code in response",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "responseCode",
        "lat",
        "lon",
        "key"
      ]
    },
    {
      "cells": [
        "200",
        "40.730610",
        "-73.935242",
        "57d9bd3c24a3419886df6c45b651b04c"
      ]
    }
  ]
});
formatter.scenario({
  "name": "As a user I want to get current weather data",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@all"
    },
    {
      "name": "@currentWeatherData"
    }
  ]
});
formatter.step({
  "name": "I provide \"40.730610\" and \"-73.935242\" with \"57d9bd3c24a3419886df6c45b651b04c\"",
  "keyword": "When "
});
formatter.match({
  "location": "APITestFeatureDefinition.getCurrentWeatherData(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I get response code 200",
  "keyword": "Then "
});
formatter.match({
  "location": "APITestFeatureDefinition.getResponseCode(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Response field state code in response",
  "keyword": "And "
});
formatter.match({
  "location": "APITestFeatureDefinition.validateStateCode()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "As a user I want to get 3Hourly weather data forecast",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@all"
    },
    {
      "name": "@3hourlyWeatherData"
    }
  ]
});
formatter.step({
  "name": "I provide \"\u003cpostalCode\u003e\" with \"\u003ckey\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "I get response code \u003cresponseCode\u003e",
  "keyword": "Then "
});
formatter.step({
  "name": "Response field timestamp_utc and weather in response",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "responseCode",
        "postalCode",
        "key"
      ]
    },
    {
      "cells": [
        "200",
        "28546",
        "57d9bd3c24a3419886df6c45b651b04c"
      ]
    }
  ]
});
formatter.scenario({
  "name": "As a user I want to get 3Hourly weather data forecast",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@all"
    },
    {
      "name": "@3hourlyWeatherData"
    }
  ]
});
formatter.step({
  "name": "I provide \"28546\" with \"57d9bd3c24a3419886df6c45b651b04c\"",
  "keyword": "When "
});
formatter.match({
  "location": "APITestFeatureDefinition.getForecastWeatherData(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I get response code 200",
  "keyword": "Then "
});
formatter.match({
  "location": "APITestFeatureDefinition.getResponseCode(int)"
});
formatter.result({
  "error_message": "java.lang.AssertionError: 1 expectation failed.\nExpected status code \u003c200\u003e but was \u003c403\u003e.\n\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.codehaus.groovy.reflection.CachedConstructor.invoke(CachedConstructor.java:83)\n\tat org.codehaus.groovy.reflection.CachedConstructor.doConstructorInvoke(CachedConstructor.java:77)\n\tat org.codehaus.groovy.runtime.callsite.ConstructorSite$ConstructorSiteNoUnwrap.callConstructor(ConstructorSite.java:84)\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCallConstructor(CallSiteArray.java:60)\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callConstructor(AbstractCallSite.java:235)\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callConstructor(AbstractCallSite.java:247)\n\tat io.restassured.internal.ResponseSpecificationImpl$HamcrestAssertionClosure.validate(ResponseSpecificationImpl.groovy:482)\n\tat io.restassured.internal.ResponseSpecificationImpl$HamcrestAssertionClosure$validate$1.call(Unknown Source)\n\tat io.restassured.internal.ResponseSpecificationImpl.validateResponseIfRequired(ResponseSpecificationImpl.groovy:654)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite$PogoCachedMethodSiteNoUnwrapNoCoerce.invoke(PogoMetaMethodSite.java:210)\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite.callCurrent(PogoMetaMethodSite.java:59)\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:166)\n\tat io.restassured.internal.ResponseSpecificationImpl.statusCode(ResponseSpecificationImpl.groovy:124)\n\tat io.restassured.specification.ResponseSpecification$statusCode$2.callCurrent(Unknown Source)\n\tat io.restassured.internal.ResponseSpecificationImpl.statusCode(ResponseSpecificationImpl.groovy:132)\n\tat io.restassured.internal.ValidatableResponseOptionsImpl.statusCode(ValidatableResponseOptionsImpl.java:119)\n\tat api.tests.APITestImplementation.validateResponseCode(APITestImplementation.java:31)\n\tat api.tests.feature.definitions.APITestFeatureDefinition.getResponseCode(APITestFeatureDefinition.java:19)\n\tat ✽.I get response code 200(feature/APITestFeature.feature:16)\n",
  "status": "failed"
});
formatter.step({
  "name": "Response field timestamp_utc and weather in response",
  "keyword": "And "
});
formatter.match({
  "location": "APITestFeatureDefinition.validateForecastWeather()"
});
formatter.result({
  "status": "skipped"
});
});