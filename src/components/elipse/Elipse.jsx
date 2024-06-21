import React from "react";
import "./Elipse.css";

const Ellipse = ({ backgroundImage, top, left, width, height }) => {
  const style = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    borderRadius: "50%",
    position: "absolute",
    width: width,
    height: height,
    top: top,
    left: left,
    zIndex: 10,
    opacity: 0.7,
  };

  return <div className="ellipse" style={style}></div>;
};

export default Ellipse;
