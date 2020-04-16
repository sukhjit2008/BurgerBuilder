import React from "react";
import "./Error.css";
const Error = props => {
  return props.error ? (
    <p className="Error">
      Error: <span>{props.error}!</span>
    </p>
  ) : null;
};

export default Error;
