import React from "react";
import Navbar from "./Navbar";
import PredictionBox from "./PredictionBox";

const Header = () => {
  return (
    <div id="home" className="inner-screen">
      <Navbar />
      <div className="header-main">
        <div className="header-description">
          <span className="header-description_heading">
            Modern living for everyone
          </span>
          <p className="header-description_text">
            We provide a complete service for the sale, purchase or rental of
            real estate. We have been operating in California more than 15
            years.
          </p>
          <PredictionBox />
        </div>
        <div className="header-image">
          <img src="/header.jpg" alt="header-image" className="header-img" />
        </div>
      </div>
    </div>
  );
};

export default Header;
