let city = prompt("Enter city: ");
let todaysWeather = {};
let threeDayForecast = {};

let getTodayWeather = async function () {
	try {
		let searchString =
			"https://api.weatherapi.com/v1/current.json?key=d1daec9ddc01455f82a220024232608&q=" +
			city;
		let response = await fetch(searchString, { mode: "cors" });
		let weatherData = await response.json();
		console.log(weatherData);

		collectInfoToObjects.collectTodaysWeather(weatherData);
	} catch (error) {
		console.error("Произошла ошибка:", error);
	}
};

//сделать функцию getThreeDayForecast

let collectInfoToObjects = {
	//making objects with the info I need
	collectTodaysWeather(weatherData) {
		todaysWeather.city = weatherData.location.name;
		todaysWeather.country = weatherData.location.country;
		todaysWeather.condition = weatherData.current.condition.text;
		todaysWeather.humidity = weatherData.current.humidity;
		todaysWeather.tempC = weatherData.current.temp_c;
		todaysWeather.tempF = weatherData.current.temp_f;
		todaysWeather.windKPH = weatherData.current.wind_kph;
		todaysWeather.cloud = weatherData.current.cloud;
	},
	collectThreeDayForecast(weatherData) {
		//здесь он будет заполнять объект threeDayForecast
	},
};

getWeather();
