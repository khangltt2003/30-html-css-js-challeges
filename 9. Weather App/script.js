import apiKey from "./apikey.js";
const input = document.querySelector("input");
const searchButton = document.querySelector(".search-box i");
const place = document.querySelector(".location");
const time = document.querySelector(".time");
const temperature = document.querySelector(".temperature");
const weather = document.querySelector(".weather");
const vision = document.querySelector(".vision p");
const humidty = document.querySelector(".humidity p");
const windSpeed = document.querySelector(".wind-speed p");

input.focus();

async function renderUI(city) {
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  const data = await fetch(URL).then((res) => res.json());
  console.log(data);
  if (data.cod !== "404") {
    place.innerText = data.name;
    setInterval(() => {
      time.innerText = new Date().toLocaleString();
    }, 1000);
    temperature.innerText = data.main.temp + " °C";
    weather.innerText = data.weather[0].main;
    vision.innerText = data.visibility + " m";
    humidty.innerText = data.main.humidity + "km/h";
    windSpeed.innerText = data.wind.speed + "%";
    document.querySelector(".container").classList.add("show");
  }
  input.value = "";
  input.focus();
}

searchButton.addEventListener("click", () => {
  renderUI(input.value);
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    renderUI(input.value);
  }
});
