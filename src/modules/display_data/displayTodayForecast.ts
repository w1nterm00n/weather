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

	function getCloudStatus(value) {
		if (value === 0) return "Clear";
		if (value <= 25) return "Little cloudy";
		if (value <= 50) return "Partly cloudy";
		if (value <= 85) return "Cloudy";
		return "Mainly cloudy";
	}
	cloudness.textContent = "Cloudness: " + getCloudStatus(todaysWeatherObj.cloud);

	let todayTemp = todayForecast.querySelector("#todaysTemperature");
	let tempScale = scale === "C" ? "tempC" : "tempF";
	todayTemp.textContent = `${todaysWeatherObj[tempScale]} °${scale}`;
};