// Optionally embed your API key here to avoid entering it in the UI.
// WARNING: Hardcoding secrets in client-side code exposes them to anyone who opens the app.
// Only do this for quick testing. For production, use a server-side proxy.
const API_KEY = '02f45eaf31d6c6807e15eb904a8e4c90';

async function getWeather() {
    const city = document.getElementById("cityInput").value.trim();
    const apiKey = (typeof API_KEY === 'string' && API_KEY.length > 0) ? API_KEY : (document.getElementById("apiKeyInput") || {}).value?.trim();
    if (!apiKey) {
        alert('Please provide your OpenWeatherMap API key.');
        return;
    }
    if (!city) {
        alert('Please enter a city name.');
        return;
    }

    const currentDiv = document.getElementById("currentWeather");
    const forecastDiv = document.getElementById("forecast");
    currentDiv.innerHTML = '<div class="loader" aria-hidden="true"></div>';
    forecastDiv.innerHTML = '';

    const weatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${encodeURIComponent(apiKey)}&units=metric`;
    const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?q=${encodeURIComponent(city)}&appid=${encodeURIComponent(apiKey)}&units=metric`;

    try {
        const [weatherRes, forecastRes] = await Promise.all([
            fetch(weatherURL),
            fetch(forecastURL)
        ]);

        const weatherData = await weatherRes.json();
        const forecastData = await forecastRes.json();

        if (weatherData.cod != 200) {
            currentDiv.innerHTML = `<p class="note">${weatherData.message || 'Unable to get weather.'}</p>`;
            return;
        }

        displayCurrentWeather(weatherData);
        displayForecast(forecastData);

    } catch (err) {
        console.error(err);
        currentDiv.innerHTML = '<p class="note">Error fetching weather data.</p>';
    }
}

function displayCurrentWeather(data) {
    const currentDiv = document.getElementById("currentWeather");
    currentDiv.innerHTML = `
        <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="weather">
        <div class="current-info">
          <h2>${data.name}, ${data.sys.country}</h2>
          <p class="temp">${Math.round(data.main.temp)}°C</p>
          <p>${data.weather[0].description} • Humidity ${data.main.humidity}%</p>
          <p class="note">Feels like ${data.main.feels_like}°C • Wind ${data.wind.speed} m/s</p>
        </div>
    `;
}

function displayForecast(data) {
    const forecastDiv = document.getElementById("forecast");
    forecastDiv.innerHTML = "";
    const daily = data.list.filter(item => item.dt_txt.includes("12:00:00"));
    daily.forEach(day => {
        const card = document.createElement("div");
        card.className = "forecast-card";
        card.innerHTML = `
            <h3>${new Date(day.dt_txt).toLocaleDateString(undefined,{weekday:'short',month:'short',day:'numeric'})}</h3>
            <img src="https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png" alt="icon">
            <p style="margin:6px 0">${day.weather[0].description}</p>
            <p>Temp: ${Math.round(day.main.temp)}°C</p>
            <p class="note">Humidity: ${day.main.humidity}%</p>
        `;
        forecastDiv.appendChild(card);
    });
}

window.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('searchBtn');
    if (btn) btn.addEventListener('click', getWeather);
    const cityInput = document.getElementById('cityInput');
    if (cityInput) cityInput.addEventListener('keydown', (e) => { if (e.key === 'Enter') { e.preventDefault(); getWeather(); } });
});
