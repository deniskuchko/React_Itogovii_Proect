import React from "react";
import SignInSide from "./SignIn";
import { connect } from "react-redux";
import {
  addLogInPasswordCreator,
  addLogInEmailCreator,
  checkInfologInCreator,
} from "../../redux/logIn-reducer";

const mapStateToProps = (state) => {
  return {
    logInInfo: state.logInInfo,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    emailSendLogInChange: (body) => {
      dispatch(addLogInEmailCreator(body));
    },
    passwordSendLogInChange: (body) => {
      dispatch(addLogInPasswordCreator(body));
    },
    sendInfoPersonClickLogIn: () => {
      dispatch(checkInfologInCreator());
    },
  };
};
const SignInContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SignInSide);

export default SignInContainer;
