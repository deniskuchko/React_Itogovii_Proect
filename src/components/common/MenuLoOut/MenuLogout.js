import React from "react";
import { NavLink } from "react-router-dom";

import "./MenuLogOut.css";

const MenuLogOut = (props) => {
  return (
    <div className="menuLogOut">
      <NavLink to="/">Home</NavLink>

      <NavLink to="/myarticle">New article</NavLink>
      <NavLink to="/settings">Settings</NavLink>
      <NavLink to={`/profile/${props.userId}`}>{props.login}</NavLink>
    </div>
  );
};
export default MenuLogOut;
