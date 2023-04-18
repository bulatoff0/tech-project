import React from "react";
import "./InfoVentilationBenefits.scss";

export const InfoVentilationBenefits = ({ title, description }) => {
  return (
    <div className="container1">
        <h2 className="title1">{title}</h2>
        <p className="description1">{description}</p>
    </div>
  );
};
