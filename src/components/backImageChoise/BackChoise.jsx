import React from "react";

const BackChoise = ({
  backgroundImage,
  top,
  left,
  width,
  height,
  zIndex,
  opacity,
}) => {
  const style = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "absolute",
    width: width,
    height: height,
    top: top,
    left: left,
    zIndex: zIndex,
    opacity: opacity,
  };

  return <div className="backChoise" style={style}></div>;
};

export default BackChoise;
