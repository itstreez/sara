import React from "react";
import { BsLinkedin } from "react-icons/bs";
import "../Header/Header.css";

export const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/yara-hachem-b2418a297?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
        rel="noreferrer"
        target="_blank"
      >
        {" "}
        <BsLinkedin />
      </a>
    </div>
  );
};
export default HeaderSocials;
