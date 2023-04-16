import React from "react";
import "./Rules.scss";

export const Rules = ({ image, title, description }) => {
  return (
    <div className="blocks">
      <img src={image} alt="" />
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};
