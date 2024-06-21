import React, { useState } from "react";
import Buttons from "../button/Buttons";
import "./Hero.css";
import image from "../../img/ilu1.svg";
import CityWeather from "../cityWeather/CityWeather";
import Modal from "../modal/Modal";
import AddCityModal from "../addCity/AddCityModal";

const CITY_IDS = [
  "Moscow",
  "Saint Petersburg",
  "Kazan",
  "Yekaterinburg",
  "Novosibirsk",
  "Sochi",
];

const AVAILABLE_CITY_IDS = [
  "Vladivostok",
  "Samara",
  "Omsk",
  "Rostov-on-Don",
  "Ufa",
  "Chelyabinsk",
  "Volgograd",
  "Krasnoyarsk",
  "Perm",
  "Voronezh",
];

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAddCityModalOpen, setIsAddCityModalOpen] = useState(false);
  const [selectedCities, setSelectedCities] = useState(CITY_IDS);
  const [availableCities, setAvailableCities] = useState(AVAILABLE_CITY_IDS);
  const [error, setError] = useState(null);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const toggleAddCityModal = () => {
    setIsAddCityModalOpen(!isAddCityModalOpen);
  };

  const addCity = (cityName) => {
    setSelectedCities([...selectedCities, cityName]);
    setAvailableCities(availableCities.filter((city) => city !== cityName));
    toggleAddCityModal();
  };

  const removeCity = (cityName) => {
    setSelectedCities(selectedCities.filter((city) => city !== cityName));
    setAvailableCities([...availableCities, cityName]);
  };

  return (
    <section className="hero">
      <div className="content-container">
        <div className="hero__content">
          <h1 className="hero__title">
            Ed Space Ваши знания и экспертность обретут здесь форму
          </h1>
          <p className="hero__subtitle"></p>
          <p className="hero__description">
            Мощный инструмент для организации обучения. Ваши ученики будут в
            восторге!
          </p>
          <div>
            <Buttons onClick={toggleModal} />
            {isModalOpen && <Modal key={Date.now()} closeModal={toggleModal} />}
            <button className="button" onClick={toggleAddCityModal}>
              Добавить город
            </button>
            {isAddCityModalOpen && (
              <AddCityModal
                key={Date.now()}
                closeModal={toggleAddCityModal}
                addCity={addCity}
                availableCities={availableCities}
              />
            )}
          </div>
        </div>
        <div className="hero__image">
          <img src={image} alt="" />
        </div>
      </div>
      <div className="weather-cities">
        {error && <p className="error">{error}</p>}
        {selectedCities.map((cityName) => (
          <CityWeather
            key={cityName}
            cityName={cityName}
            removeCity={() => removeCity(cityName)}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
