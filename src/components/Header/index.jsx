import React from "react";
import { Navbar } from "../Navbar";
import "./Header.scss";

/* img */
import headerImg  from '../../resources/img/headerImg.jpg'

const staticParagraph = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet qui laudantium odio laborum, at dicta. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate, sapiente reprehenderit voluptas velit tempore in?'

export const Header = () => {
  return (
    <>
      <Navbar />
     
      <div className="header">
            <img
            //   src="https://thumb.tildacdn.com/tild3130-3361-4239-b063-326438633265/-/format/webp/1.jpg"
            src={headerImg}
            alt=""
            />
            <div className="header__container">
                <p className="header__logo">Logo</p>
                <p>
                    {staticParagraph}
                </p>
            </div>
            {/* <img className="arrow" src="/img/arrow.svg" alt="" /> */}
      </div>
    </>
  );
};
