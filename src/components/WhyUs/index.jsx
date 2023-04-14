import React from "react";
import Benefits from "../Benefits/index.jsx";
import './WhyUs.scss'

const WhyUs = () => {
  return (
    <div>
      <span className="title">Мы спросили наших клиентов, почему они выбрали нас:</span>

      <div className="benefits-grid">
        <Benefits title='Заголовок #1' descr={'Описание #1'} />
        <Benefits title='Заголовок #2' descr='Описание #2' />
        <Benefits title='Заголовок #3' descr='Описание #3' />
        <Benefits title='Заголовок #4' descr='Описание #4' />
        <Benefits title='Заголовок #5' descr='Описание #5' />
        <Benefits title='Заголовок #6' descr='Описание #6' />
      </div>
      
    </div>
  );
};

export default WhyUs;
