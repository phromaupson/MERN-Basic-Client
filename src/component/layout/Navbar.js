import React, { useState } from "react";
import { Menu } from "antd";
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from "@ant-design/icons";

const { SubMenu } = Menu;

const Navbar = () => {
  const [current, setCurrent] = useState("mail");

  const handleClick = (e) => {
    console.log("click ", e);
    setCurrent({ current: e.key });
  };
  return (
    <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
      <Menu.Item key="mail" icon={<MailOutlined />}>
        Home
      </Menu.Item>
      <Menu.Item key="app" icon={<AppstoreOutlined />}>
        Person
      </Menu.Item>
      <Menu.Item className="float-right" key="register" icon={<MailOutlined />}>
        Register
      </Menu.Item>
      <Menu.Item
        className="float-right"
        key="login"
        icon={<AppstoreOutlined />}
      >
        Login
      </Menu.Item>
    </Menu>
  );
};

export default Navbar;
