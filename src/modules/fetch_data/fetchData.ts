import { fetchThreeDayForecast } from "./fetchThreeDayForecast";
import { fetchTodayWeather } from "./fetchTodayForecast";

export async function fetchData (city) {
    let todayForecast = await fetchTodayWeather(city);
    let threeDayForecast = await fetchThreeDayForecast(city);
    return [todayForecast, threeDayForecast];
}