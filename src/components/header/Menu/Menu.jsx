import React, { Component } from "react";
import "./Menu.scss";
import { NavLink } from "react-router-dom";

export default class Menu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: ["Signin", "Signup"],
    };
  }

  render() {
    return (
      <div className="menu">
        <NavLink to="/">Home</NavLink>

        {this.state.items.map((item, index) => (
          <NavLink to={`/${item.toLowerCase()}`}>{item}</NavLink>
        ))}
      </div>
    );
  }
}
