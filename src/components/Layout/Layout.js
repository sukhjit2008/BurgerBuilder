import React, { Component } from "react";
import Aux from "../HOC/Aux";
import Header from "../Navigation/Header/Header";
import Sidebar from "../Navigation/Sidebar/Sidebar";

class Layout extends Component {
  state = {
    hideSideBar: true
  };
  //Show sidebar
  onClickShowSideBar = () => {
    this.setState({ hideSideBar: false });
  };
  //Hide sidebar
  onClickHideSideBar = () => {
    this.setState({ hideSideBar: true });
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
