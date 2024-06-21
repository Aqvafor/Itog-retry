import React from "react";
import "./Buttons.css";

const Buttons = ({ onClick }) => {
  return (
    <button className="button" onClick={onClick}>
      Попробовать бесплатно
    </button>
  );
};

export default Buttons;
