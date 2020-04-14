import React from "react";
import "./Menu.css";
const Menu = ({ onClickShowSideBar }) => {
  return (
    <div onClick={onClickShowSideBar} className="Menu__box">
      <div className="Menu"></div>
    </div>
  );
};

export default Menu;
