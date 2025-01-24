/******/ (() => { // webpackBootstrap
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZGQUE2RixTQUFTLG9CQUFvQixPQUFPO0FBQ2pJO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLGlCQUFpQjtBQUMzQjtBQUNBO0FBQ0EsS0FBSztBQUNMLFNBQVMsb0JBQW9CO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVELFlBQVksS0FBSyxNQUFNO0FBQzlFLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsT0FBTyxTQUFTLE9BQU87QUFDbEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBhcGlLZXkgPSBcIlpOTkhZUkxTTlFIS1pWUVoySDZQUUVTTVdcIjtcclxuY29uc3QgZ2lmQXBpID0gXCJ0TWtpOFJjd1M2c0RZZGV0ZHJVZ2I2bElMSHRXbmtLUFwiO1xyXG5jb25zdCB3ZWF0aGVyRGlzcGxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid2VhdGhlckRpc3BsYXlcIik7XHJcbmNvbnN0IGxvYWRpbmdJbmRpY2F0b3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvYWRpbmdcIik7XHJcbmNvbnN0IHRvZ2dsZUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9nZ2xlVW5pdFwiKTtcclxubGV0IGN1cnJlbnREYXRhID0gbnVsbDtcclxubGV0IGlzRmFocmVuaGVpdCA9IHRydWU7XHJcblxyXG5hc3luYyBmdW5jdGlvbiBmZXRjaFdlYXRoZXIobG9jYXRpb24pIHtcclxuICB0cnkge1xyXG4gICAgbG9hZGluZ0luZGljYXRvci5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgd2VhdGhlckRpc3BsYXkuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXHJcbiAgICAgIGBodHRwczovL3dlYXRoZXIudmlzdWFsY3Jvc3NpbmcuY29tL1Zpc3VhbENyb3NzaW5nV2ViU2VydmljZXMvcmVzdC9zZXJ2aWNlcy90aW1lbGluZS8ke2xvY2F0aW9ufT91bml0R3JvdXA9dXMma2V5PSR7YXBpS2V5fWBcclxuICAgICk7XHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgY3VycmVudERhdGEgPSBwcm9jZXNzV2VhdGhlckRhdGEoZGF0YSk7XHJcbiAgICBkaXNwbGF5V2VhdGhlcihjdXJyZW50RGF0YSk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHdlYXRoZXJEaXNwbGF5LmlubmVySFRNTCA9XHJcbiAgICAgIFwiPHA+RXJyb3IgZmV0Y2hpbmcgd2VhdGhlciBkYXRhLiBQbGVhc2UgdHJ5IGFnYWluLjwvcD5cIjtcclxuICB9IGZpbmFsbHkge1xyXG4gICAgbG9hZGluZ0luZGljYXRvci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBwcm9jZXNzV2VhdGhlckRhdGEoZGF0YSkge1xyXG4gIHJldHVybiB7XHJcbiAgICBsb2NhdGlvbjogZGF0YS5yZXNvbHZlZEFkZHJlc3MsXHJcbiAgICB0ZW1wRjogZGF0YS5jdXJyZW50Q29uZGl0aW9ucy50ZW1wLFxyXG4gICAgdGVtcEM6ICgoZGF0YS5jdXJyZW50Q29uZGl0aW9ucy50ZW1wIC0gMzIpICogNSkgLyA5LFxyXG4gICAgZGVzY3JpcHRpb246IGRhdGEuY3VycmVudENvbmRpdGlvbnMuY29uZGl0aW9ucyxcclxuICAgIGljb246IGRhdGEuY3VycmVudENvbmRpdGlvbnMuaWNvbixcclxuICB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBkaXNwbGF5V2VhdGhlcih3ZWF0aGVyKSB7XHJcbiAgd2VhdGhlckRpc3BsYXkuaW5uZXJIVE1MID0gYFxyXG4gICAgPGgyPiR7d2VhdGhlci5sb2NhdGlvbn08L2gyPlxyXG4gICAgPHA+JHtcclxuICAgICAgaXNGYWhyZW5oZWl0ID8gd2VhdGhlci50ZW1wRiArIFwiwrBGXCIgOiB3ZWF0aGVyLnRlbXBDLnRvRml4ZWQoMSkgKyBcIsKwQ1wiXHJcbiAgICB9PC9wPlxyXG4gICAgPHA+JHt3ZWF0aGVyLmRlc2NyaXB0aW9ufTwvcD5cclxuICBgO1xyXG4gIHRvZ2dsZUJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZENvbG9yID1cclxuICAgIHdlYXRoZXIudGVtcEYgPiA3NSA/IFwib3JhbmdlXCIgOiBcImxpZ2h0Ymx1ZVwiO1xyXG59XHJcblxyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvY2F0aW9uRm9ybVwiKS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChlKSA9PiB7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIGNvbnN0IGxvY2F0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2NhdGlvbklucHV0XCIpLnZhbHVlLnRyaW0oKTtcclxuICBpZiAobG9jYXRpb24pIGZldGNoV2VhdGhlcihsb2NhdGlvbik7XHJcbn0pO1xyXG5cclxuLy90b2dnbGUgYmV0d2VlbiBGYWhyZW5oZWl0IGFuZCBDZWxzaXVzXHJcblxyXG50b2dnbGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICBpc0ZhaHJlbmhlaXQgPSAhaXNGYWhyZW5oZWl0O1xyXG4gIGRpc3BsYXlXZWF0aGVyKGN1cnJlbnREYXRhKTtcclxuICB0b2dnbGVCdXR0b24udGV4dENvbnRlbnQgPSBpc0ZhaHJlbmhlaXQgPyBcIlN3aXRjaCB0byDCsENcIiA6IFwiU3dpdGNoIHRvIMKwRlwiO1xyXG59KTtcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGZldGNoR2lmKHF1ZXJ5KSB7XHJcbiAgY29uc3QgZ2lwaHlBcGlLZXkgPSBcIllPVVJfR0lQSFlfQVBJX0tFWVwiO1xyXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXHJcbiAgICBgaHR0cHM6Ly9hcGkuZ2lwaHkuY29tL3YxL2dpZnMvdHJhbnNsYXRlP2FwaV9rZXk9JHtnaXBoeUFwaUtleX0mcz0ke3F1ZXJ5fWAsXHJcbiAgICB7IG1vZGU6IFwiY29yc1wiIH1cclxuICApO1xyXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgY29uc3QgZ2lmVXJsID0gZGF0YS5kYXRhLmltYWdlcy5vcmlnaW5hbC51cmw7XHJcbiAgd2VhdGhlckRpc3BsYXkuaW5uZXJIVE1MICs9IGA8aW1nIHNyYz1cIiR7Z2lmVXJsfVwiIGFsdD1cIiR7cXVlcnl9IGdpZlwiPmA7XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9