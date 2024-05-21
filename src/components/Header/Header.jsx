import React from "react";
import "./Header.css";
import CTA from "../Header/CTA";
import me from "../../assets/sara1.jpg";
const Header = () => {

  return (
    <header>
      <div className="container header__container">
        <h5> Hello I'm </h5>
        <h1> Sara Ayache </h1>
        <h5 className="text-light"> Translator </h5>
        <h6 className="text-light"> 21 years old </h6>
        <CTA />

        <div className="me">
          <img src={me} alt="elio" />
        </div>

        <a href="#contact" className="scroll__down">
          {" "}
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
