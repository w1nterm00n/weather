import { Scale } from "../state";

export function displayTodayForecast (todaysWeatherObj, scale: Scale) {
	let todayForecast = document.querySelector(".todayForecastWrapper") as HTMLElement;
	todayForecast.style.display = "flex";

	//displaying local info
	let cityName = todayForecast.querySelector("#cityName") as HTMLElement;
	cityName.textContent = todaysWeatherObj.city + ", ";
	let country = todayForecast.querySelector("#country") as HTMLElement;
	country.textContent = todaysWeatherObj.country;
	let localtime = todayForecast.querySelector("#todaysDate") as HTMLElement;
	localtime.textContent = todaysWeatherObj.localtime;
	let todayCondition = todayForecast.querySelector("#conditionText") as HTMLElement;
	todayCondition.textContent = todaysWeatherObj.condition;
	let todayIcon = todayForecast.querySelector(".icon") as HTMLElement;
	let iconLink = todaysWeatherObj.icon;

	let getTodayIcon = async function (iconLink: string): Promise<void> {
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
	let humidity = todayForecast.querySelector("#humidity") as HTMLElement;
	humidity.textContent = "Humidity: " + todaysWeatherObj.humidity + " %";
	let windKPH = todayForecast.querySelector("#windKPH") as HTMLElement;
	windKPH.textContent = "Wind: " + todaysWeatherObj.windKPH + " kph";
	let cloudness = todayForecast.querySelector("#cloudness") as HTMLElement;

	function getCloudStatus(value: number): string {
		if (value === 0) return "Clear";
		if (value <= 25) return "Little cloudy";
		if (value <= 50) return "Partly cloudy";
		if (value <= 85) return "Cloudy";
		return "Mainly cloudy";
	}
	cloudness.textContent = "Cloudness: " + getCloudStatus(todaysWeatherObj.cloud);

	let todayTemp = todayForecast.querySelector("#todaysTemperature") as HTMLElement;
	let tempScale = scale === "C" ? "tempC" : "tempF";
	todayTemp.textContent = `${todaysWeatherObj[tempScale]} °${scale}`;
};