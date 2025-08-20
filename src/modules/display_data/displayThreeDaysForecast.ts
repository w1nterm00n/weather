export function displayThreeDayForecast (threeDayForecastArr, scale) {
	//displaying forecast for 3 days
	let futureForecast = document.querySelector(".futureForecastWrapper");
	futureForecast.style.display = "flex";

	let getForecastIcon = async function (iconLink, dayIcon) {
		try {
			let searchString = "https:" + iconLink;
			let response = await fetch(searchString, { mode: "cors" });
			dayIcon.style.backgroundImage = `url(${response.url})`;
			dayIcon.style.backgroundRepeat = "no-repeat";
			dayIcon.style.backgroundSize = "cover";
		} catch (error) {
			console.error("Произошла ошибка:", error);
		}
	};

	function displayDayNForecast (n) {
		let dayN = futureForecast.querySelector(`.day${n}Wrapper`);
		let dateN = dayN.querySelector(".date");
		dateN.textContent = threeDayForecastArr[n].date;
		let dayTN = dayN.querySelector(`#day${n}temp`);
		let nightTN = dayN.querySelector(`#night${n}temp`);

		const dayKey = scale === "C" ? "dayTC" : "dayTF";
		const nightKey = scale === "C" ? "nightTC" : "nightTF";
		dayTN.textContent = `${threeDayForecastArr[n][dayKey]} °${scale}`;
		nightTN.textContent = `${threeDayForecastArr[n][nightKey]} °${scale}`;

		let dayNIcon = dayN.querySelector(".icon");
		let iconNLink = threeDayForecastArr[n].icon;
		getForecastIcon(iconNLink, dayNIcon);
	}

	for (let i = 0; i <= 2; i++) {
		displayDayNForecast(i);
	}
};