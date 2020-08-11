import React, { useState } from "react";
import "./header.scss";

const Header = () => {
  const [show, setShow] = useState(false);

  const hamburger = (state) => {
    if (state) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    setShow(state);
  };
  
  return (
    <header>
      <div className="main-header container flex j-content-between">
        <div
          className={`menu-section flex j-content-between${show ? " on" : ""}`}
        >
          <div className="menu-mobile" onClick={() => hamburger(!show)}>
            <div className="one"></div>
            <div className="two"></div>
            <div className="three"></div>
          </div>
          <nav className="nav-menu">
            <ul className="flex j-content-between w-full">
              <li className="user-mobile">
                <a href="/#">
                  <i className="fas fa-user-circle"></i> Login
                </a>
              </li>
              <li>
                <a href="/#section-2" onClick={() => hamburger(false)}>Menu</a>
              </li>
              <li>
                <a href="/#section-2" onClick={() => hamburger(false)}>Menu</a>
              </li>
              <li>
                <a href="/#section-3" onClick={() => hamburger(false)}>Menu</a>
              </li>
              <li>
                <a href="/#section-4" onClick={() => hamburger(false)}>Menu</a>
              </li>
              <li>
                <a href="/#footer" onClick={() => hamburger(false)}>Menu</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="logo">
          <a href="/#" className="decoration-none">
            <span>LOGO</span>
          </a>
        </div>

        <div className="icons-header flex j-content-between">
          <i className="fas fa-search"></i>
          <i className="fas fa-user-circle user-desk"></i>
          <i className="fas fa-shopping-bag"></i>
        </div>
      </div>
    </header>
  );
};

export default Header;
