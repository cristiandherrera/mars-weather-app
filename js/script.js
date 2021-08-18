const weatherButton = document.querySelector(".show-previous-weather-button");
const previousWeather = document.querySelector(".previous-weather");

const animation = weatherButton.addEventListener("click", () => {
  previousWeather.classList.toggle("show-weather");
});
