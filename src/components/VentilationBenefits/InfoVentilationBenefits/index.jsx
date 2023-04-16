import React from "react";
import "./InfoVentilationBenefits.scss";

export const InfoVentilationBenefits = ({ title, discription }) => {
  return (
    <div className="container">
      <h2 className="title">{title}</h2>
      <p className="discription">{discription}</p>
    </div>
  );
};
