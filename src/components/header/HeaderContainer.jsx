import React from "react";
import { connect } from "react-redux";
import Header from "./Header";

import "./Header.scss";

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
