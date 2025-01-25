import "./style.css";
import {
  fetchWeatherData,
  fetchWeatherGif,
  processWeatherData,
} from "./weather";

const searchForm = document.getElementById("search-form");
const locationInput = document.getElementById("location-input");
const weatherContainer = document.getElementById("weather-container");

// Show loading spinner
function showLoadingSpinner() {
  weatherContainer.innerHTML = `
    <div class="spinner"></div>
  `;
}

// Display weather data and GIF
function displayWeather(data, gifUrl) {
  weatherContainer.innerHTML = `
    <div class="weather-card">
      <h2>${data.location}</h2>
      <p>${data.condition} - ${data.temperature}°${data.unit}</p>
      <p>Feels like: ${data.feelsLike}°${data.unit}</p>
      <img src="${gifUrl}" alt="${data.condition}" class="weather-gif">
    </div>
  `;
}

// Event listener for the form
searchForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const location = locationInput.value.trim();
  if (!location) return;

  // Show loading spinner
  showLoadingSpinner();

  try {
    // Fetch weather data
    const weatherData = await fetchWeatherData(location);
    const processedData = processWeatherData(weatherData);

    // Fetch GIF based on the weather condition
    const gifUrl = await fetchWeatherGif(processedData.condition);

    // Display weather and GIF
    displayWeather(processedData, gifUrl);
  } catch (error) {
    // Handle errors
    weatherContainer.innerHTML = `<p>Error: ${error.message}</p>`;
  }
});
