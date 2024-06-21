// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';
// import Header from '../header/Header';
// import Footer from '../footer/Footer';
// import './CityDetails.css';

// const API_KEY = 'YOUR_API_KEY';
// const CITY_IMAGES = {
//     524901: 'moscow.jpg',
//     498817: 'spb.jpg',
//     551487: 'kazan.jpg',
//     1486209: 'yekaterinburg.jpg',
//     1496747: 'novosibirsk.jpg',
//     491422: 'sochi.jpg'
// };

// const CityDetails = () => {
//     const { cityId } = useParams();
//     const [weather, setWeather] = useState(null);

//     useEffect(() => {
//         const fetchWeather = async () => {
//             try {
//                 const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?id=${cityId}&units=metric&appid=${API_KEY}`);
//                 setWeather(response.data);
//             } catch (error) {
//                 console.error('Error fetching the weather data', error);
//             }
//         };

//         fetchWeather();
//     }, [cityId]);

//     if (!weather) return <div>Loading...</div>;

//     return (
//         <div>
//             <Header />
//             <div className="city-details">
//                 <h2>{weather.city.name}</h2>
//                 <img src={`/img/${CITY_IMAGES[cityId]}`} alt={weather.city.name} className="city-image" />
//                 <h3>Weather Forecast:</h3>
//                 <div className="forecast">
//                     {weather.list.slice(0, 7).map((forecast, index) => (
//                         <div key={index} className="forecast-item">
//                             <p>Date: {forecast.dt_txt}</p>
//                             <p>Temperature: {forecast.main.temp}°C</p>
//                             <p>Weather: {forecast.weather[0].description}</p>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//             <Footer />
//         </div>
//     );
// };

// export default CityDetails;



// // src/components/cityDetails/CityDetails.jsx
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './CityDetails.css';
// import { useParams } from 'react-router-dom';

// const API_KEY = '658eca185a3a4861b54184514242006'; // Замените на ваш действительный API ключ

// const CityDetails = () => {
//     const { cityName } = useParams();
//     const [weather, setWeather] = useState(null);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         const fetchWeather = async () => {
//             try {
//                 const response = await axios.get(`https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${cityName}&days=7`);
//                 setWeather(response.data);
//             } catch (error) {
//                 setError('Error fetching the weather data');
//                 console.error('Error fetching the weather data', error);
//             }
//         };

//         fetchWeather();
//     }, [cityName]);

//     if (error) {
//         return <p>{error}</p>;
//     }

//     if (!weather) {
//         return <p>Loading...</p>;
//     }

//     return (
//         <div className="city-details">
//             <h1>{weather.location.name}</h1>
//             <h2>Current Weather</h2>
//             <p>Temperature: {weather.current.temp_c}°C</p>
//             <p>Condition: {weather.current.condition.text}</p>
//             <img src={weather.current.condition.icon} alt={weather.current.condition.text} />
//             <h2>Forecast for the next 7 days</h2>
//             <div className="forecast">
//                 {weather.forecast.forecastday.map(day => (
//                     <div key={day.date} className="forecast-day">
//                         <p>{day.date}</p>
//                         <p>Temperature: {day.day.avgtemp_c}°C</p>
//                         <p>Condition: {day.day.condition.text}</p>
//                         <img src={day.day.condition.icon} alt={day.day.condition.text} />
//                         <p>Precipitation: {day.day.totalprecip_mm} mm</p>
//                         <p>Wind: {day.day.maxwind_kph} kph</p>
//                         <p>Pressure: {day.day.avgvis_km} km</p>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default CityDetails;



// src/components/cityDetails/CityDetails.jsx
// // src/components/cityDetails/CityDetails.jsx
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './CityDetails.css';
// import { useParams } from 'react-router-dom';

// const API_KEY = '658eca185a3a4861b54184514242006'; // Замените на ваш действительный API ключ

// const CityDetails = () => {
//     const { cityName } = useParams(); // используем cityName
//     const [weather, setWeather] = useState(null);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         const fetchWeather = async () => {
//             try {
//                 const response = await axios.get(`https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${cityName}&days=7`);
//                 setWeather(response.data);
//             } catch (error) {
//                 setError('Error fetching the weather data');
//                 console.error('Error fetching the weather data', error);
//             }
//         };

//         fetchWeather();
//     }, [cityName]);

//     if (error) {
//         return <p>{error}</p>;
//     }

//     if (!weather) {
//         return <p>Loading...</p>;
//     }

//     return (
//         <div className="city-details">
//             <h1>{weather.location.name}</h1>
//             <h2>Current Weather</h2>
//             <p>Temperature: {weather.current.temp_c}°C</p>
//             <p>Condition: {weather.current.condition.text}</p>
//             <img src={weather.current.condition.icon} alt={weather.current.condition.text} />
//             <h2>Forecast for the next 7 days</h2>
//             <div className="forecast">
//                 {weather.forecast.forecastday.map(day => (
//                     <div key={day.date} className="forecast-day">
//                         <p>{day.date}</p>
//                         <p>Temperature: {day.day.avgtemp_c}°C</p>
//                         <p>Condition: {day.day.condition.text}</p>
//                         <img src={day.day.condition.icon} alt={day.day.condition.text} />
//                         <p>Precipitation: {day.day.totalprecip_mm} mm</p>
//                         <p>Wind: {day.day.maxwind_kph} kph</p>
//                         <p>Pressure: {day.day.avgvis_km} km</p>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default CityDetails;




