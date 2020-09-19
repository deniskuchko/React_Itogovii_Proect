import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { initialise } from "../../redux/app-reducer";
import { compose } from "redux";
import Preloader from "../common/Preloader/Preloader";
import MyArticles from "../MyArticles/MyArticles";
import PostOfUserContainer from "../PostOfUser/PostOfUserContainer";
import StickyFooter from "../Footer/Footer";
import HeaderContainer from "../header/HeaderContainer";
import SignInContainer from "../SignIn/SignIn";
import SignUpContainer from "../SignUp/SignUp";
import MainPageContainer from "../MainPage/MainPageContainer";
import ProfileContainer from "../Profile/ProfileContainer";
import SettingsContainer from "../Settings/SettingsContainer";

import "./App.css";

class App extends React.Component {
  catchAllUnHandlerErrors = (promiseRejectedEvent) => {
    alert("There is some problems");
  };
  componentDidMount() {
    this.props.initialise();
    window.addEventListener("unhandledrejection", this.catchAllUnHandlerErrors);
  }
  componentWillUnmount() {
    window.removeEventListener(
      "unhandledrejection",
      this.catchAllUnHandlerErrors
    );
  }
  render() {
    if (!this.props.initialise) {
      return <Preloader />;
    }
    return (
      <div className="wrapper">
        <HeaderContainer />
        <div className="wrapper-content">
          <Switch>
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
            <Route
              path="/post/:id?"
              render={() => <PostOfUserContainer />}
            ></Route>
            <Route path="/myarticle" render={() => <MyArticles />}></Route>
            <Route
              path="/settings"
              render={() => <SettingsContainer />}
            ></Route>

            <Route path="*" render={() => <div>404 NOT FOUND</div>}></Route>
          </Switch>
          <StickyFooter />
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
