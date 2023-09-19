const displayTodayWthr = function (todaysWeatherObj) {
	let todayForecast = document.querySelector(".todayForecastWrapper");
	//todayForecast.style.display = "flex";

	//displaying local info
	let cityName = todayForecast.querySelector("#cityName");
	cityName.textContent = todaysWeatherObj.city + ", ";
	let country = todayForecast.querySelector("#country");
	country.textContent = todaysWeatherObj.country;
	let localtime = todayForecast.querySelector("#todaysDate");
	localtime.textContent = todaysWeatherObj.localtime;
	let todayCondition = todayForecast.querySelector("#conditionText");
	todayCondition.textContent = todaysWeatherObj.condition;

	//displaying weather info
	let humidity = todayForecast.querySelector("#humidity");
	humidity.textContent = "Humidity: " + todaysWeatherObj.humidity + " %";
	let windKPH = todayForecast.querySelector("#windKPH");
	windKPH.textContent = "Wind: " + todaysWeatherObj.windKPH + " kph";
	let cloudness = todayForecast.querySelector("#cloudness");

	let cloudStatus = "";
	if (todaysWeatherObj.cloud == 0) {
		cloudStatus = "Clear";
	} else if (0 < todaysWeatherObj.cloud && todaysWeatherObj.cloud < 26) {
		cloudStatus = "Little cloudy";
	} else if (24 < todaysWeatherObj.cloud && todaysWeatherObj.cloud < 51) {
		cloudStatus = "Partly cloudy";
	} else if (50 < todaysWeatherObj.cloud && todaysWeatherObj.cloud < 85) {
		cloudStatus = "Cloudy";
	} else if (84 < todaysWeatherObj.cloud) {
		cloudStatus = "Mainly cloudy";
	}
	cloudness.textContent = "Cloudness: " + cloudStatus;

	let tempC = todayForecast.querySelector("#todaysTemperature");
	tempC.textContent = todaysWeatherObj.tempC + " C";
};

const displayForecast = function (threeDayForecastArr) {
	let futureForecast = document.querySelector(".futureForecastWrapper");
	//todayForecast.style.display = "flex";

	let day0 = futureForecast.querySelector(".day0Wrapper");
	let date0 = day0.querySelector(".date");
	date0.textContent = threeDayForecastArr[0].date;
	let dayTC0 = day0.querySelector("#day0temp");
	dayTC0.textContent = threeDayForecastArr[0].dayTC;
	let nightTC0 = day0.querySelector("#night0temp");
	nightTC0.textContent = threeDayForecastArr[0].nightTC;

	let day1 = futureForecast.querySelector(".day1Wrapper");
	let date1 = day1.querySelector(".date");
	date1.textContent = threeDayForecastArr[1].date;
	let dayTC1 = day1.querySelector("#day1temp");
	dayTC1.textContent = threeDayForecastArr[1].dayTC;
	let nightTC1 = day1.querySelector("#night1temp");
	nightTC1.textContent = threeDayForecastArr[1].nightTC;

	let day2 = futureForecast.querySelector(".day2Wrapper");
	let date2 = day2.querySelector(".date");
	date2.textContent = threeDayForecastArr[2].date;
	let dayTC2 = day2.querySelector("#day2temp");
	dayTC2.textContent = threeDayForecastArr[2].dayTC;
	let nightTC2 = day2.querySelector("#night2temp");
	nightTC2.textContent = threeDayForecastArr[2].nightTC;
	//displaying forecast for 3 days
};

export { displayTodayWthr, displayForecast };
