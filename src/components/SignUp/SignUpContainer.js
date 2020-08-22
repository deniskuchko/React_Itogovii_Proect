import React from "react";
import SignUp from "./SignUp";
import {
  addLogUpEmailCreator,
  addLogUpNameCreator,
  addLogUpPasswordCreator,
  sendInfologUpCreator,
} from "../../redux/loginUp-reducer";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    logUpInfo: state.logUpInfo,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    nameSendLogUpChange: (body) => {
      dispatch(addLogUpNameCreator(body));
    },
    emailSendLogUpChange: (body) => {
      dispatch(addLogUpEmailCreator(body));
    },
    passwordSendLogUpChange: (body) => {
      dispatch(addLogUpPasswordCreator(body));
    },
    sendInfoPersonClick: () => {
      dispatch(sendInfologUpCreator());
    },
  };
};
let SignUpContainer = connect(mapStateToProps, mapDispatchToProps)(SignUp);
export default SignUpContainer;
