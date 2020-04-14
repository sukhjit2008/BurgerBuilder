import React from "react";
import Control from "../Control/Control";
import "./BurgerControls.css";
const items = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" }
];

const BuildControls = ({
  totalPrice,
  onIngredientAdded,
  onIngredientRemoved,
  disabledInfo,
  showCheckOutButton,
  toggleUI
}) => {
  const control = items.map(item => {
    return (
      <Control
        key={item.label}
        label={item.label}
        onIngredientAdded={() => {
          onIngredientAdded(item.type);
        }}
        onIngredientRemoved={() => {
          onIngredientRemoved(item.type);
        }}
        disabledInfo={disabledInfo[item.type]}
      />
    );
  });
  return (
    <div className="BuildControls">
      <div className="container">
        <p className="BuildControls__price">
          TotalPrice:{" "}
          <span className="BuildControls__amount">{totalPrice.toFixed(2)}</span>
        </p>
        <button
          className="checkout_button"
          disabled={!showCheckOutButton}
          onClick={toggleUI}
        >
          Checkout
        </button>
      </div>
      {control}
    </div>
  );
};

export default BuildControls;
