import React from "react";
import "./NavList.scss";

export const NavList = () => {
  return (
    <div className="nav-list">
        {/* <li className="nav-list__item">+7 (499) 495-49-15</li> */}
        <li className="nav-list__item">О нас</li>
        <li className="nav-list__item">Галерея работ</li>
        {/* <li className="nav-list__item">Плюсы</li> */}
        {/* <li className="nav-list__item">Цены</li> */}
        <li className="nav-list__item">Калькулятор стоимости</li>
        {/* <li className="nav-list__item">Блог</li> */}
        <li className="nav-list__item">Связаться с нами</li>
    </div>
  );
};
