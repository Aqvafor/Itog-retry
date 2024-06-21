import React from "react";
import "./TextBlock.css";

export default ({
  name = "Caption",
  text,
  variant,
  color,
  fontSize = "14px",
  fontWeight = "500",
  lineHeight = "17px",
  h3FontSize = "24px",
  h3FontWeight = "500",
  h3LineHeight = "29px",
}) => {
  const textStyle = {
    fontSize,
    fontWeight,
    lineHeight,
  };

  const h3Style = {
    fontSize: h3FontSize,
    fontWeight: h3FontWeight,
    lineHeight: h3LineHeight,
    color,
  };

  return (
    <div className="text-block">
      <h3
        className={
          variant === "colorize"
            ? "text-block__caption margin-0 text-block__caption_green margin-0"
            : "text-block__caption margin-0 "
        }
        style={h3Style}
      >
        {name}
      </h3>
      <p className="text-block__text  margin-0" style={textStyle}>
        {text
          ? text
          : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, eum dolorem exercitationem maiores consequuntur ad nam blanditiis nobis ratione itaque impedit odio nulla illum voluptatibus!"}
      </p>
    </div>
  );
};
