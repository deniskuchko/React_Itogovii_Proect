import React from "react";
import { NavLink } from "react-router-dom";
import "./MenuLogIn.scss";

let MenuLogIn = () => {
  return (
    <div className="menuLogOut">
      <NavLink to="/signin">Signin</NavLink>
      <NavLink to="/signup">Signup</NavLink>
      <NavLink to="/profile">Profile</NavLink>
    </div>
  );
};
export default MenuLogIn;
