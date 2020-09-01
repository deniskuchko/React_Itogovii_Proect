import React, { Component } from "react";
import "./Menu.scss";
import { NavLink } from "react-router-dom";
import MenuLogIn from "../../common/MenuLogIn/MenuLogIn";
import MenuLogOut from "../../common/MenuLoOut/MenuLogout";

const Menu = (props) => {
  debugger;

  return (
    <div className="menu">
      <NavLink to="/">Home</NavLink>
      {false ? <MenuLogOut /> : <MenuLogIn />}
    </div>
  );
};

export default Menu;
