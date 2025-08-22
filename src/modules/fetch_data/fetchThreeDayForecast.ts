export async function fetchThreeDayForecast (city: string) {
    try {
        let searchString =
            "https://api.weatherapi.com/v1/forecast.json?key=d1daec9ddc01455f82a220024232608&q=" +
            city +
            "&days=3";
        let response = await fetch(searchString, { mode: "cors" });
        let weatherData = await response.json();
        if (!response.ok) {
            throw new Error("Произошла ошибка: " + response.status);
        }
        return weatherData;
    } catch (error) {
        console.error("Произошла ошибка:", error);
    }
    return;
};