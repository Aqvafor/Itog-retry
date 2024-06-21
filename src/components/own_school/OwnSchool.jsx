import React, { useState, useEffect } from "react";

import Buttons from "../button/Buttons";
import Modal from "../modal/Modal";
import "./OwnSchool.css";
import TextBlock from "../textBlock/TextBlock";
import FeatureList from "../feature_list/FeatureList";
import backImage from "../../img/ilu2.svg";
import H2 from "../h2/H2";
import BackChoise from "../backImageChoise/BackChoise";
import possibleFeaturesData from "../../data/backgroundChoices.json";

import backImage1 from "../../img/pic6.png";
import backImage2 from "../../img/pic7.png";
import backImage3 from "../../img/pic8.png";
import backImage4 from "../../img/pic9.png";
import backImage5 from "../../img/pic10.png";
import backImage6 from "../../img/pic11.png";
import backImage7 from "../../img/pic12.png";
import backImage8 from "../../img/pic13.png";
import backImage9 from "../../img/pic14.png";
import backImage10 from "../../img/pic15.png";
import backImage11 from "../../img/pic16.png";
import backImage12 from "../../img/pic17.png";
import backImage13 from "../../img/pic18.png";
import backImage14 from "../../img/pic19.png";
import backImage15 from "../../img/pic20.png";
import backImage16 from "../../img/pic22.png";
import backImage17 from "../../img/pic23.png";
import backImage18 from "../../img/pic25.png";
import backImage19 from "../../img/pic26.png";

const imagesMapBack = {
  backImage1,
  backImage2,
  backImage3,
  backImage4,
  backImage5,
  backImage6,
  backImage7,
  backImage8,
  backImage9,
  backImage10,
  backImage11,
  backImage12,
  backImage13,
  backImage14,
  backImage15,
  backImage16,
  backImage17,
  backImage18,
  backImage19,
};

const OwnSchool = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    console.log("toggleModal called");
    setIsModalOpen(!isModalOpen);
  };
  const [features, setFeatures] = useState([]);
  useEffect(() => {
    setFeatures(possibleFeaturesData);
  }, []);
  return (
    <div className="own_school-section">
      {features.map((feature) => (
        <BackChoise
          backgroundImage={imagesMapBack[feature.backgroundImage]}
          top={feature.top}
          left={feature.left}
          width={feature.width}
          height={feature.height}
          zIndex={feature.zIndex}
          opacity={feature.opacity}
        />
      ))}

      <div className="content-container column">
        <div className="own-school-top">
          <H2
            color="#F3F6EF"
            text="Выбирайте Ed Space
                сегодня и вы получите"
            margin="80px"
          />
          <FeatureList />
        </div>
        <div className="own_school-content">
          <div className="own_school-zapusk">
            <H2
              color="#F3F6EF"
              text="Запустите свою онлайн-школу"
              margin="0px"
            />
            <p className="own_school-zapusk__text">
              Или разверните корпоративный учебный портал уже сегодня.
            </p>
          </div>
          <TextBlock
            name="Цена 250 рублей за 1 ученика в месяц"
            text="Все готово для запуска. Попробуйте 7-дневный демо-доступ."
            variant="colorize"
          />

          <div>
            <Buttons onClick={toggleModal} />
            {isModalOpen && <Modal key={Date.now()} closeModal={toggleModal} />}
          </div>
        </div>
        <div className="own-school-bottom">
          <div className="own_school-targets">
            <H2 color="#F3F6EF" text="Точно подойдет для:" margin="0px" />
            <TextBlock
              name="Любых онлайн-школ"
              text="Быстрый запуск, легкое управление, все инструменты в одной платформе."
              variant="colorize"
            />
            <TextBlock
              name="Образовательных курсов"
              text="Статистика по всем образовательным процессам позволяет постоянно улучшать ваш продукт."
              variant="colorize"
            />
            <TextBlock
              name="Корпоративных учебных порталов"
              text="Надежная защита, бесперебойная работа и высокая производительность системы позволят наслаждаться процессом обучения."
              variant="colorize"
            />
          </div>
          <div className="own_school-illustration">
            <img src={backImage} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OwnSchool;
