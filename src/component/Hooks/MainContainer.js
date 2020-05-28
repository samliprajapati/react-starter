import React, { Component } from "react";
import MainContainerLeft from "./MainContainerLeft";
import MainContainerReight from "./MainContainerReight";

export default class MainContainer extends Component {
  render() {
    return (
      <div>
        <div style={{ display: "flex" }}>
          <MainContainerLeft />
          <MainContainerReight />
        </div>
      </div>
    );
  }
}
