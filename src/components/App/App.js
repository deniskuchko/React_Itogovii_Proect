import React from "react";
import { Route } from "react-router-dom";
import SignInSide from "../SignIn/SignIn";
import SignUp from "../SignUp/SignUp";
import Header from "../header/Header";
import StickyFooter from "../Footer/Footer";

import "./App.scss";
import MainPage from "../MainPage";

class App extends React.Component {
  state = {};

  render() {
    return (
      <div className="wrapper">
        <Header />
        <div className="wrapper-content">
          <Route exact path="/" render={() => <MainPage />}></Route>

          <Route exact path="/signin" render={() => <SignInSide />}></Route>
          <Route exact path="/signup" render={() => <SignUp />}></Route>
        </div>
        <StickyFooter />
      </div>
    );
  }
}

export default App;
