import React from "react";
import Nav from "../Nav/Nav";
import Menu from "../Menu/Menu";
import "./Header.css";
import { Logo } from "../Logo/Logo";

const Header = ({ onClickShowSideBar }) => {
  return (
    <header className="Header">
      <Menu onClickShowSideBar={onClickShowSideBar} />
      <Logo />
      <Nav />
    </header>
  );
};
export default Header;
