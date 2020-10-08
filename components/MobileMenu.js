import React from "react";
import NavLinks from "./NavLinks";
import CloseBtn from "../assets/images/shapes/close-1-1.png";

const MobileMenu = () => {
  return (
    <div className="side-menu__block">
      <div className="side-menu__block-overlay custom-cursor__overlay">
        <div className="cursor"></div>
        <div className="cursor-follower"></div>
      </div>
      <div className="side-menu__block-inner ">
        <div className="side-menu__top justify-content-end">
          <a href="#" className="side-menu__toggler side-menu__close-btn">
            <img src={CloseBtn} alt="" />
          </a>
        </div>

        <nav className="mobile-nav__container">
          <NavLinks />
        </nav>
        <div className="side-menu__sep"></div>
        <div className="side-menu__content">
          <p>
          आधुनिक घर का नक्सा घरको नक्सा बनाउने ठाउँ <br /> प्रो.सोचित वाग्ले <br /> ९८६०१७०६९९ :९८१३४८६१९४
          </p>
          <p>
            <a href="mailto:buddhaengineeringconsultancy@gmail.com">buddhaengineeringconsultancy@gmail.com</a> <br />
            <a href="tel:9860170699">9860170699</a>
          </p>
          <div className="side-menu__social">
            <a href="https://www.facebook.com/buddhaengineering3DDesignconsultancy">
              <i className="fab fa-facebook-square"></i>
            </a>
            <a href="https://www.instagram.com/pyaroghar/">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
