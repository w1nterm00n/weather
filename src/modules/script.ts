import { playAnim } from "./utlis/animation";
import { displayThreeDayForecast } from "./display_data/displayThreeDaysForecast";
import { displayTodayForecast } from "./display_data/displayTodayForecast";
import { fetchData } from "./fetch_data/fetchData";
import { changeScale } from "./utlis/changeScale";

let form = document.getElementById("citySearch") as HTMLElement;
const card  = document.querySelector('.mainCardWrapper') as HTMLElement;
const todayForecast = document.querySelector('.todayForecastWrapper') as HTMLElement;
const futureForecast = document.querySelector('.futureForecastWrapper') as HTMLElement;
let open = false;
let city = form.querySelector("#cityInput") as HTMLElement;

form.addEventListener("submit", async function (event) {
    event.preventDefault();
    await handleWeatherSearch(city.value); //типизирую тут
    open = false;
    card.classList.remove('open');
    card.classList.toggle('open');
    await showAnimation();
});

async function handleWeatherSearch (city: string) {
    let fetchedData = await fetchData(city);
    displayTodayForecast(fetchedData[0], "F");
    displayThreeDayForecast(fetchedData[1], "F");
    changeScale(fetchedData[0], fetchedData[1]);
}

async function showAnimation () {
    if (open) return;
    open = true;
    await playAnim(todayForecast, 'animate__fadeInDown', 150);
    await playAnim(futureForecast, 'animate__fadeInDown', 150);
}

