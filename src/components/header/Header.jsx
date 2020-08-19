import React from "react";

import Menu from "./Menu/Menu";

import "./Header.scss";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header>
      <NavLink to="/">conduit</NavLink>

      <Menu />
    </header>
  );
}
export default Header;
