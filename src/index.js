const apiKey = "ZNNHYRLSNQHKZVQZ2H6PQESMW";
const gifApi = "tMki8RcwS6sDYdetdrUgb6lILHtWnkKP";
const weatherDisplay = document.getElementById("weatherDisplay");
const loadingIndicator = document.getElementById("loading");
const toggleButton = document.getElementById("toggleUnit");
let currentData = null;
let isFahrenheit = true;

async function fetchWeather(location) {
  try {
    loadingIndicator.style.display = "block";
    weatherDisplay.innerHTML = "";
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=us&key=${apiKey}`
    );
    const data = await response.json();
    currentData = processWeatherData(data);
    displayWeather(currentData);
  } catch (error) {
    weatherDisplay.innerHTML =
      "<p>Error fetching weather data. Please try again.</p>";
  } finally {
    loadingIndicator.style.display = "none";
  }
}

function processWeatherData(data) {
  return {
    location: data.resolvedAddress,
    tempF: data.currentConditions.temp,
    tempC: ((data.currentConditions.temp - 32) * 5) / 9,
    description: data.currentConditions.conditions,
    icon: data.currentConditions.icon,
  };
}

function displayWeather(weather) {
  weatherDisplay.innerHTML = `
    <h2>${weather.location}</h2>
    <p>${
      isFahrenheit ? weather.tempF + "°F" : weather.tempC.toFixed(1) + "°C"
    }</p>
    <p>${weather.description}</p>
  `;
  toggleButton.style.display = "block";
  document.body.style.backgroundColor =
    weather.tempF > 75 ? "orange" : "lightblue";
}

document.getElementById("locationForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const location = document.getElementById("locationInput").value.trim();
  if (location) fetchWeather(location);
});

//toggle between Fahrenheit and Celsius

toggleButton.addEventListener("click", () => {
  isFahrenheit = !isFahrenheit;
  displayWeather(currentData);
  toggleButton.textContent = isFahrenheit ? "Switch to °C" : "Switch to °F";
});

async function fetchGif(query) {
  const giphyApiKey = "YOUR_GIPHY_API_KEY";
  const response = await fetch(
    `https://api.giphy.com/v1/gifs/translate?api_key=${giphyApiKey}&s=${query}`,
    { mode: "cors" }
  );
  const data = await response.json();
  const gifUrl = data.data.images.original.url;
  weatherDisplay.innerHTML += `<img src="${gifUrl}" alt="${query} gif">`;
}
