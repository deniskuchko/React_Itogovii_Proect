import React from "react";
import { Route } from "react-router-dom";

import "./App.scss";
import SignUpContainer from "../SignUp/SignUpContainer";
import SignInContainer from "../SignIn/SignInContainer";
import MainPageContainer from "../MainPage/MainPageContainer";
import ProfileContainer from "../Profile/ProfileContainer";
import HeaderContainer from "../header/HeaderContainer";

const App = () => {
  return (
    <div className="wrapper">
      <HeaderContainer />
      <div className="wrapper-content">
        <Route exact path="/" render={() => <MainPageContainer />}></Route>
        <Route exact path="/signin" render={() => <SignInContainer />}></Route>
        <Route exact path="/signup" render={() => <SignUpContainer />}></Route>
        <Route
          path="/profile/:usersId?"
          render={() => <ProfileContainer />}
        ></Route>
      </div>
      {/* <StickyFooter /> */}
    </div>
  );
};

export default App;
