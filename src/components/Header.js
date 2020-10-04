import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";

import { Menu, Layout } from "antd";
import logo from "../logo.png";

import { AuthContext } from "../App";
import Avatar from "antd/lib/avatar/avatar";

function Header() {
  const { user, idToken } = useContext(AuthContext);
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
        {!idToken ? (
          <Menu.Item key="/login">
            <Link to="/login">Login</Link>
          </Menu.Item>
        ) : (
          <Menu.Item key="/logout">
            <Link to="/logout" style={{ marginLeft: 20 }}>
              <Avatar size="small" src={user?.photoURL} />
            </Link>
          </Menu.Item>
        )}
      </Menu>
    </Layout.Header>
  );
}

export default Header;
