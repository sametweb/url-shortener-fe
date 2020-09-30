import React from "react";
import { Link, useLocation } from "react-router-dom";

import { Menu, Layout } from "antd";
import logo from "../logo.png";

function Header() {
  const location = useLocation();

  return (
    <Layout.Header>
      <span className="logo">
        <Link to="/" alt="omitURL url shortening service">
          <img src={logo} alt="omitURL - free URL shortening service" /> omitURL
        </Link>
      </span>
      <Menu theme="dark" mode="horizontal" selectedKeys={[location.pathname]}>
        <Menu.Item key="/about">
          <Link to="/about">About</Link>
        </Menu.Item>
      </Menu>
    </Layout.Header>
  );
}

export default Header;
