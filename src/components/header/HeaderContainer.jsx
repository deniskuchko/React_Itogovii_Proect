import React from "react";

import "./Header.scss";
import Header from "./Header";
import { connect } from "react-redux";

class HeaderContainer extends React.Component {
  render() {
    return <Header {...this.props} />;
  }
}

let mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
  userId: state.auth.userId,
});
export default connect(mapStateToProps, {})(HeaderContainer);
