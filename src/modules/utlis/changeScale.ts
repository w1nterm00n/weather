import { displayThreeDayForecast } from "../display_data/displayThreeDaysForecast";
import { displayTodayForecast } from "../display_data/displayTodayForecast";
import { getScale, Scale } from "../state";

export function changeScale(todayForecastObject, threeDayForecastArray) {
    let scale: Scale = getScale();
    let changeScaleBtn = document.getElementById("changeTempUnit") as HTMLElement;

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