import React from "react";
import { Route, withRouter } from "react-router-dom";

import "./App.scss";

import MainPageContainer from "../MainPage/MainPageContainer";
import ProfileContainer from "../Profile/ProfileContainer";
import HeaderContainer from "../header/HeaderContainer";
import SignInContainer from "../SignIn/SignIn";
import SignUpContainer from "../SignUp/SignUp";
import { getAuthUserData } from "../../redux/auth-reducer";
import { connect } from "react-redux";
import { initialise } from "../../redux/app-reducer";
import { compose } from "redux";
import Preloader from "../common/Preloader/Preloader";
import MainPageContainerWithHooks from "../MainPage/MainPageContainerWithHooks";
import MyArticles from "../MyArticles/MyArticles";

class App extends React.Component {
  componentDidMount() {
    this.props.initialise();
  }
  render() {
    if (!this.props.initialise) {
      return <Preloader />;
    }
    return (
      <div className="wrapper">
        <HeaderContainer />
        <div className="wrapper-content">
          <Route exact path="/" render={() => <MainPageContainer />}></Route>
          <Route
            exact
            path="/signin"
            render={() => <SignInContainer />}
          ></Route>
          <Route
            exact
            path="/signup"
            render={() => <SignUpContainer />}
          ></Route>
          <Route
            path="/profile/:usersId?"
            render={() => <ProfileContainer />}
          ></Route>
          <Route path="/myarticle" render={() => <MyArticles />}></Route>
          {/* <NavLink to="/myarticle">New article</NavLink>
      <NavLink to="/settings">Settings</NavLink>
      <NavLink to="/myprofile">{props.login}</NavLink> */}
        </div>
      </div>
    );
  }
}
let mapStatetoProps = (state) => ({
  initialised: state.app.initialised,
});

export default compose(
  withRouter,
  connect(mapStatetoProps, { initialise })
)(App);
