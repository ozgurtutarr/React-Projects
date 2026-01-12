import { useState, useEffect } from 'react';
import './WeatherApp.css';

const WeatherApp = () => {
  const [city, setCity] = useState('London');
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Mock API Call
  // In a real app, you would fetch from OpenWeatherMap etc.
  // api.openweathermap.org/data/2.5/weather?q={city}&appid={API_KEY}
  const fetchWeather = async (cityName) => {
    setLoading(true);
    setError(null);
    setWeatherData(null);

    // Simulating network delay
    setTimeout(() => {
      // Simple mock data database
      const mockDB = {
        london: { temp: 15, condition: 'Cloudy', humidity: 82, wind: 5 },
        'new york': { temp: 22, condition: 'Sunny', humidity: 45, wind: 12 },
        tokyo: { temp: 28, condition: 'Rainy', humidity: 90, wind: 8 },
        paris: { temp: 18, condition: 'Partly Cloudy', humidity: 60, wind: 6 },
        istanbul: { temp: 25, condition: 'Clear', humidity: 50, wind: 15 },
      };

      const normalizedCity = cityName.toLowerCase();

      if (mockDB[normalizedCity]) {
        setWeatherData({
          city: cityName,
          ...mockDB[normalizedCity],
        });
      } else {
        setError(
          'City not found (Mock Data: try London, New York, Tokyo, Paris, Istanbul)'
        );
      }
      setLoading(false);
    }, 1000);
  };

  useEffect(() => {
    fetchWeather(city);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (city.trim()) {
      fetchWeather(city);
    }
  };

  const getIcon = (condition) => {
    switch (condition) {
      case 'Sunny':
        return '☀️';
      case 'Cloudy':
        return '☁️';
      case 'Rainy':
        return '🌧️';
      case 'Partly Cloudy':
        return '⛅';
      case 'Clear':
        return '☀️';
      default:
        return '🌈';
    }
  };

  return (
    <div className="weather-container">
      <h2>Weather App</h2>
      <form onSubmit={handleSearch} className="weather-search">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city..."
        />
        <button type="submit">Search</button>
      </form>

      {loading && <div className="loading">Loading...</div>}
      {error && <div className="error">{error}</div>}

      {weatherData && !loading && (
        <div className="weather-card">
          <h3>{weatherData.city}</h3>
          <div className="weather-icon">{getIcon(weatherData.condition)}</div>
          <div className="temperature">{weatherData.temp}°C</div>
          <div className="condition">{weatherData.condition}</div>
          <div className="details">
            <div className="detail-item">
              <span>Humidity</span>
              <span>{weatherData.humidity}%</span>
            </div>
            <div className="detail-item">
              <span>Wind</span>
              <span>{weatherData.wind} km/h</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WeatherApp;
