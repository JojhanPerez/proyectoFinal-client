import React, { useState } from "react";
import { Form, Button, Input, notification } from "antd";
import { UserOutlined} from "@ant-design/icons";
import "./Login.scss";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../../../api/constants";
import { signIn } from "../../../api/user";

export default function Login() {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const changeForm = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  const Login = async (e) => {
    e.preventDefault();
    console.log(inputs);
    const result = await signIn(inputs)

    if (result.message) {
      notification["error"]({
        message: result.message,
      });
    } else {
      const { accessToken, refreshToken } = result;
      localStorage.setItem(ACCESS_TOKEN, accessToken);
      localStorage.setItem(REFRESH_TOKEN, refreshToken);

      notification["success"]({
        message: "Login Correcto",
      });

      window.location.href = "/admin"
    }
    console.log(result);
  };

  return (
    <Form className="login-form" onChange={ changeForm }>
      <Form.Item>
        <Input
          prefix={<UserOutlined />}
          type="email"
          name="email"
          placeholder="Correo electronico"
          className="login-form__input"
        />
      </Form.Item>
      <Form.Item>
        <Input
          prefix={<UserOutlined />}
          type="password"
          name="password"
          placeholder="Contraseña"
          className="login-form__input"
        />
      </Form.Item>
      <Form.Item>
        <Button htmlType="submit" className="login-form__button" onClick={ Login }>
          Entrar
        </Button>
      </Form.Item>
    </Form>
  );
}
