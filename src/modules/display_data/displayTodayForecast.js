export function displayTodayForecast (todaysWeatherObj, scale) {
	let todayForecast = document.querySelector(".todayForecastWrapper");
	todayForecast.style.display = "flex";

	//displaying local info
	let cityName = todayForecast.querySelector("#cityName");
	cityName.textContent = todaysWeatherObj.city + ", ";
	let country = todayForecast.querySelector("#country");
	country.textContent = todaysWeatherObj.country;
	let localtime = todayForecast.querySelector("#todaysDate");
	localtime.textContent = todaysWeatherObj.localtime;
	let todayCondition = todayForecast.querySelector("#conditionText");
	todayCondition.textContent = todaysWeatherObj.condition;
	let todayIcon = todayForecast.querySelector(".icon");
	let iconLink = todaysWeatherObj.icon;

	let getTodayIcon = async function (iconLink) {
		try {
			let searchString = "https:" + iconLink;
			let response = await fetch(searchString, { mode: "cors" });
			todayIcon.style.backgroundImage = `url(${response.url})`;
			todayIcon.style.backgroundRepeat = "no-repeat";
			todayIcon.style.backgroundSize = "cover";
		} catch (error) {
			console.error("Произошла ошибка:", error);
		}
	};
	getTodayIcon(iconLink);

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

	let todayTemp = todayForecast.querySelector("#todaysTemperature");
	if (scale === "F") {
		todayTemp.textContent = todaysWeatherObj.tempF + " " + scale;
	} else if (scale === "C") {
		todayTemp.textContent = todaysWeatherObj.tempC + " °" + scale;
	}
};