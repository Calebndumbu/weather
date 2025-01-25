const WEATHER_API_KEY = "ZNNHYRLSNQHKZVQZ2H6PQESMW";
const GIPHY_API_KEY = "tMki8RcwS6sDYdetdrUgb6lILHtWnkKP";
// Fetch weather data
export async function fetchWeatherData(location) {
  const response = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&key=${WEATHER_API_KEY}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch weather data.");
  }

  return response.json();
}

// Fetch GIF based on weather condition
export async function fetchWeatherGif(condition) {
  const response = await fetch(
    `https://api.giphy.com/v1/gifs/translate?api_key=${GIPHY_API_KEY}&s=${condition}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch GIF.");
  }

  const data = await response.json();
  return data.data.images.original.url;
}

// Process weather data
export function processWeatherData(data) {
  return {
    location: data.resolvedAddress,
    condition: data.currentConditions.conditions,
    temperature: data.currentConditions.temp,
    feelsLike: data.currentConditions.feelslike,
    unit: "C", // Celsius
  };
}
