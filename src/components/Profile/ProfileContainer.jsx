import React from "react";
import { connect } from "react-redux";

import {} from "../../redux/mainPage-reducer";
import Profile from "./Profile";
import {
  follow,
  unFollow,
  getProfileThunk,
} from "../../redux/profilePage-reducer";
import { withRouter } from "react-router-dom";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";
import {
  getProfile,
  getIsFollowed,
} from "../../redux/profile-selectors/profile-selectors";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.usersId;
    //this.props.match.params.usersId;

    if (!this.props.isAuth) {
      userId = this.props.authorisedUserId;
      if (!userId) {
        return (userId = this.props.history.push("/login"));
      }
    }

    this.props.getProfileThunk(userId);
  }

  render() {
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}
let mapStateToProps = (state) => {
  return {
    profile: getProfile(state),
    isFollowed: getIsFollowed(state),
    authorisedUserId: state.auth.userId,
    isAuth: state.auth.isAuth,
  };
};

export default compose(
  connect(mapStateToProps, {
    getProfileThunk,
    follow,
    unFollow,
  }),
  withRouter,
  withAuthRedirect
)(ProfileContainer);
