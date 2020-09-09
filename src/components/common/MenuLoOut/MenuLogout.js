import React from "react";
import { NavLink } from "react-router-dom";
import "./MenuLogOut.scss";
const MenuLogOut = (props) => {
  return (
    <div className="menuLogOut">
      <NavLink to="/myarticle">New article</NavLink>
      <NavLink to="/settings">Settings</NavLink>
      <NavLink to="/myprofile">{props.login}</NavLink>
    </div>
  );
};
export default MenuLogOut;
