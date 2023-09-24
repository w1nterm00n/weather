import { displayTodayWthr, displayForecast } from "./display";

const gettingTheInfo = function () {
	let form = document.getElementById("citySearch");
	let city = form.querySelector("#cityInput");
	form.addEventListener("submit", function (event) {
		event.preventDefault();
		getTodayWeather(city.value);
		getThreeDayForecast(city.value);
	});

	let todaysWeather = {};
	let threeDayForecast = [{}, {}, {}];
	let scale = "F";

	let getTodayWeather = async function (city) {
		try {
			let searchString =
				"https://api.weatherapi.com/v1/current.json?key=d1daec9ddc01455f82a220024232608&q=" +
				city;
			let response = await fetch(searchString, { mode: "cors" });
			let weatherData = await response.json();

			collectInfoToObjects.collectTodaysWeather(weatherData);
			displayTodayWthr(todaysWeather, scale);
		} catch (error) {
			console.error("Произошла ошибка:", error);
		}
	};

	let getThreeDayForecast = async function (city) {
		try {
			let searchString =
				"http://api.weatherapi.com/v1/forecast.json?key=d1daec9ddc01455f82a220024232608&q=" +
				city +
				"&days=3&aqi=no&alerts=no";
			let response = await fetch(searchString, { mode: "cors" });
			let weatherData = await response.json();

			collectInfoToObjects.collectThreeDayForecast(weatherData);
			displayForecast(threeDayForecast, scale);
		} catch (error) {
			console.error("Произошла ошибка:", error);
		}
	};

	let collectInfoToObjects = {
		//making objects with the info I need
		collectTodaysWeather(weatherData) {
			todaysWeather.city = weatherData.location.name;
			todaysWeather.country = weatherData.location.country;
			todaysWeather.localtime = weatherData.location.localtime;
			todaysWeather.condition = weatherData.current.condition.text;
			todaysWeather.humidity = weatherData.current.humidity;
			todaysWeather.tempC = weatherData.current.temp_c;
			todaysWeather.tempF = weatherData.current.temp_f;
			todaysWeather.windKPH = weatherData.current.wind_kph;
			todaysWeather.cloud = weatherData.current.cloud;
			todaysWeather.icon = weatherData.current.condition.icon;
		},

		collectThreeDayForecast(weatherData) {
			threeDayForecast[0].date = weatherData.forecast.forecastday[0].date;
			threeDayForecast[0].dayTC =
				weatherData.forecast.forecastday[0].day.maxtemp_c;
			threeDayForecast[0].dayTF =
				weatherData.forecast.forecastday[0].day.maxtemp_f;
			threeDayForecast[0].nightTC =
				weatherData.forecast.forecastday[0].day.mintemp_c;
			threeDayForecast[0].nightTF =
				weatherData.forecast.forecastday[0].day.mintemp_f;
			threeDayForecast[0].icon =
				weatherData.forecast.forecastday[0].day.condition.icon;

			threeDayForecast[1].date = weatherData.forecast.forecastday[1].date;
			threeDayForecast[1].dayTC =
				weatherData.forecast.forecastday[1].day.maxtemp_c;
			threeDayForecast[1].dayTF =
				weatherData.forecast.forecastday[1].day.maxtemp_f;
			threeDayForecast[1].nightTC =
				weatherData.forecast.forecastday[1].day.mintemp_c;
			threeDayForecast[1].nightTF =
				weatherData.forecast.forecastday[1].day.mintemp_f;
			threeDayForecast[1].icon =
				weatherData.forecast.forecastday[1].day.condition.icon;

			threeDayForecast[2].date = weatherData.forecast.forecastday[2].date;
			threeDayForecast[2].dayTC =
				weatherData.forecast.forecastday[2].day.maxtemp_c;
			threeDayForecast[2].dayTF =
				weatherData.forecast.forecastday[2].day.maxtemp_f;
			threeDayForecast[2].nightTC =
				weatherData.forecast.forecastday[2].day.mintemp_c;
			threeDayForecast[2].nightTF =
				weatherData.forecast.forecastday[2].day.mintemp_f;
			threeDayForecast[2].icon =
				weatherData.forecast.forecastday[2].day.condition.icon;
		},
	};

	//add event listener to button which changes the t scale
	let changeScaleBtn = document.getElementById("changeTempUnit");

	changeScaleBtn.addEventListener("click", function () {
		if (scale == "F") {
			scale = "C";
			changeScaleBtn.textContent = "to Fahrenheit";
		} else if (scale == "C") {
			scale = "F";
			changeScaleBtn.textContent = "to Celsius";
		}
		displayTodayWthr(todaysWeather, scale);
		displayForecast(threeDayForecast, scale);
	});
};

export { gettingTheInfo };
