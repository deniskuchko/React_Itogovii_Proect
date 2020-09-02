import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
/* HOC  Принимает компоненту и выплевывает другую компоненту*/

let mapStateToPropsRedirect = (state) => {
  return {
    isAuth: state.auth.isAuth,
  };
};
export const withAuthRedirect = (Component) => {
  class RedirectComponent extends React.Component {
    render() {
      if (this.props.isAuth) {
        return <Redirect to={"/signin"} />;
      }

      return <Component {...this.props} />;
    }
  }
  let ConnectedAuthRedirectComponent = connect(mapStateToPropsRedirect)(
    RedirectComponent
  );
  return ConnectedAuthRedirectComponent;
};
