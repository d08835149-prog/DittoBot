const axios = require("axios");

module.exports = (app) => {
  app.command("/dittobot-weather", async ({ command, ack, respond }) => {
    await ack();

    const city = command.text.trim();

    if (!city) {
      await respond({
        text:
          "🌤 Please enter a city.\n" +
          "Example: /dittobot-weather Toronto"
      });
      return;
    }

    try {
      // 1. Convert city name to coordinates
      const geoResponse = await axios.get(
        "https://geocoding-api.open-meteo.com/v1/search",
        {
          params: {
            name: city,
            count: 1,
            language: "en",
            format: "json"
          }
        }
      );

      const location = geoResponse.data.results?.[0];

      if (!location) {
        await respond({
          text: `🌤 I couldn't find "${city}".`
        });
        return;
      }

      // 2. Get current weather
      const weatherResponse = await axios.get(
        "https://api.open-meteo.com/v1/forecast",
        {
          params: {
            latitude: location.latitude,
            longitude: location.longitude,
            current:
              "temperature_2m,apparent_temperature,relative_humidity_2m,wind_speed_10m,weather_code",
            timezone: "auto"
          }
        }
      );

      const weather = weatherResponse.data.current;

      const weatherDescriptions = {
        0: "Clear sky",
        1: "Mainly clear",
        2: "Partly cloudy",
        3: "Overcast",
        45: "Fog",
        48: "Fog",
        51: "Light drizzle",
        53: "Drizzle",
        55: "Heavy drizzle",
        61: "Light rain",
        63: "Rain",
        65: "Heavy rain",
        71: "Light snow",
        73: "Snow",
        75: "Heavy snow",
        80: "Rain showers",
        81: "Rain showers",
        82: "Heavy rain showers",
        95: "Thunderstorm"
      };

      const condition =
        weatherDescriptions[weather.weather_code] || "Unknown";

      await respond({
        text:
`🌤 *Weather for ${location.name}, ${location.country}*

Condition: ${condition}
Temperature: ${weather.temperature_2m}°C
Feels like: ${weather.apparent_temperature}°C
Humidity: ${weather.relative_humidity_2m}%
Wind: ${weather.wind_speed_10m} km/h`
      });
    } catch (error) {
      console.error(error);

      await respond({
        text: "🌤 Failed to fetch weather information."
      });
    }
  });
};