import React from "react";
import Aux from "../../HOC/Aux";
import Backdrop from "../../UI/Backdrop";
import "./Sidebar.css";

const Sidebar = ({ hideSideBar, onHideSidebarHandler }) => {
  const showElement = hideSideBar;
  return (
    <Aux>
      {/* Backdrop */}
      {!showElement ? (
        <Backdrop onHideSidebarHandler={onHideSidebarHandler} />
      ) : null}
      <div
        className="Sidebar"
        style={{
          opacity: hideSideBar ? "0" : "1",
          width: hideSideBar ? "0%" : "80%"
        }}
      >
        {/* close button */}
        {!showElement ? (
          <div>
            <div
              className="SideBar__closeButton"
              onClick={onHideSidebarHandler}
            >
              &times;
            </div>
            {/* render navigation */}
            <ul className="SideBar__list">
              <li className="SideBar__item">
                <a href="/" className="SideBar__link">
                  Burger Builder
                </a>
              </li>
              <li className="SideBar__item">
                <a href="/" className="SideBar__link">
                  Checkout
                </a>
              </li>
            </ul>
          </div>
        ) : null}
      </div>
    </Aux>
  );
};
export default Sidebar;
