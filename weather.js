const apiKey = "01fc593938de8f3c3c67a8793d7590da";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  const data = await response.json();

  console.log(data);

  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".team").innerHTML =
    Math.round(data.main.temp) + "°c"; // Use data.main.temp for temperature
  document.querySelector(".humidity").innerHTML =
    data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

  // const weatherIcon = document.querySelector(".weather-icon");
  if (data.weather[0].main == "Clouds") {
    weatherIcon.className = "fa-solid weather-icon logo fa-cloud";
  } else if (data.weather[0].main == "Clear") {
    weatherIcon.className = "fa-solid weather-icon logo fa-sun";
  } else if (data.weather[0].main == "Rain") {
    weatherIcon.className = "fa-solid weather-icon logo fa-cloud-rain";
  } else if (data.weather[0].main == "Drizzle") {
    weatherIcon.className = "fa-solid weather-icon logo fa-cloud-drizzle";
  } else if (data.weather[0].main == "Mist") {
    weatherIcon.className = "fa-solid weather-icon logo fa-cloud-fog";
  }

  document.querySelector(".weather").style.display = "black";
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});