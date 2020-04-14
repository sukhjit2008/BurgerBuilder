import React, { Component } from "react";
import BurgerIngredients from "./BurgerIngredients/BurgerIngredients";

import "./Burger.css";

class Burger extends Component {
  render() {
    let changedIngredients = Object.keys(this.props.ingredients)
      .map(igkey => {
        return [...Array(this.props.ingredients[igkey])].map((_, i) => {
          return <BurgerIngredients key={igkey + i} type={igkey} />;
        });
      })
      .reduce((acc, curr) => {
        return acc.concat(curr);
      }, []);
    if (changedIngredients.length === 0) {
      changedIngredients = <p>Please start adding ingredients!</p>;
    }

    return (
      <div className="Burger">
        <BurgerIngredients type="bread-top" />
        {changedIngredients}
        <BurgerIngredients type="bread-bottom" />
      </div>
    );
  }
}
export default Burger;
