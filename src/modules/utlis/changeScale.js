import { displayThreeDayForecast } from "../display_data/displayThreeDaysForecast";
import { displayTodayForecast } from "../display_data/displayTodayForecast";
import { getScale } from "../state";

export function changeScale(todayForecastObject, threeDayForecastArray) {
    let scale = getScale();
    let changeScaleBtn = document.getElementById("changeTempUnit");

    changeScaleBtn.addEventListener("click", function () {
        if (scale == "F") {
            scale = "C";
            changeScaleBtn.textContent = "to Fahrenheit";
        } else if (scale == "C") {
            scale = "F";
            changeScaleBtn.textContent = "to Celsius";
        }

        //re-render display with new scale
        displayTodayForecast(todayForecastObject, scale);
        displayThreeDayForecast(threeDayForecastArray, scale);
    });
}