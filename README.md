# API Automation Test for Weather API #
This project Contains the API Automation test scenario for 2 weather API
a) Get Weather Status
b) Get forecast

## Prerequisites ##

* Have [java](http://www.oracle.com/technetwork/java/javase/downloads/index.html) installed
* Have [maven](http://maven.apache.org/) installed

## Repository Structure ##
* All dependencies are in the pom.xml

## Run Structure ##
* This test can be run from Maven
```bash
mvn clean test
```
## Integrate with Circle CI ##
* This test is already integrated with circle CI, once any change is made to the test cases and updated in git then it will automatically trigger CI pipeline from master
