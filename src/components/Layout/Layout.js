import React, { Component } from "react";
import Aux from "../HOC/Aux";
import Header from "../Navigation/Header/Header";
import Sidebar from "../Navigation/Sidebar/Sidebar";

class Layout extends Component {
  state = {
    hideSideBar: true
  };
  onClickShowSideBar = () => {
    this.setState({ hideSideBar: false });
  };
  onClickHideSideBar = () => {
    this.setState({ hideSideBar: true });
    console.log("toolbar");
    console.log(this.state.hideSideBar);
  };

  render() {
    return (
      <Aux>
        <Sidebar
          hideSideBar={this.state.hideSideBar}
          onHideSidebarHandler={this.onClickHideSideBar}
        />
        <Header onClickShowSideBar={this.onClickShowSideBar} />
        <main>{this.props.children}</main>
      </Aux>
    );
  }
}
export default Layout;
