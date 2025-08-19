    let changeScaleBtn = document.getElementById("changeTempUnit");

    changeScaleBtn.addEventListener("click", function () {
        if (scale == "F") {
            scale = "C";
            changeScaleBtn.textContent = "to Fahrenheit";
        } else if (scale == "C") {
            scale = "F";
            changeScaleBtn.textContent = "to Celsius";
        }
        displayTodayForecast(todaysWeather, scale);
        displayThreeDayForecast(threeDayForecast, scale);
    });