import React from "react";
import Button from "./Button";
import Logo from "./Logo";

import SearchBar from "./Search";

import "../componant/Nevbar.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      
      {/* <div className="Logodiv"> */}
        <Logo />
        {/* </div> */}
      <SearchBar placeholder="Search a album of your choice" />
      <Button text="Give Feedback" className="give-feedback-btn" />
    </nav>
  );
};

export default NavBar;
