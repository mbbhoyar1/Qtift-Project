import React from "react";
import Button from "./Button";
import Logo from "./Logo";

import SearchBar from "./Search";

import "../componant/Nevbar.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      
     
      <Logo />
       
      <SearchBar placeholder="Search a album of your choice" />
      <Button text="Give Feedback"  />
    </nav>
  );
};

export default NavBar;
