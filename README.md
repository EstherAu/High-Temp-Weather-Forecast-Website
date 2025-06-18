# Japan High-Temp Weather Forecast Website

This project provides a web-based temperatures monitoring and forecast website focused on Japan. It displays current temperatures, maximum temperatures, and provides a six-day weather forecast for selected cities.

## Features

- **Real-time Weather Data:** Displays current and maximum temperatures for various cities in Japan.
- **Location-based Weather Display:** Automatically fetches and displays weather data for the user's current location.
- **6-Day Weather Forecast:** Provides a six-day weather forecast for selected cities.
- **Interactive Map:** An interactive map that shows temperature data visually with color-coded markers.
- **City Selection:** Allows users to select a city from a dropdown to view its weather forecast on the forecast page.

## Technologies Used

- **HTML/CSS:** For the structure and styling of the web pages.
- **JavaScript:** For fetching data from APIs, processing it, and updating the web page dynamically.
- **Leaflet.js:** For the interactive map display.
- **OpenWeatherMap API:** For fetching weather data.

## Installation and Setup

 **1.Clone the repository:**

git clone https://github.com/EstherAu/High-Temp-Weather-Forecast-Website.git
cd High-Temp-Weather-Forecast-Website

 **2. Open the project:**

Open the index.html file in a web browser to view the website.

**Usage**

- View Current and Maximum Temperatures:
- The main page displays a map with temperature markers.
- A table lists the current and maximum temperatures for selected cities.
- Click on the circular temperature markers to view the current and maximum temperatures for the clicked city.
- View Six-Day Temperature Forecast:
- Use the dropdown menu in the top right corner of the subpage to select a city and view its six-day temperature forecast.

**Configuration**

 1. **API Keys:**
- Obtain your API keys from OpenWeatherMap and IPInfo.
- Replace the placeholder API keys in the forecast.js file with your actual API keys.

     const apiKey = 'your_openweathermap_api_key';
   fetch('https://ipinfo.io/json?token=your_ipinfo_token')


**Contributing**

- Feel free to submit issues, fork the repository and send pull requests. For major changes, please open an issue first to discuss what you would like to change.

**License**

- This project is licensed under the MIT License.







