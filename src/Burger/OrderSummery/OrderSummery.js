import React from "react";

const OrderSummery = props => {
  const list = Object.keys(props.ingredients).map(igkey => {
    return (
      <li key={igkey} className="OrderSummery__item">
        {igkey}: {props.ingredients[igkey]}
      </li>
    );
  });
  return (
    <div className="OrderSummery">
      <h3>Your Order</h3>
      <p className="OrderSummery__header">
        A delecious burger with the following ingredients:
      </p>
      <ul className="OrderSummery__list">{list}</ul>
      <p>
        TotalPrice:
        <span className="OrderSummery__amount">
          {props.totalPrice.toFixed(2)} &#36;
        </span>
      </p>
      <p>Continue to Checkout?</p>
      <div>
        <button
          className="OrderSummery__checkout"
          onClick={props.onContinueButtenClicked}
        >
          Continue
        </button>
        <button
          className="OrderSummery__close"
          onClick={props.toggleUIWithCloseButton}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default OrderSummery;
