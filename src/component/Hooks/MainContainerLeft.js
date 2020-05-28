import React, { Component } from "react";

export default class MainContainerLeft extends Component {
  render() {
    return (
      <div style={{ backgroundColor: "#4168b7", width: "60vw" }}>
        <div style={{ padding: "100px" }}>
          <h2 style={{ color: "white" }}>Hooks</h2>
          <h4 style={{ color: "white" }}>
            Hooks are functions that let you “hook into” React state and
            lifecycle features from function components.
          </h4>
          <br />
          <p style={{ color: "white", fontSize: "22px" }}>Rules of Hooks</p>
          <br />
          <h6 style={{ color: "white", fontSize: "20px" }}>
            Only call Hooks at the top level
          </h6>
          <br />
          <p style={{ color: "white" }}>
            Do not call Hooks inside loops, conditions, or nested functions.
            Hooks should always be used at the top level of the React functions.
            This rule ensures that Hooks are called in the same order each time
            a components renders.
          </p>
          <br />
          <h6 style={{ color: "white", fontSize: "20px" }}>
            Only call Hooks from React functions
          </h6>
          <br />
          <p style={{ color: "white" }}>
            You cannot call Hooks from regular JavaScript functions. Instead,
            you can call Hooks from React function components. Hooks can also be
            called from custom Hooks.
          </p>
        </div>
      </div>
    );
  }
}
