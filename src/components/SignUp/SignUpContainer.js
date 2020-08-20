import React from "react";
import SignUp from "./SignUp";
import {
  addLogUpEmailCreator,
  addLogUpNameCreator,
  addLogUpPasswordCreator,
  sendInfologUpCreator,
} from "../../redux/loginUp-reducer";

const SignUpContainer = (props) => {
  let state = props.store.getState().logUpInfo;

  let nameSendLogUpChange = (body) => {
    props.store.dispatch(addLogUpNameCreator(body));
  };
  let emailSendLogUpChange = (body) => {
    props.store.dispatch(addLogUpEmailCreator(body));
  };
  let passwordSendLogUpChange = (body) => {
    props.store.dispatch(addLogUpPasswordCreator(body));
  };
  let sendInfoPersonClick = () => {
    props.store.dispatch(sendInfologUpCreator());
  };
  return (
    <SignUp
      logUpInfo={state}
      nameSendLogUpChange={nameSendLogUpChange}
      emailSendLogUpChange={emailSendLogUpChange}
      passwordSendLogUpChange={passwordSendLogUpChange}
      sendInfoPersonClick={sendInfoPersonClick}
    />
  );
};

export default SignUpContainer;
