import React from "react";
import "./Navbar.scss";
import { NavList } from "./NavList";

export const Navbar = () => {
  return (
    <nav className="nav">
        <div className="nav__row">
            <div className="nav__logo">
                <p>Logo</p>
            </div>

            <div>
                <ul>
                    <NavList />
                </ul>
            </div>
            
            <div>
                <button>Оставить заявку</button>
            </div>
        </div>
    </nav>
  );
};
