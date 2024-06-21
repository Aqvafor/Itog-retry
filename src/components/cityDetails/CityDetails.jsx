import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./CityDetails.css";

const API_KEY = "658eca185a3a4861b54184514242006"; // Убедитесь, что здесь правильный ключ API

const CityDetails = () => {
  const { cityId } = useParams();
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await axios.get(
          `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${cityId}&days=7`
        );
        setWeatherData(response.data);
      } catch (error) {
        setError("Error fetching the weather data");
      }
    };

    fetchWeatherData();
  }, [cityId]);

  if (error) {
    return <div>{error}</div>;
  }

  if (!weatherData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="city-details">
      <h1>Weather in {weatherData.location.name}</h1>
      <img
        src={`https:${weatherData.current.condition.icon}`}
        alt={weatherData.current.condition.text}
      />
      <p>Temperature: {weatherData.current.temp_c}°C</p>
      <p>Condition: {weatherData.current.condition.text}</p>
      <h2>Forecast for the next 7 days</h2>
      <div className="forecast">
        {weatherData.forecast.forecastday.map((day) => (
          <div key={day.date} className="forecast-day">
            <h3>{day.date}</h3>
            <img
              src={`https:${day.day.condition.icon}`}
              alt={day.day.condition.text}
            />
            <p>Max Temp: {day.day.maxtemp_c}°C</p>
            <p>Min Temp: {day.day.mintemp_c}°C</p>
            <p>Condition: {day.day.condition.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CityDetails;
