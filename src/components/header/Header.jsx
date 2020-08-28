import React from "react";

import Menu from "./Menu/Menu";

import "./Header.scss";
import { NavLink } from "react-router-dom";

function Header(props) {
  return (
    <header>
      <NavLink to="/">conduit</NavLink>

      <Menu {...props} />
    </header>
  );
}
export default Header;