// // src/components/cityDetails/CityDetails.jsx
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './CityDetails.css';
// import { useParams } from 'react-router-dom';

// const API_KEY = '658eca185a3a4861b54184514242006'; // Замените на ваш действительный API ключ

// const CityDetails = () => {
//     const { cityName } = useParams();
//     const [weather, setWeather] = useState(null);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         const fetchWeather = async () => {
//             try {
//                 const response = await axios.get(`https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${cityName}&days=7`);
//                 setWeather(response.data);
//             } catch (error) {
//                 setError('Error fetching the weather data');
//                 console.error('Error fetching the weather data', error);
//             }
//         };

//         fetchWeather();
//     }, [cityName]);

//     if (error) {
//         return <p>{error}</p>;
//     }

//     if (!weather) {
//         return <p>Loading...</p>;
//     }

//     return (
//         <div className="city-details">
//             <h1>{weather.location.name}</h1>
//             <h2>Current Weather</h2>
//             <p>Temperature: {weather.current.temp_c}°C</p>
//             <p>Condition: {weather.current.condition.text}</p>
//             <img src={weather.current.condition.icon} alt={weather.current.condition.text} />
//             <h2>Forecast for the next 7 days</h2>
//             <div className="forecast">
//                 {weather.forecast.forecastday.map(day => (
//                     <div key={day.date} className="forecast-day">
//                         <p>{day.date}</p>
//                         <p>Temperature: {day.day.avgtemp_c}°C</p>
//                         <p>Condition: {day.day.condition.text}</p>
//                         <img src={day.day.condition.icon} alt={day.day.condition.text} />
//                         <p>Precipitation: {day.day.totalprecip_mm} mm</p>
//                         <p>Wind: {day.day.maxwind_kph} kph</p>
//                         <p>Pressure: {day.day.avgvis_km} km</p>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default CityDetails;




// // src/components/cityDetails/CityDetails.jsx// src/components/cityDetails/CityDetails.jsx
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';
// import './CityDetails.css';

// const API_KEY = '658eca185a3a4861b54184514242006'; // Замените на ваш действительный API ключ

// const CityDetails = () => {
//     const { cityName } = useParams();
//     const [weather, setWeather] = useState(null);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         const fetchWeather = async () => {
//             try {
//                 const response = await axios.get(`https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${cityName}&days=7`);
//                 setWeather(response.data);
//             } catch (error) {
//                 setError('Error fetching the weather data');
//                 console.error('Error fetching the weather data', error);
//             }
//         };

//         fetchWeather();
//     }, [cityName]);

//     if (error) {
//         return <p>{error}</p>;
//     }

//     if (!weather) {
//         return <p>Loading...</p>;
//     }

//     return (
//         <div className="city-details">
//             <h1>{weather.location.name}</h1>
//             <h2>Current Weather</h2>
//             <p>Temperature: {weather.current.temp_c}°C</p>
//             <p>Condition: {weather.current.condition.text}</p>
//             <img src={weather.current.condition.icon} alt={weather.current.condition.text} />
//             <h2>Forecast for the next 7 days</h2>
//             <div className="forecast">
//                 {weather.forecast.forecastday.map(day => (
//                     <div key={day.date} className="forecast-day">
//                         <p>{day.date}</p>
//                         <p>Temperature: {day.day.avgtemp_c}°C</p>
//                         <p>Condition: {day.day.condition.text}</p>
//                         <img src={day.day.condition.icon} alt={day.day.condition.text} />
//                         <p>Precipitation: {day.day.totalprecip_mm} mm</p>
//                         <p>Wind: {day.day.maxwind_kph} kph</p>
//                         <p>Pressure: {day.day.avgvis_km} km</p>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default CityDetails;


// CityDetails.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './CityDetails.css';

const API_KEY = '658eca185a3a4861b54184514242006';  // Убедитесь, что здесь правильный ключ API

const CityDetails = () => {
    const { cityId } = useParams();
    const [weatherData, setWeatherData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchWeatherData = async () => {
            try {
                const response = await axios.get(`https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${cityId}&days=7`);
                setWeatherData(response.data);
            } catch (error) {
                setError('Error fetching the weather data');
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
            <img src={`https:${weatherData.current.condition.icon}`} alt={weatherData.current.condition.text} />
            <p>Temperature: {weatherData.current.temp_c}°C</p>
            <p>Condition: {weatherData.current.condition.text}</p>
            <h2>Forecast for the next 7 days</h2>
            <div className="forecast">
                {weatherData.forecast.forecastday.map(day => (
                    <div key={day.date} className="forecast-day">
                        <h3>{day.date}</h3>
                        <img src={`https:${day.day.condition.icon}`} alt={day.day.condition.text} />
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
