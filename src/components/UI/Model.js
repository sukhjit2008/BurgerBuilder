import React, { useEffect } from "react";
import Backdrop from "./Backdrop";
import Aux from "../HOC/Aux";
import "./Model.css";
const Model = props => {
  useEffect(() => {}, [props.hideUI]);
  return (
    <Aux>
      <Backdrop
        hideUI={props.hideUI}
        toggleUIWithCloseButton={props.toggleUIWithCloseButton}
      />
      <div
        className="model"
        style={{
          transform: props.hideUI
            ? "translate(-50%,-40%) scale(0) "
            : "translate(-50%,-40%) scale(1) ",
          opacity: props.hideUI ? "0" : "1"
        }}
      >
        {props.children}
      </div>
    </Aux>
  );
};

export default Model;
