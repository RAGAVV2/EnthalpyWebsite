import React from 'react';
import './navbar.css'; 
import backwardIcon from './Vector 522.png'; // Replace with the actual path to your backward icon image
import forwardIcon from './Vector 521.png'; // Replace with the actual path to your forward icon image

const Navbar = () => {

  return (
    <div>
    <div className="navbar">
      <div className="navbar__left">
        <span className="navbar__logo">ENTHALPY</span>
        
      </div>
      <div className="navbar__right">
        <span className="navbar__slogo">Team</span>
        <span className="navbar__slogo">Mission</span>
        <span className="navbar__slogo">Contact</span>
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

//Note:
//while importing: add 
//const currentPage = n; 
// Replace 'n' with the logic to determine the current page number

//<Navbar currentPage={currentPage} />

//add neccessary page links appropriately to the className="nav_backwardButton" and span className="nav_forwardButton" to navigate through the pages.
// and Replace the currentpage value in each page.  const currentPage = n;    <Navbar currentPage={currentPage} />