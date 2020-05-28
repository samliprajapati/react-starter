import React, { Component } from "react";
import Navmenu from "./Navmenu";
import MainContainer from "./MainContainer";

export default class MainPage extends Component {
  render() {
    return (
      <div>
        <Navmenu />
        <MainContainer />
      </div>
    );
  }
}
