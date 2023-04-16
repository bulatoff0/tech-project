import React from "react";
import "./InfoServices.scss";

export const InfoServices = ({ image, title, description }) => {
  return (
    <div className="containers">
        <div className="info-container">
            <img src={image} alt="" />
            <span>{title}</span>
            <p>{description}</p>
        </div>
    </div>
  );
};
