import React from "react";

const H2 = ({ text, color, margin }) => {
  const style = {
    margin: margin,
    color: color,
    fontSize: "40px",
    fontWeight: "800",
    lineHeight: "46px",
  };

  return (
    <h2 className="h-2" style={style}>
      {text}
    </h2>
  );
};

export default H2;
