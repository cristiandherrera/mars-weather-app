const API_KEY = "DEMO KEY";
const API_URL = `pi.nasa.gov/insight_weather/?api_key=${API_KEY}&feedtype=json&ver=1.0`;

const weatherButton = document.querySelector(".show-previous-weather-button");
const previousWeather = document.querySelector(".previous-weather");

const animation = weatherButton.addEventListener("click", () => {
  previousWeather.classList.toggle("show-weather");
});
