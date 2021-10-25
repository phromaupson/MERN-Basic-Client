import React, { useState } from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";
import {
  UserAddOutlined,
  AppstoreOutlined,
  HomeOutlined,
  LoginOutlined,
} from "@ant-design/icons";

//const { SubMenu } = Menu;

const Navbar = () => {
  const [current, setCurrent] = useState("mail");

  const handleClick = (e) => {
    console.log("click ", e);
    setCurrent({ current: e.key });
  };
  return (
    <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
      <Menu.Item key="mail" icon={<HomeOutlined />}>
        <Link to="/">Home</Link>
      </Menu.Item>
      <Menu.Item key="app" icon={<AppstoreOutlined />}>
        Person
      </Menu.Item>
      <Menu.Item
        className="float-right"
        key="register"
        icon={<UserAddOutlined />}
      >
        <Link to="/register">Register</Link>
      </Menu.Item>
      <Menu.Item className="float-right" key="login" icon={<LoginOutlined />}>
        <Link to="/login">Login</Link>
      </Menu.Item>
    </Menu>
  );
};

export default Navbar;
