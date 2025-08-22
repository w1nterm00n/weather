export interface OneDayData {
    date: string,
    dayTC: number,
    dayTF: number,
    nightTC: number,
    nightTF: number,
    icon: string,
}

export async function fetchThreeDayForecast (city: string): Promise<OneDayData[]> {
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

        const fetchedThreeDayData: OneDayData[] = weatherData.forecast.forecastday.map(
            (day: any) => ({
                date: day.date,
                dayTC: day.day.maxtemp_c,
                dayTF: day.day.maxtemp_f,
                nightTC: day.day.mintemp_c,
                nightTF: day.day.mintemp_f,
                icon: day.day.condition.icon, 
            })
        );
        return fetchedThreeDayData;
        
    } catch (error) {
        console.error("Произошла ошибка:", error);
        return []
    }
};