import React from "react";
import "./FeatureList.css";
import okCircle from "../../img/ok-circle.svg";
import list from "../../data/list.json";

const FeatureList = () => {
  return (
    <div className="feature-list">
      {list.map((feature) => (
        <div className="feature-item">
          <span className="feature-name">{feature.name}</span>
          <img src={okCircle} alt="" className="checkmark" />
        </div>
      ))}
    </div>
  );
};

export default FeatureList;
