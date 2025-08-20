import { playAnim } from "./utils/animation";
import { displayThreeDayForecast } from "./display_data/displayThreeDaysForecast";
import { changeScale } from "./utils/changeScale";
import { displayTodayForecast } from "./display_data/displayTodayForecast";
import { mapTodayForecast } from "./mappers/mapTodayForecast";
import { mapThreeDaysForecast } from "./mappers/mapThreeDaysForecast";
import { fetchData } from "./fetch_data/fetchData";

let form = document.getElementById("citySearch");
const card  = document.querySelector('.mainCardWrapper');
const todayForecast = document.querySelector('.todayForecastWrapper');
const futureForecast = document.querySelector('.futureForecastWrapper');
let open = false;
let city = form.querySelector("#cityInput");

form.addEventListener("submit", async function (event) {
    event.preventDefault();
    await handleWeatherSearch(city.value);
    open = false;
    card.classList.remove('open');
    card.classList.toggle('open');
    await showAnimation();
});

async function handleWeatherSearch (city) {
    let fetchedData = await fetchData(city);
    let todayForecastObject = mapTodayForecast(fetchedData[0]);
    let threeDayForecastArray = mapThreeDaysForecast(fetchedData[1]);
    displayTodayForecast(todayForecastObject, "F");
    displayThreeDayForecast(threeDayForecastArray, "F");
    changeScale(todayForecastObject, threeDayForecastArray);
}

async function showAnimation () {
    if (open) return;
    open = true;
    await playAnim(todayForecast, 'animate__fadeInDown', 150);
    await playAnim(futureForecast, 'animate__fadeInDown', 150);
}

