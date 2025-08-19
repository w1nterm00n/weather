export function mapTodayForecast (weatherData) {
    let todayForecast = {};
	todayForecast.city = weatherData.location.name;
	todayForecast.country = weatherData.location.country;
	todayForecast.localtime = weatherData.location.localtime;
	todayForecast.condition = weatherData.current.condition.text;
	todayForecast.humidity = weatherData.current.humidity;
	todayForecast.tempC = weatherData.current.temp_c;
	todayForecast.tempF = weatherData.current.temp_f;
	todayForecast.windKPH = weatherData.current.wind_kph;
	todayForecast.cloud = weatherData.current.cloud;
	todayForecast.icon = weatherData.current.condition.icon;
	return todayForecast;
}