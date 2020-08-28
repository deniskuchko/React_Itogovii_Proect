import React from "react";
import { NavLink } from "react-router-dom";

let MenuLogOut = () => {
  return (
    <div className={s.menuLogIn}>
      <NavLink to="/myarticle">New article</NavLink>
      <NavLink to="/settings">Settings</NavLink>
      <NavLink to="/myprofile">My profile</NavLink>
    </div>
  );
};
export default MenuLogOut;
