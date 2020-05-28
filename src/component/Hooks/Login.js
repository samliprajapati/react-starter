// import React, { Component } from "react";

// export default class Login extends Component {
//   render() {
//     return (
//       <div>
//
//       </div>
//     );
//   }
// }
import React, { useState } from "react";
import { Input, Button, message, Menu, Icon } from "antd";
import EmailComponent from "./EmailComponent";
import PasswordComponent from "./PasswordComponent";
import Navmenu from "./Navmenu";
const { SubMenu } = Menu;
const Login = () => {
  const [currentComponent, setComponent] = useState("email");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function authenticate() {
    if (email === "samli" && password === "1234") {
      message.success("login success");
    } else message.error("wrong emailid and password");
  }
  return (
    <div>
      <h2>Log in</h2>
      <p>Don't have an account? Register now</p>

      <div>Enter Your Hooks Id</div>
      {currentComponent === "email" && (
        <EmailComponent stateChange={setComponent} setEmail={setEmail} />
      )}
      {currentComponent === "password" && (
        <PasswordComponent
          stateChange={setComponent}
          setPassword={setPassword}
          authenticate={authenticate}
        />
      )}
    </div>
  );
};
export default Login;
