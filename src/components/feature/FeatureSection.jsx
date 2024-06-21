import React, { useState } from "react";
import Buttons from "../button/Buttons";
import Modal from "../modal/Modal";
import H2 from "../h2/H2";
import "./FeatureSection.css";
import image1 from "../../img/image7.svg";
import image2 from "../../img/image6.svg";

import TextBlock from "../textBlock/TextBlock";

const FeatureSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    console.log("toggleModal called");
    setIsModalOpen(!isModalOpen);
  };
  return (
    <div className="feature-section ">
      <div className="content-container column">
        <H2 color="#F3F6EF" text="Точно подойдет для:" margin="20px" />
        <div className="feature-cards-container">
          <div className="feature-card">
            <img src={image1} alt="Онлайн-курсы" />
            <TextBlock
              name="Организации онлайн-курсов"
              text="Создайте свою программу обучения с нуля, самостоятельно управляйте учебным процессом в несколько кликов, круглосуточная поддержка."
            />
          </div>
          <div className="feature-card">
            <img src={image2} alt="Корпоративное обучение" />
            <TextBlock
              name="Создания корпоративного обучения"
              text="Поможем перенести корпоративную академию, базу знаний, учебные курсы, настроим систему мотивации обучения, круглосуточная поддержка."
            />
          </div>
        </div>
        <div>
          <Buttons onClick={toggleModal} />
          {isModalOpen && <Modal key={Date.now()} closeModal={toggleModal} />}
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
