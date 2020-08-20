import React from "react";
import { Route } from "react-router-dom";
import SignInSide from "../SignIn/SignIn";
import SignUp from "../SignUp/SignUp";
import Header from "../header/Header";
import StickyFooter from "../Footer/Footer";

import "./App.scss";
import MainPage from "../MainPage";
import SignUpContainer from "../SignUp/SignUpContainer";
import SignInContainer from "../SignIn/SignInContainer";

const App = (props) => {
  return (
    <div className="wrapper">
      <Header />
      <div className="wrapper-content">
        <Route exact path="/" render={() => <MainPage />}></Route>

        <Route exact path="/signin" render={() => <SignInContainer />}></Route>
        <Route
          exact
          path="/signup"
          render={() => <SignUpContainer store={props.store} />}
        ></Route>
      </div>
      <StickyFooter />
    </div>
  );
};

export default App;
