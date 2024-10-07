const apiKey = "106fe02eb7b0476a8b766e817fb11fc5"; // Replace with your OpenWeatherMap API key
const cityInput = document.getElementById("city-input");
const getWeatherButton = document.getElementById("get-weather");
const weatherInfo = document.getElementById("weather-info");
const body = document.body; // Reference to the body for background changes

getWeatherButton.addEventListener("click", () => {
  const city = cityInput.value.trim();
  if (city) {
    getWeather(city);
  } else {
    showError("Please enter a city name.");
  }
});

async function getWeather(city) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );

    if (!response.ok) {
      throw new Error("City not found");
    }

    const data = await response.json();
    displayWeather(data);
  } catch (error) {
    showError(error.message);
  }
}

function displayWeather(data) {
  const { name, main, weather } = data;
  const temperatureC = main.temp;
  const temperatureF = (temperatureC * 9) / 5 + 32; // Convert to Fahrenheit
  const description = weather[0].description;
  const icon = weather[0].icon;

  // Change background based on weather condition
  body.className = ""; // Clear existing classes
  if (description.includes("clear")) {
    body.classList.add("sunny");
  } else if (description.includes("cloud")) {
    body.classList.add("cloudy");
  } else if (description.includes("rain")) {
    body.classList.add("rainy");
  }

  weatherInfo.innerHTML = `
        <h2>${name}</h2>
        <p>Temperature: ${temperatureC} °C (${temperatureF.toFixed(1)} °F)</p>
        <p>Condition: ${
          description.charAt(0).toUpperCase() + description.slice(1)
        }</p>
        <img class="weather-icon" src="http://openweathermap.org/img/wn/${icon}@2x.png" alt="${description}" />
    `;
}

function showError(message) {
  weatherInfo.innerHTML = `<p class="error">${message}</p>`;
}
