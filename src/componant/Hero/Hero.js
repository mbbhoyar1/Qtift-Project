import React from "react";
import "./Hero.css";
import { ReactComponent as Headphone } from "../../assest/vibratingHeadphone.svg";

 const Hero = () => {
  return (
    <div className="hero">
      <div className="promotion">
        <h2>100 Thousand Songs, ad-free</h2>
        <h2>Over 1000 podcast episode</h2>
      </div>
      <div className="headphone">
        <Headphone />
      </div>
    </div>
  );
};


export default Hero;
