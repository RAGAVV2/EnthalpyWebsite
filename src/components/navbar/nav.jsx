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
              <Link activeClass="active" to="/EnthalpyWebsite/" spy="true" smooth="true">
                Home
              </Link>
            </li>
            <li>
              <Link to="/EnthalpyWebsite/Projects" spy="true" smooth="true">
             Projects
              </Link>
            </li>
            <li>
              <Link to="/EnthalpyWebsite/Team" spy="true" smooth="true">
                Team
              </Link>
            </li>
            <li>
              <Link to="/EnthalpyWebsite/Sponsor" spy="true" smooth="true">
                Sponsor
              </Link>
            </li>
            <li>
              <Link to="/EnthalpyWebsite/Contact" spy="true" smooth="true">
                Contact us
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

