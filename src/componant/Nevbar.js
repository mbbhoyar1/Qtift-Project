import React from "react";
import Button from "./Button";

import SearchBar from "./Search";
// import logoImage from "../../src/assest/logoImage.png";
import LogoFinal from "../../src/assest/LogoFinal.png";



import "./Nevbar.css";
const NavBar = () => {
  return (
    <nav className="navbar">
      {/* <logoImage /> */}
      <LogoFinal />
      <SearchBar />
      <Button text="Give Feedback" />
    </nav>
  );
};

export default NavBar;
