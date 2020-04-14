import React from "react";
import "./Nav.css";
const Nav = () => {
  return (
    <ul className="Nav__list">
      <li className="Nav__item">
        <a className="Nav__link" href="/">
          Burger Builder
        </a>
      </li>

      <li className="Nav__item">
        <a className="Nav__link" href="/">
          Checkout
        </a>
      </li>
    </ul>
  );
};

export default Nav;
