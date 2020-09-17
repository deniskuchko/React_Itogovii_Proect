import React from "react";

import Menu from "./Menu/Menu";

import { NavLink } from "react-router-dom";

import "./Header.css";

const Header = (props) => {
  return (
    <header>
      <NavLink to="/">conduit</NavLink>

      <Menu {...props} />
    </header>
  );
};
export default Header;
