(()=>{"use strict";!function(){let t=document.getElementById("citySearch"),a=t.querySelector("#cityInput");t.addEventListener("submit",(function(t){t.preventDefault(),o(a.value),r(a.value)}));let e={},c=[{},{},{}],o=async function(t){try{let a="https://api.weatherapi.com/v1/current.json?key=d1daec9ddc01455f82a220024232608&q="+t,e=await fetch(a,{mode:"cors"}),c=await e.json();d.collectTodaysWeather(c)}catch(t){console.error("Произошла ошибка:",t)}},r=async function(t){try{let a="http://api.weatherapi.com/v1/forecast.json?key=d1daec9ddc01455f82a220024232608&q="+t+"&days=3&aqi=no&alerts=no",e=await fetch(a,{mode:"cors"}),c=await e.json();d.collectThreeDayForecast(c)}catch(t){console.error("Произошла ошибка:",t)}},d={collectTodaysWeather(t){e.city=t.location.name,e.country=t.location.country,e.condition=t.current.condition.text,e.humidity=t.current.humidity,e.tempC=t.current.temp_c,e.tempF=t.current.temp_f,e.windKPH=t.current.wind_kph,e.cloud=t.current.cloud,console.log(e)},collectThreeDayForecast(t){c[0].date=t.forecast.forecastday[0].date,c[0].dayTC=t.forecast.forecastday[0].day.maxtemp_c,c[0].dayTF=t.forecast.forecastday[0].day.maxtemp_f,c[0].nightTC=t.forecast.forecastday[0].day.mintemp_c,c[0].nightTF=t.forecast.forecastday[0].day.mintemp_f,c[1].date=t.forecast.forecastday[1].date,c[1].dayTC=t.forecast.forecastday[1].day.maxtemp_c,c[1].dayTF=t.forecast.forecastday[1].day.maxtemp_f,c[1].nightTC=t.forecast.forecastday[1].day.mintemp_c,c[1].nightTF=t.forecast.forecastday[1].day.mintemp_f,c[2].date=t.forecast.forecastday[2].date,c[2].dayTC=t.forecast.forecastday[2].day.maxtemp_c,c[2].dayTF=t.forecast.forecastday[2].day.maxtemp_f,c[2].nightTC=t.forecast.forecastday[2].day.mintemp_c,c[2].nightTF=t.forecast.forecastday[2].day.mintemp_f,console.log(c)}}}()})();