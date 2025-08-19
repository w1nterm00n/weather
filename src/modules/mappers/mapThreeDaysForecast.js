export function mapThreeDaysForecast (weatherData) {
    let threeDayForecast = [{}, {}, {}];

    for (let i = 0; i <= 2; i++) {
        threeDayForecast[i].date = weatherData.forecast.forecastday[i].date;
        threeDayForecast[i].dayTC =
            weatherData.forecast.forecastday[i].day.maxtemp_c;
        threeDayForecast[i].dayTF =
            weatherData.forecast.forecastday[i].day.maxtemp_f;
        threeDayForecast[i].nightTC =
            weatherData.forecast.forecastday[i].day.mintemp_c;
        threeDayForecast[i].nightTF =
            weatherData.forecast.forecastday[i].day.mintemp_f;
        threeDayForecast[i].icon =
            weatherData.forecast.forecastday[i].day.condition.icon;
    }
    return threeDayForecast
}