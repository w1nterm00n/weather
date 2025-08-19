import { playAnim } from "./utlis/animation";
import { displayThreeDayForecast } from "./display_data/displayThreeDaysForecast";
import { displayTodayForecast } from "./display_data/displayTodayForecast";
import { fetchData } from "./fetch_data/fetchData";
import { mapThreeDaysForecast } from "./mappers/mapThreeDaysForecast";
import { mapTodayForecast } from "./mappers/mapTodayForecast";

let form = document.getElementById("citySearch");
const card  = document.querySelector('.mainCardWrapper');
const todayForecast = document.querySelector('.todayForecastWrapper');
const futureForecast = document.querySelector('.futureForecastWrapper');
let open = false;
let city = form.querySelector("#cityInput");

form.addEventListener("submit", async function (event) {
    event.preventDefault();
    //fetch data from API
    let fetchedData = await fetchData(city.value);
    //made objects from them
    let todayForecastObject = mapTodayForecast(fetchedData[0]);
    let threeDayForecastArray = mapThreeDaysForecast(fetchedData[1]);
    console.log(todayForecastObject, threeDayForecastArray);
    //display data
    displayTodayForecast(todayForecastObject, "T");
    displayThreeDayForecast(threeDayForecastArray, "T");

    open = false;
    card.classList.remove('open');
    card.classList.toggle('open');
    await showAnimation();
});

async function showAnimation () {
    if (open) return;
    open = true;
    await playAnim(todayForecast, 'animate__fadeInDown', 150);
    await playAnim(futureForecast, 'animate__fadeInDown', 150);
}

