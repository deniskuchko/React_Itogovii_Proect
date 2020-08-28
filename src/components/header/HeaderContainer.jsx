import React from "react";

import "./Header.scss";
import { NavLink } from "react-router-dom";
import Header from "./Header";
import { connect } from "react-redux";
import * as axios from "axios";
import { setUserData } from "../../redux/auth-reducer";

setUserData;
class HeaderContainer extends React.Component {
  componentDidMount() {
    axios
      .get("https://social-network.samuraijs.com/api/1.0/auth/me", {
        withCredentials: true,
      })
      .then((response) => {
        if (response.data.resultCode === 0) {
          let(id, email, login) = response.data.data;
          this.props.setUserData(response.data);
        }
      });
  }
  render() {
    return <Header {...this.props} />;
  }
}

let mapStateToProps = (state) => ({
  isAuth: state.isAuth,
  login: state.login,
});
export default connect(mapStateToProps, { setUserData })(HeaderContainer);
