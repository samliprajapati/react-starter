import React, { Component } from "react";
import { Layout, Menu, Breadcrumb } from "antd";

const { Header, Content, Footer } = Layout;

export default class Navmenu extends Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          padding: 10,
          border: "1px solid green",
          backgroundColor: "black"
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",

            width: "50%",
            color: "white"
          }}
        >
          <div>Hooks</div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",

            width: "50%",
            color: "white"
          }}
        >
          <div style={{ marginRight: "30px" }}>About</div>

          <div style={{ marginRight: "30px" }}>Contact us</div>
        </div>
      </div>
    );
  }
}
