
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './CityWeather.css';

const API_KEY = '658eca185a3a4861b54184514242006';

const CityWeather = ({ cityName, removeCity }) => {
    const [weather, setWeather] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchWeather = async () => {
            try {
                const response = await axios.get(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${cityName}`);
                setWeather(response.data);
            } catch (error) {
                setError('Error fetching the weather data');
            }
        };

        fetchWeather();
    }, [cityName]);

    if (error) {
        return <div className="city-weather">{error}</div>;
    }

    if (!weather) {
        return <div className="city-weather">Loading...</div>;
    }

    return (
        <div className="city-weather">
            <Link to={`/city/${cityName}`}>
                <h3>{cityName}</h3>
            </Link>
            <p>Temperature: {weather.current.temp_c}°C</p>
            <p>Condition: {weather.current.condition.text}</p>
            <button onClick={removeCity}>Удалить</button>
        </div>
    );
};

export default CityWeather;
