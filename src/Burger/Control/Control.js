import React from "react";
import "./Control.css";

const Control = ({
  label,
  onIngredientAdded,
  onIngredientRemoved,
  disabledInfo
}) => {
  return (
    <div className="Control">
      <p>{label}</p>
      <button onClick={onIngredientAdded}>Add</button>
      <button onClick={onIngredientRemoved} disabled={disabledInfo}>
        Remove
      </button>
    </div>
  );
};
export default Control;
