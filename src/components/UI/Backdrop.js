import React from "react";
import "./Backdrop.css";
const Backdrop = props => {
  return (
    <div
      onClick={props.toggleUIWithCloseButton}
      onMouseDown={props.onHideSidebarHandler}
      className="Backdrop"
      style={{ display: props.hideUI ? "none" : null }}
    ></div>
  );
};
export default Backdrop;
