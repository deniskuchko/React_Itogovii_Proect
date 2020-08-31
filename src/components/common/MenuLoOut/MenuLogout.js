import React from "react";
import { NavLink } from "react-router-dom";
import "./MenuLogOut.scss";
let MenuLogOut = () => {
  return (
    <div className="menuLogOut">
      <NavLink to="/myarticle">New article</NavLink>
      <NavLink to="/settings">Settings</NavLink>
      <NavLink to="/myprofile">My profile</NavLink>
    </div>
  );
};
export default MenuLogOut;
