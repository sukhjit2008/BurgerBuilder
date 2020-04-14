import React, { Component } from "react";
import "./BurgerIngredients.css";
class BurgerIngredients extends Component {
  render() {
    let ingredient = (
      <div className="BreadTop">
        BreadTop
        <div className="Seeds1 "></div>
        <div className="Seeds2 "></div>
      </div>
    );

    switch (this.props.type) {
      case "bread-top":
        ingredient = (
          <div className="BreadTop">
            <div className="Seeds1 "></div>
            <div className="Seeds2 "></div>
          </div>
        );
        break;
      case "bread-bottom":
        ingredient = <div className="BreadBottom"></div>;
        break;
      case "meat":
        ingredient = <div className="Meat"></div>;
        break;
      case "cheese":
        ingredient = <div className="Cheese"></div>;
        break;
      case "salad":
        ingredient = <div className="Salad"></div>;
        break;
      case "bacon":
        ingredient = <div className="Bacon"></div>;
        break;
      default:
        ingredient = null;
    }

    return <div>{ingredient}</div>;
  }
}
export default BurgerIngredients;
