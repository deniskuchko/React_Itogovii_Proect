import React from "react";
import MenuLogIn from "../../common/MenuLogIn/MenuLogIn";
import MenuLogOut from "../../common/MenuLoOut/MenuLogout";

import "./Menu.scss";

const Menu = (props) => {
  return (
    <div className="menu">
      {props.isAuth ? (
        <MenuLogOut login={props.login} userId={props.userId} />
      ) : (
        <MenuLogIn />
      )}
    </div>
  );
};

export default Menu;
