interface FetchedTodayData {
    city: string,
    localtime: string,
    condition: string,
    humidity: number,
    tempC: number,
    tempF: number,
    windKPH: number,
    cloud: number,
    icon: string,
}

export async function fetchTodayWeather (city: string): Promise<FetchedTodayData> {
    try {
        let searchString =
            "https://api.weatherapi.com/v1/current.json?key=d1daec9ddc01455f82a220024232608&q=" +
            city;
        let response = await fetch(searchString, { mode: "cors" });
        let weatherData = await response.json();

        if (!response.ok) {
            throw new Error("Произошла ошибка: " + response.status);
        }
        return {
            city: weatherData.location.name,
            localtime: weatherData.location.localtime,
            condition: weatherData.current.condition.text,
            humidity: weatherData.current.humidity,
            tempC: weatherData.current.temp_c,
            tempF: weatherData.current.temp_f,
            windKPH: weatherData.current.wind_kph,
            cloud: weatherData.current.cloud,
            icon: weatherData.current.condition.icon,
        };
    } catch (error) {
        console.error("Произошла ошибка:", error);
        alert("Unknown location");
        throw error;
    }
};