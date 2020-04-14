import React, { Component } from "react";
import Aux from "../../components/HOC/Aux";
import Burger from "../../Burger/Burger";
import BuildControls from "../../Burger/BuildControls/BuildControls";
import Model from "../../components/UI/Model";
import OrderSummery from "../../Burger/OrderSummery/OrderSummery";

const INGREIENTS_PRICE = {
  cheese: 1,
  salad: 0.4,
  bacon: 0.7,
  meat: 3
};

class BurgerBuilder extends Component {
  //State
  state = {
    ingredients: {
      cheese: 0,
      salad: 0,
      bacon: 0,
      meat: 0
    },
    totalPrice: 5,
    showCheckOutButton: false,
    hideUI: true
  };
  //To add ingredients
  onIngredientAdded = type => {
    const oldCount = this.state.ingredients[type];
    let updateCount = oldCount + 1;
    const ingredients = { ...this.state.ingredients };
    ingredients[type] = updateCount;

    const totalPrice = this.state.totalPrice;
    const newPrice = totalPrice + INGREIENTS_PRICE[type];
    this.setState({ ingredients, totalPrice: newPrice });
    this.toggleCheckoutButton(ingredients);
  };
  //To remove ingredients
  onIngredientRemoved = type => {
    console.log(type);
    const oldCount = this.state.ingredients[type];
    if (oldCount <= 0) {
      return;
    }
    let updateCount = oldCount - 1;
    const ingredients = { ...this.state.ingredients };
    ingredients[type] = updateCount;
    const totalPrice = this.state.totalPrice;
    const newPrice = totalPrice - INGREIENTS_PRICE[type];
    this.setState({ ingredients, totalPrice: newPrice });
    this.toggleCheckoutButton(ingredients);
  };

  //toggle checkout button

  toggleCheckoutButton = ingredients => {
    const sum = Object.keys(ingredients).reduce((acc, igkey) => {
      return acc + ingredients[igkey];
    }, 0);
    this.setState({ showCheckOutButton: sum > 0 });
  };

  //toggle orderSummery
  toggleUI = () => {
    this.setState({ hideUI: false });
  };
  //close the mode and the backdrop
  toggleUIWithCloseButton = () => {
    this.setState({ hideUI: true });
  };
  onContinueButtenClicked = () => {
    alert("Send the order");
  };
  render() {
    //To disable the remove button to aviod negative values
    const disabledInfo = { ...this.state.ingredients };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }
    return (
      <Aux className="Aux">
        <Model
          hideUI={this.state.hideUI}
          toggleUIWithCloseButton={this.toggleUIWithCloseButton}
        >
          <OrderSummery
            ingredients={this.state.ingredients}
            toggleUIWithCloseButton={this.toggleUIWithCloseButton}
            onContinueButtenClicked={this.onContinueButtenClicked}
            totalPrice={this.state.totalPrice}
          />
        </Model>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          totalPrice={this.state.totalPrice}
          onIngredientAdded={this.onIngredientAdded}
          onIngredientRemoved={this.onIngredientRemoved}
          disabledInfo={disabledInfo}
          showCheckOutButton={this.state.showCheckOutButton}
          toggleUI={this.toggleUI}
        />
      </Aux>
    );
  }
}
export default BurgerBuilder;
