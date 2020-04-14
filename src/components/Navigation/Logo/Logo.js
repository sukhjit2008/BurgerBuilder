import React from "react";
import "./Logo.css";

import logoImage from "../../../assets/image/original.png";
export const Logo = () => {
  return (
    <a href="/" className="Logo__box">
      <img src={logoImage} alt="logoimg" className="Logo" />
    </a>
  );
};
