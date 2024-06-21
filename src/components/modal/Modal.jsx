import React, { useState } from "react";
import "./Modal.css";
import logo from "../../img/logo_EdSpase.svg";

const Modal = ({ closeModal }) => {
  const [formData, setFormData] = useState({
    name: "",
    organization: "",
    position: "",
    email: "",
    phone: "",
    consent: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    closeModal();
    document
      .querySelectorAll(".button")
      .forEach((button) => (button.disabled = true));
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span onClick={closeModal} className="close">
          &times;
        </span>
        <img className="logoform" src={logo} alt="Ed Space Logo" />
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Имя фамилия"
            value={formData.name}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="organization"
            placeholder="Название организации"
            value={formData.organization}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="position"
            placeholder="Должность"
            value={formData.position}
            onChange={handleInputChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
          />
          <input
            type="tel"
            name="phone"
            placeholder="Телефон"
            value={formData.phone}
            onChange={handleInputChange}
          />
          <div className="consent">
            <input
              type="checkbox"
              name="consent"
              checked={formData.consent}
              onChange={handleInputChange}
            />
            <label className="consent-text">
              Я согласен на обработку моих
              <br /> <a href="#">персональных данных</a>
            </label>
          </div>
          <button
            className="btnSend"
            type="submit"
            disabled={!formData.consent}
          >
            Отправить
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
