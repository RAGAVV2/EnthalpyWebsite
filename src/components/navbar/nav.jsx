import React from 'react';
import './navbar.css';
import { NavLink as Link } from "react-router-dom"; 
import backwardIcon from './Vector 522.png'; 
import forwardIcon from './Vector 521.png'; 
import Toggle from "../toggle/Toggle";

const Navbar = () => {

  return (
    <div>
    <div className="navbar">
      <div className="navbar__left">
        <span className="navbar__logo">ENTHALPY</span>
        <Toggle />
      </div>
      <div className="navbar__right">
      <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
            <li>
              <Link activeClass="active" to="Navbar" spy={true} smooth={true}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/Misson" spy={true} smooth={true}>
                Mission
              </Link>
            </li>
            <li>
              <Link to="/Projects" spy={true} smooth={true}>
             Projects
              </Link>
            </li>
            <li>
              <Link to="/Team" spy={true} smooth={true}>
                Team
              </Link>
            </li>
            <li>
              <Link to="/Sponsor" spy={true} smooth={true}>
                Support us
              </Link>
            </li>
            <li>
              <Link to="/Contact" spy={true} smooth={true}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
    </div>
    </div>

    <div className="nav_button">

    <span className="nav_backwardButton">
    <img src={backwardIcon} alt="Backward Icon" className="navbar_buttonIconback" />
    </span>

    <span className="nav_forwardButton">
      <img src={forwardIcon} alt="Forward Icon" className="navbar_buttonIconforward" />
    </span>

    </div>
    </div>
  );
};

export default Navbar;

