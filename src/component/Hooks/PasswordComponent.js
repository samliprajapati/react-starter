import React, { useState } from "react";
import { Input, Button } from "antd";

const PasswordComponent = props => {
  return (
    <div>
      <Input.Password
        placeholder="input password"
        name="password"
        onChange={e => props.setPassword(e.target.value)}
      />
      <Button type="primary" onClick={() => props.stateChange("email")}>
        Back
      </Button>
      <Button
        type="primary"
        onClick={() => {
          props.authenticate();
        }}
      >
        Login
      </Button>
    </div>
  );
};
export default PasswordComponent;
