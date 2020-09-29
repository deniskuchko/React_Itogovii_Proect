import React from "react";
import { connect } from "react-redux";

import { like, unLike } from "../../redux/mainPage-reducer";
import Profile from "./Profile";
import {
  followThunk,
  unFollowThunk,
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
  refreshUser() {
    let userId = this.props.match.params.usersId;
    if (!this.props.isAuth) {
      userId = this.props.authorisedUserId;
      if (!userId) {
        return (userId = this.props.history.push("/login"));
      }
    }
    this.props.getProfileThunk(userId);
  }
  componentDidMount() {
    this.refreshUser();
  }
  componentDidUpdate(prevProps) {
    if (this.props.match.params.usersId != prevProps.match.params.usersId) {
      this.refreshUser();
    }
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
    followThunk,
    unFollowThunk,
    like,
    unLike,
  }),
  withRouter,
  withAuthRedirect
)(ProfileContainer);
