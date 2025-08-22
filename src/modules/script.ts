import { playAnim } from "./utlis/animation";
import { displayThreeDayForecast } from "./display_data/displayThreeDaysForecast";
import { displayTodayForecast } from "./display_data/displayTodayForecast";
import { changeScale } from "./utlis/changeScale";
import { fetchTodayWeather } from "./fetch_data/fetchTodayForecast";
import { fetchThreeDayForecast } from "./fetch_data/fetchThreeDayForecast";

let form = document.getElementById("citySearch") as HTMLElement;
const card  = document.querySelector('.mainCardWrapper') as HTMLElement;
const todayForecast = document.querySelector('.todayForecastWrapper') as HTMLElement;
const futureForecast = document.querySelector('.futureForecastWrapper') as HTMLElement;
let open = false;
let city = form.querySelector("#cityInput") as HTMLInputElement;

form.addEventListener("submit", async function (event: Event) {
    event.preventDefault();
    await handleWeatherSearch(city.value);
    open = false;
    card.classList.remove('open');
    card.classList.toggle('open');
    await showAnimation();
});

async function handleWeatherSearch (city: string) {
    let fetchedTodayData = await fetchTodayWeather(city);
    let fetchThreeDayData = await fetchThreeDayForecast(city);
    displayTodayForecast(fetchedTodayData, "F");
    displayThreeDayForecast(fetchThreeDayData, "F");
    changeScale(fetchedTodayData, fetchThreeDayData);
}

async function showAnimation () {
    if (open) return;
    open = true;
    await playAnim(todayForecast, 'animate__fadeInDown', 150);
    await playAnim(futureForecast, 'animate__fadeInDown', 150);
}

