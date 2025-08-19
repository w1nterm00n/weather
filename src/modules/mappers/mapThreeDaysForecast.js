export function mapThreeDaysForecast (weatherData) {
    let threeDayForecast = [{}, {}, {}];
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
    return threeDayForecast
}