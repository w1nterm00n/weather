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

	let tempC = todayForecast.querySelector("#todaysTemperature");
	tempC.textContent = todaysWeatherObj.tempC + " C";
};

const displayForecast = function (threeDayForecastArr) {
	let futureForecast = document.querySelector(".futureForecastWrapper");
	//todayForecast.style.display = "flex";

	let getForecastIcon = async function (iconLink, dayIcon) {
		try {
			let searchString = "https:" + iconLink;
			let response = await fetch(searchString, { mode: "cors" });
			dayIcon.style.backgroundImage = `url(${response.url})`;
			dayIcon.style.backgroundRepeat = "no-repeat";
			dayIcon.style.backgroundSize = "cover";
		} catch (error) {
			console.error("Произошла ошибка:", error);
		}
	};

	let day0 = futureForecast.querySelector(".day0Wrapper");
	let date0 = day0.querySelector(".date");
	date0.textContent = threeDayForecastArr[0].date;
	let dayTC0 = day0.querySelector("#day0temp");
	dayTC0.textContent = threeDayForecastArr[0].dayTC;
	let nightTC0 = day0.querySelector("#night0temp");
	nightTC0.textContent = threeDayForecastArr[0].nightTC;
	let day0Icon = day0.querySelector(".icon");
	let icon0Link = threeDayForecastArr[0].icon;
	getForecastIcon(icon0Link, day0Icon);

	let day1 = futureForecast.querySelector(".day1Wrapper");
	let date1 = day1.querySelector(".date");
	date1.textContent = threeDayForecastArr[1].date;
	let dayTC1 = day1.querySelector("#day1temp");
	dayTC1.textContent = threeDayForecastArr[1].dayTC;
	let nightTC1 = day1.querySelector("#night1temp");
	nightTC1.textContent = threeDayForecastArr[1].nightTC;
	let day1Icon = day1.querySelector(".icon");
	let icon1Link = threeDayForecastArr[1].icon;
	getForecastIcon(icon1Link, day1Icon);

	let day2 = futureForecast.querySelector(".day2Wrapper");
	let date2 = day2.querySelector(".date");
	date2.textContent = threeDayForecastArr[2].date;
	let dayTC2 = day2.querySelector("#day2temp");
	dayTC2.textContent = threeDayForecastArr[2].dayTC;
	let nightTC2 = day2.querySelector("#night2temp");
	nightTC2.textContent = threeDayForecastArr[2].nightTC;
	let day2Icon = day2.querySelector(".icon");
	let icon2Link = threeDayForecastArr[2].icon;
	getForecastIcon(icon2Link, day2Icon);
	//displaying forecast for 3 days
};

// const changeTempScale = function() {

// }
export { displayTodayWthr, displayForecast };
