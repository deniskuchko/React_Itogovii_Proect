import React from "react";
import { Route } from "react-router-dom";
import Header from "../header/Header";
import StickyFooter from "../Footer/Footer";

import "./App.scss";
import MainPage from "../MainPage";
import SignUpContainer from "../SignUp/SignUpContainer";
import SignInContainer from "../SignIn/SignInContainer";
import MainPageContainer from "../MainPage/MainPageContainer";

const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <div className="wrapper-content">
        <Route exact path="/" render={() => <MainPageContainer />}></Route>
        <Route exact path="/signin" render={() => <SignInContainer />}></Route>
        <Route exact path="/signup" render={() => <SignUpContainer />}></Route>
      </div>
      <StickyFooter />
    </div>
  );
};

export default App;
