export function mapTodayForecast (weatherData) {
    let todayForecast = {
		city: weatherData.location.name,
		localtime: weatherData.location.localtime,
		condition: weatherData.current.condition.text,
		humidity: weatherData.current.humidity,
		tempC: weatherData.current.temp_c,
		tempF: weatherData.current.temp_f,
		windKPH: weatherData.current.wind_kph,
		cloud: weatherData.current.cloud,
		icon: weatherData.current.condition.icon,
	};
	return todayForecast;
}