(()=>{"use strict";const t=function(t,e){let o=document.querySelector(".todayForecastWrapper");o.querySelector("#cityName").textContent=t.city+", ",o.querySelector("#country").textContent=t.country,o.querySelector("#todaysDate").textContent=t.localtime,o.querySelector("#conditionText").textContent=t.condition;let c=o.querySelector(".icon");!async function(t){try{let e="https:"+t,o=await fetch(e,{mode:"cors"});c.style.backgroundImage=`url(${o.url})`,c.style.backgroundRepeat="no-repeat",c.style.backgroundSize="cover"}catch(t){console.error("Произошла ошибка:",t)}}(t.icon),o.querySelector("#humidity").textContent="Humidity: "+t.humidity+" %",o.querySelector("#windKPH").textContent="Wind: "+t.windKPH+" kph";let a=o.querySelector("#cloudness"),n="";0==t.cloud?n="Clear":0<t.cloud&&t.cloud<26?n="Little cloudy":24<t.cloud&&t.cloud<51?n="Partly cloudy":50<t.cloud&&t.cloud<85?n="Cloudy":84<t.cloud&&(n="Mainly cloudy"),a.textContent="Cloudness: "+n;let r=o.querySelector("#todaysTemperature");"F"===e?r.textContent=t.tempF+" "+e:"C"===e&&(r.textContent=t.tempC+" "+e)},e=function(t,e){let o=document.querySelector(".futureForecastWrapper"),c=async function(t,e){try{let o="https:"+t,c=await fetch(o,{mode:"cors"});e.style.backgroundImage=`url(${c.url})`,e.style.backgroundRepeat="no-repeat",e.style.backgroundSize="cover"}catch(t){console.error("Произошла ошибка:",t)}},a=o.querySelector(".day0Wrapper");a.querySelector(".date").textContent=t[0].date;let n=a.querySelector("#day0temp"),r=a.querySelector("#night0temp");"C"===e?(n.textContent=t[0].dayTC+" "+e,r.textContent=t[0].nightTC+" "+e):(n.textContent=t[0].dayTF+" "+e,r.textContent=t[0].nightTF+" "+e);let d=a.querySelector(".icon");c(t[0].icon,d);let y=o.querySelector(".day1Wrapper");y.querySelector(".date").textContent=t[1].date;let i=y.querySelector("#day1temp"),l=y.querySelector("#night1temp");"C"===e?(i.textContent=t[1].dayTC+" "+e,l.textContent=t[1].nightTC+" "+e):(i.textContent=t[1].dayTF+" "+e,l.textContent=t[1].nightTF+" "+e);let u=y.querySelector(".icon");c(t[1].icon,u);let s=o.querySelector(".day2Wrapper");s.querySelector(".date").textContent=t[2].date;let m=s.querySelector("#day2temp"),f=s.querySelector("#night2temp");"C"===e?(m.textContent=t[2].dayTC+" "+e,f.textContent=t[2].nightTC+" "+e):(m.textContent=t[2].dayTF+" "+e,f.textContent=t[2].nightTF+" "+e);let p=s.querySelector(".icon");c(t[2].icon,p)};!function(){let o=document.getElementById("citySearch"),c=o.querySelector("#cityInput");o.addEventListener("submit",(function(t){t.preventDefault(),d(c.value),y(c.value)}));let a={},n=[{},{},{}],r="F",d=async function(e){try{let o="https://api.weatherapi.com/v1/current.json?key=d1daec9ddc01455f82a220024232608&q="+e,c=await fetch(o,{mode:"cors"}),n=await c.json();i.collectTodaysWeather(n),t(a,r)}catch(t){console.error("Произошла ошибка:",t)}},y=async function(t){try{let o="http://api.weatherapi.com/v1/forecast.json?key=d1daec9ddc01455f82a220024232608&q="+t+"&days=3&aqi=no&alerts=no",c=await fetch(o,{mode:"cors"}),a=await c.json();i.collectThreeDayForecast(a),e(n,r)}catch(t){console.error("Произошла ошибка:",t)}},i={collectTodaysWeather(t){a.city=t.location.name,a.country=t.location.country,a.localtime=t.location.localtime,a.condition=t.current.condition.text,a.humidity=t.current.humidity,a.tempC=t.current.temp_c,a.tempF=t.current.temp_f,a.windKPH=t.current.wind_kph,a.cloud=t.current.cloud,a.icon=t.current.condition.icon},collectThreeDayForecast(t){n[0].date=t.forecast.forecastday[0].date,n[0].dayTC=t.forecast.forecastday[0].day.maxtemp_c,n[0].dayTF=t.forecast.forecastday[0].day.maxtemp_f,n[0].nightTC=t.forecast.forecastday[0].day.mintemp_c,n[0].nightTF=t.forecast.forecastday[0].day.mintemp_f,n[0].icon=t.forecast.forecastday[0].day.condition.icon,n[1].date=t.forecast.forecastday[1].date,n[1].dayTC=t.forecast.forecastday[1].day.maxtemp_c,n[1].dayTF=t.forecast.forecastday[1].day.maxtemp_f,n[1].nightTC=t.forecast.forecastday[1].day.mintemp_c,n[1].nightTF=t.forecast.forecastday[1].day.mintemp_f,n[1].icon=t.forecast.forecastday[1].day.condition.icon,n[2].date=t.forecast.forecastday[2].date,n[2].dayTC=t.forecast.forecastday[2].day.maxtemp_c,n[2].dayTF=t.forecast.forecastday[2].day.maxtemp_f,n[2].nightTC=t.forecast.forecastday[2].day.mintemp_c,n[2].nightTF=t.forecast.forecastday[2].day.mintemp_f,n[2].icon=t.forecast.forecastday[2].day.condition.icon}};document.getElementById("changeTempUnit").addEventListener("click",(function(){"F"==r?r="C":"C"==r&&(r="F"),t(a,r),e(n,r)}))}()})();
//# sourceMappingURL=main.js.map