
import React from 'react';
import './AddCityModal.css';

const AddCityModal = ({ closeModal, addCity, availableCities }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <span onClick={closeModal} className="close">&times;</span>
        <h2>Добавить город</h2>
        <ul>
          {availableCities.map((city, index) => (
            <li key={index} onClick={() => addCity(city)}>
              {city}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default AddCityModal;
