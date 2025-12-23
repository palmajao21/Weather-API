# Weather App using OpenWeatherMap API

## 📌 Description
This project is a simple web-based Weather Application that retrieves real-time weather data using the OpenWeatherMap API. The user enters a city name, and the application displays the current temperature, weather condition, humidity, and wind speed.

This project is suitable for BSIT students and beginners learning API integration using JavaScript.

---

## 🛠 Technologies Used
- HTML
- CSS
- JavaScript
- OpenWeatherMap API

---

## 🔑 How to Get an API Key
1. Go to https://openweathermap.org/
2. Create a free account
3. Navigate to **API Keys**
4. Copy your API key
5. Paste it inside `script.js`

# Weather API Web App

## Project Overview
The Weather API Web App enables users to look up cities around the world and view real-time weather information, including current conditions and a five-day forecast. It retrieves live data from the OpenWeatherMap API and presents the results in a clean, responsive card-based interface.

This project was created by Ronnet using HTML, CSS, and JavaScript.

## Features
- Search for the weather of any city.
- Display current weather:
  - Temperature in Celsius
  - Humidity percentage
  - Weather description
  - Weather icon
- Display 5-day forecast at 12:00 PM each day.
- Simple, colorful, and responsive card layout.

## Technologies Used
- HTML5 – Structure of the web page
- CSS3 – Styling and layout design
- JavaScript (ES6) – API fetch requests and DOM manipulation
- OpenWeatherMap API – Provides weather data

## How It Works
1. User enters a city name in the search bar.
2. The app sends a request to the OpenWeatherMap API for:
	- Current weather data
	- 5-day forecast data
3. The app parses the API response and displays:
	- Current weather in a card with an icon, temperature, humidity, and description
	- Forecast for the next 5 days in separate cards

## Getting Started (Windows)

### Prerequisites
- A modern web browser (Chrome, Firefox, Edge)
- Internet connection
- OpenWeatherMap API key (you can add it to `script.js` or enter it in the app UI)

### steps
1.Clone or download the repository.
2.Ensure the following files are in the same folder:
-index.html
-style.css
-script.js
4.Open index.html in a web browser.
5.Enter a city name and click Search.
6.View the current weather and 5-day forecast.

### Run locally (recommended)
Using a local static server avoids browser restrictions when fetching remote APIs.

http://localhost:8000



```javascript
const API_KEY = 'YOUR_OPENWEATHERMAP_KEY_HERE';
```

Warning: hardcoding the key in client-side code exposes it to anyone who can access the files or the hosted page. Use only for testing.

Option B — Enter the key in the app UI at runtime (recommended for local testing).

### Troubleshooting
- Invalid API key: verify the key in your OpenWeatherMap account and remove leading/trailing spaces.
- API not returning data: check that your machine has internet access and there are no firewall blocks.
- CORS or fetch errors when opening `index.html` directly: run a local server.


## API Information
**API Provider:** OpenWeatherMap

**Endpoints Used:**
- Current Weather: https://api.openweathermap.org/data/2.5/weather
- 5-Day Forecast: https://api.openweathermap.org/data/2.5/forecast

**Parameters:**
- `q` – City name
- `appid` – API key
- `units` – Metric system (°C)

## Author
Jonathan

## License
This project is open-source and free to use.
