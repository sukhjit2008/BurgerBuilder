import React, { Component } from "react";
import Aux from "../../components/HOC/Aux";
import Burger from "../../Burger/Burger";
import BuildControls from "../../Burger/BuildControls/BuildControls";
import Model from "../../components/UI/Model";
import OrderSummery from "../../Burger/OrderSummery/OrderSummery";
import axios from "../../axios";
import Loader from "../../components/UI/Loader/Loader";
import Error from "../../components/UI/Error/Error";

const INGREIENTS_PRICE = {
  cheese: 1,
  salad: 0.4,
  bacon: 0.7,
  meat: 3
};

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      cheese: 0,
      salad: 0,
      bacon: 0,
      meat: 0
    },
    totalPrice: 5,
    showCheckOutButton: false,
    hideUI: true,
    loader: false,
    error: null,
    hideOrderSummery: false
  };

  componentDidUpdate = () => {};
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
    this.setState({ loader: true });
    const order = {
      ingredients: this.state.ingredients,
      name: "Sukhjit Singh",
      address: {
        street: "1 mainStreet",
        zipCode: 13455,
        city: "calgary",
        country: "canada"
      },
      email: "minda@gmail.com",
      deliveryMethod: "fast"
    };
    axios
      .post("/orders.json", order)
      .then(response => {
        this.setState({ loader: false });
        this.setState({ hideOrderSummery: true });
        setInterval(() => {
          this.setState({ hideUI: true });
        }, 2000);
      })
      .catch(err => {
        this.setState({ loader: false });
        this.setState({ error: err.message });
      });
  };
  render() {
    //To disable the remove button to aviod negative values
    const disabledInfo = { ...this.state.ingredients };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }
    let summery;
    if (this.state.loader) {
      summery = <Loader />;
    } else if (!this.state.error && !this.state.hideOrderSummery) {
      summery = (
        <OrderSummery
          ingredients={this.state.ingredients}
          toggleUIWithCloseButton={this.toggleUIWithCloseButton}
          onContinueButtenClicked={this.onContinueButtenClicked}
          totalPrice={this.state.totalPrice}
        />
      );
    } else if (this.state.error) {
      summery = <Error error={this.state.error} />;
    } else if (this.state.hideOrderSummery) {
      summery = <div>Congratulation Your Order Submitted!</div>;
    }

    return (
      <Aux className="Aux">
        <Model
          hideUI={this.state.hideUI}
          toggleUIWithCloseButton={this.toggleUIWithCloseButton}
        >
          {summery}
        </Model>
        {this.state.error}
        <Burger ingredients={this.state.ingredients} />

        <BuildControls
          totalPrice={this.state.totalPrice}
          onIngredientAdded={this.onIngredientAdded}
          onIngredientRemoved={this.onIngredientRemoved}
          disabledInfo={disabledInfo}
          showCheckOutButton={this.state.showCheckOutButton}
          toggleUI={this.toggleUI}
        />
        <Error error={this.state.error} />
      </Aux>
    );
  }
}
export default BurgerBuilder;
