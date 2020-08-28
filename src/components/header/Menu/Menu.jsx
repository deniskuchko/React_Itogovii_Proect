import React, { Component } from "react";
import "./Menu.scss";
import { NavLink } from "react-router-dom";
import MenuLogIn from "../../common/MenuLogIn/MenuLogIn";
import MenuLogOut from "../../common/MenuLoOut/MenuLogout";

const Menu = (props) => {
  return (
    <div className="menu">
      <NavLink to="/">Home</NavLink>
      {props.isAtuth ? <MenuLogIn /> : <MenuLogOut />}
    </div>
  );
};

export default Menu;
