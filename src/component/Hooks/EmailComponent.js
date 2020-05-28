import React, { useState } from "react";
import { Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

const EmailComponent = props => {
  return (
    <div>
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{ remember: true }}
      >
        <Form.Item
          name="username"
          rules={[{ required: true, message: "Please input your Username!" }]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Enter Your Email"
            onChange={e => props.setEmail(e.target.value)}
          />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
            block
            onClick={() => props.stateChange("password")}
          >
            Continue
          </Button>
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <a className="login-form-forgot" href="">
            Forgot password
          </a>
        </Form.Item>
        <a href="">register now!</a>
      </Form>
      {/* <Input
        placeholder="Enter Email"
        name="email"
        onChange={e => props.setEmail(e.target.value)}
      />
      <Button type="primary" onClick={() => props.stateChange("password")}>
        Continue
      </Button> */}
    </div>
  );
};
export default EmailComponent;
